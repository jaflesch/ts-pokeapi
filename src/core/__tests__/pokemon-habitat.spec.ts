import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Pokémon Habitat resource', () => {
  const api = new PokeApi('pokemon-habitat');

  it('fetches one Pokémon Habitat', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Habitat by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('cave');
  });

  it('fetches one Pokémon Habitat by name', async () => {
    const result = await api.getByName('grassland');
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('grassland');
  });

  it('fetches the first 9 Pokémon Habitat', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(9);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[8].url)).toBe(9);
  });

  it('fetches 3 Pokémon Habitat, starting at 2nd Pokémon Habitat', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Pokémon Habitat resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(9);
  });

  it('retuns pagination info about Pokémon Habitat resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(9);
  });
});
