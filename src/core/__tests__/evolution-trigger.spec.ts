import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Evolution Trigger resource', () => {
  const api = new PokeApi('evolution-trigger');

  it('fetches one Evolution Trigger', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Evolution Trigger by id', async () => {
    const result = await api.getById(3);
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('use-item');
  });

  it('fetches one Evolution Trigger by name', async () => {
    const result = await api.getByName('level-up');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('level-up');
  });

  it('fetches the first 13 Evolution Trigger', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(13);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[4].url)).toBe(5);
  });

  it('fetches 3 Evolution Triggers, starting at 2nd Evolution Trigger', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Evolution Trigger resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(13);
  });

  it('retuns pagination info about Evolution trigger resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(13);
  });
});
