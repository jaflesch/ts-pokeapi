import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Pokémon Specie resource', () => {
  const api = new PokeApi('pokemon-species');

  it('fetches one Pokémon Specie', async () => {
    const result = await api.get(151);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Specie by id', async () => {
    const result = await api.getById(25);
    expect(result).toBeDefined();
    expect(result.id).toBe(25);
    expect(result.name).toBe('pikachu');
  });

  it('fetches one Pokémon Specie by name', async () => {
    const result = await api.getByName('pikachu');
    expect(result).toBeDefined();
    expect(result.id).toBe(25);
    expect(result.name).toBe('pikachu');
  });

  it('fetches the first 20 Pokémon Species', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 10 Pokémon Species, starting at 101th Pokémon Specie', async () => {
    const result = await api.getAll({ offset: 100, limit: 10 });
    expect(result).toHaveLength(10);
    expect(getResourceIdFromURL(result[0].url)).toBe(101);
    expect(getResourceIdFromURL(result[9].url)).toBe(110);
  });

  it('retuns the total number of Pokémon Specie resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(1025);
  });

  it('retuns pagination info about Pokémon Specie resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
