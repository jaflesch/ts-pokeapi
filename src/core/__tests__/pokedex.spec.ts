import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Pokédex resource', () => {
  const api = new PokeApi('pokedex');

  it('fetches one Pokédex', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokédex by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('national');
  });

  it('fetches one Pokédex by name', async () => {
    const result = await api.getByName('kanto');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('kanto');
  });

  it('fetches the first 20 Pokédex', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    // missing pokedex with id = 10
    expect(getResourceIdFromURL(result[19].url)).toBe(21);
  });

  it('fetches 3 Pokédex, starting at 2nd Pokédex', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Pokédex resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(32);
  });

  it('retuns pagination info about Pokédex resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
