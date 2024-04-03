import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Berry resource', () => {
  const api = new PokeApi('berry');

  it('fetches one Berry', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Berry by id', async () => {
    const result = await api.getById(5);
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
    expect(result.name).toBe('aspear');
  });

  it('fetches one Berry by name', async () => {
    const result = await api.getByName('cheri');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('cheri');
  });

  it('fetches the first 20 Berries', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 5 Berries, starting at 10th Berry', async () => {
    const result = await api.getAll({ offset: 10, limit: 5 });
    expect(result).toHaveLength(5);
    expect(getResourceIdFromURL(result[0].url)).toBe(11);
    expect(getResourceIdFromURL(result[4].url)).toBe(15);
  });

  it('retuns the total number of Berry resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(64);
  });

  it('retuns pagination info about Berry resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
