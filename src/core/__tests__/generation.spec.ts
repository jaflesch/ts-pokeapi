import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Generation resource', () => {
  const api = new PokeApi('generation');

  it('fetches one Generation', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Generation by id', async () => {
    const result = await api.getById(3);
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('generation-iii');
  });

  it('fetches one Generation by name', async () => {
    const result = await api.getByName('generation-i');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('generation-i');
  });

  it('fetches the first 9 Generations', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(9);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[8].url)).toBe(9);
  });

  it('fetches 3 Generations, starting at 2nd Generation', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Generation resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(9);
  });

  it('retuns pagination info about Generation resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(9);
  });

  it('throws ResourceNotFoundError when fetching invalid Generation', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
