import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Pokémon Form resource', () => {
  const api = new PokeApi('pokemon-form');

  it('fetches one Pokémon Form', async () => {
    const result = await api.get(151);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Form by id', async () => {
    const result = await api.getById(25);
    expect(result).toBeDefined();
    expect(result.id).toBe(25);
    expect(result.name).toBe('pikachu');
  });

  it('fetches one Pokémon Form by name', async () => {
    const result = await api.getByName('charmander');
    expect(result).toBeDefined();
    expect(result.id).toBe(4);
    expect(result.name).toBe('charmander');
  });

  it('fetches the first 20 Pokémon Form', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 10 Pokémon Form, starting at 101th Pokémon Form', async () => {
    const result = await api.getAll({ offset: 100, limit: 10 });
    expect(result).toHaveLength(10);
    expect(getResourceIdFromURL(result[0].url)).toBe(101);
    expect(getResourceIdFromURL(result[9].url)).toBe(110);
  });

  it('retuns the total number of Pokémon Form resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(1473);
  });

  it('retuns pagination info about Pokémon Form resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });

  it('throws ResourceNotFoundError when fetching invalid Pokémon Form', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
