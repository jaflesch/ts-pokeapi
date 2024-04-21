import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Move Category resource', () => {
  const api = new PokeApi('move-category');

  it('fetches one Move Category', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Move Category by id', async () => {
    const result = await api.getById(0);
    expect(result).toBeDefined();
    expect(result.id).toBe(0);
    expect(result.name).toBe('damage');
  });

  it('fetches one Move Category by name', async () => {
    const result = await api.getByName('ailment');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('ailment');
  });

  it('fetches the first 14 Move Categories', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(14);
    // resource starts with id = -1
    expect(getResourceIdFromURL(result[0].url)).toBe(0);
    expect(getResourceIdFromURL(result[13].url)).toBe(13);
  });

  it('fetches 3 Move Categories, starting at 2nd Move Category', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[2].url)).toBe(3);
  });

  it('retuns the total number of Move Category resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(14);
  });

  it('retuns pagination info about Move Category resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(14);
  });

  it('throws ResourceNotFoundError when fetching invalid Move Category', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
