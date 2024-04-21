import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Characteristic resource', () => {
  const api = new PokeApi('characteristic');

  it('fetches one Characteristic', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Characteristic by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
  });

  it('fetches the first 20 Characteristic', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 3 Characteristic, starting at 2nd Characteristic', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Characteristic resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(30);
  });

  it('retuns pagination info about Characteristic resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });

  it('throws ResourceNotFoundError when fetching invalid Characteristic', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
