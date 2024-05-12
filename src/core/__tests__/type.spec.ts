import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Pokémon Type resource', () => {
  const api = new PokeApi('type');

  it('fetches one Pokémon Type', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Type by id', async () => {
    const result = await api.getById(8);
    expect(result).toBeDefined();
    expect(result.id).toBe(8);
    expect(result.name).toBe('ghost');
  });

  it('fetches one Pokémon Type by name', async () => {
    const result = await api.getByName('normal');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('normal');
  });

  it('fetches the first 20 Pokémon Types', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(10001);
  });

  it('fetches 3 Pokémon Types, starting at 2nd Pokémon Type', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Pokémon Type resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(21);
  });

  it('retuns pagination info about Pokémon Type resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });

  it('throws ResourceNotFoundError when fetching invalid Pokémon Type', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
