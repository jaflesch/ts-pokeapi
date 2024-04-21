import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Growth Rate resource', () => {
  const api = new PokeApi('growth-rate');

  it('fetches one Growth Rate', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Growth Rate by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('slow');
  });

  it('fetches one Growth Rate by name', async () => {
    const result = await api.getByName('medium');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('medium');
  });

  it('fetches the first 6 Growth Rates', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(6);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[5].url)).toBe(6);
  });

  it('fetches 3 Growth Rates, starting at 2nd Growth Rate', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Growth Rate resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(6);
  });

  it('retuns pagination info about Gender resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(6);
  });

  it('throws ResourceNotFoundError when fetching invalid Growth Rate', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
