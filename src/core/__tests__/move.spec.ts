import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Move resource', () => {
  const api = new PokeApi('move');

  it('fetches one Move', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Move by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('pound');
  });

  it('fetches one Move by name', async () => {
    const result = await api.getByName('scratch');
    expect(result).toBeDefined();
    expect(result.id).toBe(10);
    expect(result.name).toBe('scratch');
  });

  it('fetches the first 20 Moves', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 3 Moves, starting at 2nd Move', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Move resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(937);
  });

  it('retuns pagination info about Move resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});