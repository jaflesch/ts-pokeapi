import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Pokémon Stat resource', () => {
  const api = new PokeApi('stat');

  it('fetches one Pokémon Stat', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Stat by id', async () => {
    const result = await api.getById(2);
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('attack');
  });

  it('fetches one Pokémon Stat by name', async () => {
    const result = await api.getByName('hp');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('hp');
  });

  it('fetches the first 8 Pokémon Stats', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(8);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[7].url)).toBe(8);
  });

  it('fetches 3 Pokémon Stats, starting at 2nd Pokémon Stat', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Pokémon Stat resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(8);
  });

  it('retuns pagination info about Pokémon Stat resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(8);
  });

  it('throws ResourceNotFoundError when fetching invalid Pokémon Stat', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
