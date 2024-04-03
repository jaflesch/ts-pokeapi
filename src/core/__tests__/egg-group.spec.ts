import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Egg Group resource', () => {
  const api = new PokeApi('egg-group');

  it('fetches one Egg Group', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Egg Group by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('monster');
  });

  it('fetches one Egg Group by name', async () => {
    const result = await api.getByName('ditto');
    expect(result).toBeDefined();
    expect(result.id).toBe(13);
    expect(result.name).toBe('ditto');
  });

  it('fetches the first 15 Egg Groups', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(15);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[14].url)).toBe(15);
  });

  it('fetches 3 Egg Groups, starting at 2nd Egg Group', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Egg Group resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(15);
  });

  it('retuns pagination info about Egg Group resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(15);
  });
});
