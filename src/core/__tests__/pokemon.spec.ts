import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Pokémon resource', () => {
  const api = new PokeApi('pokemon');

  it('fetches one Pokémon', async () => {
    const result = await api.get(151);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon by id', async () => {
    const result = await api.getById(25);
    expect(result).toBeDefined();
    expect(result.id).toBe(25);
    expect(result.name).toBe('pikachu');
  });

  it('fetches one Pokémon by name', async () => {
    const result = await api.getByName('pikachu');
    expect(result).toBeDefined();
    expect(result.id).toBe(25);
    expect(result.name).toBe('pikachu');
  });

  it('fetches the first 20 Pokémon', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 10 Pokémon, starting at 101th Pokémon', async () => {
    const result = await api.getAll({ offset: 100, limit: 10 });
    expect(result).toHaveLength(10);
    expect(getResourceIdFromURL(result[0].url)).toBe(101);
    expect(getResourceIdFromURL(result[9].url)).toBe(110);
  });

  it('retuns the total number of Pokémon resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(1302);
  });

  it('retuns pagination info about Pokémon resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });

  it('throws ResourceNotFoundError when fetching invalid Pokémon', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
