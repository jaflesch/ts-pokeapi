import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Ability resource', () => {
  const api = new PokeApi('ability');

  it('fetches one Ability', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Ability by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('stench');
  });

  it('fetches one Ability by name', async () => {
    const result = await api.getByName('sturdy');
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
    expect(result.name).toBe('sturdy');
  });

  it('fetches the first 20 Abilities', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[9].url)).toBe(10);
  });

  it('fetches 3 Abilities, starting at 2nd Ability', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Ability resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(367);
  });

  it('retuns pagination info about Ability resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
