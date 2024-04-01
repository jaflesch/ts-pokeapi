import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Pokémon Shape resource', () => {
  const api = new PokeApi('pokemon-shape');

  it('fetches one Pokémon Shape', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Shape by id', async () => {
    const result = await api.getById(3);
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('fish');
  });

  it('fetches one Pokémon Shape by name', async () => {
    const result = await api.getByName('ball');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('ball');
  });

  it('fetches the first 14 Pokémon Shapes', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(14);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[13].url)).toBe(14);
  });

  it('fetches 3 Pokémon Shapes, starting at 2nd Pokémon Shape', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Pokémon Shape resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(14);
  });

  it('retuns pagination info about Pokémon Shape resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(14);
  });
});
