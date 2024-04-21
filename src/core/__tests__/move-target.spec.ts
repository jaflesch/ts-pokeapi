import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Move Target resource', () => {
  const api = new PokeApi('move-target');

  it('fetches one Move Target', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Move Target by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('specific-move');
  });

  it('fetches one Move Target by name', async () => {
    const result = await api.getByName('ally');
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('ally');
  });

  it('fetches the first 16 Move Targets', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(16);
    // resource starts with id = -1
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[13].url)).toBe(14);
  });

  it('fetches 3 Move Targets, starting at 2nd Move Target', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Move Target resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(16);
  });

  it('retuns pagination info about Move Target resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(16);
  });

  it('throws ResourceNotFoundError when fetching invalid Move Target', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
