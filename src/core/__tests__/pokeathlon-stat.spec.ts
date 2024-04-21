import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI PokéAthlon Stat resource', () => {
  const api = new PokeApi('pokeathlon-stat');

  it('fetches one PokéAthlon Stat', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one PokéAthlon Stat by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('speed');
  });

  it('fetches one PokéAthlon Stat by name', async () => {
    const result = await api.getByName('power');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('power');
  });

  it('fetches the first 5 PokéAthlon Stats', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(5);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[4].url)).toBe(5);
  });

  it('fetches 3 PokéAthlon Stats, starting at 2nd PokéAthlon Stat', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of PokéAthlon Stat resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(5);
  });

  it('retuns pagination info about PokéAthlon Stat resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(5);
  });

  it('throws ResourceNotFoundError when fetching invalid PokéAhtlon Stat', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
