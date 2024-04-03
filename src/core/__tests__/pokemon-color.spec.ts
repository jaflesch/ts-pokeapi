import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Pokémon Color resource', () => {
  const api = new PokeApi('pokemon-color');

  it('fetches one Pokémon Color', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Color by id', async () => {
    const result = await api.getById(3);
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('brown');
  });

  it('fetches one Pokémon Color by name', async () => {
    const result = await api.getByName('blue');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('blue');
  });

  it('fetches the first 10 Pokémon Colors', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(10);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[9].url)).toBe(10);
  });

  it('fetches 3 Pokémon Colors, starting at 2nd Pokémon Color', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Pokémon Color resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(10);
  });

  it('retuns pagination info about Pokémon Color resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(10);
  });
});
