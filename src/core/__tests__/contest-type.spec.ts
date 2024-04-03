import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Contest Type resource', () => {
  const api = new PokeApi('contest-type');

  it('fetches one Contest Type', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Contest Type by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('cool');
  });

  it('fetches one Contest Type by name', async () => {
    const result = await api.getByName('beauty');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('beauty');
  });

  it('fetches the first 5 Contest Type', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(5);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[4].url)).toBe(5);
  });

  it('fetches 3 Contest Types, starting at 2nd Contest Type', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Contest Type resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(5);
  });

  it('retuns pagination info about Contest Type resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(5);
  });
});
