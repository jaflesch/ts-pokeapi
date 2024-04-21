import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Move Learn Method resource', () => {
  const api = new PokeApi('move-learn-method');

  it('fetches one Move Learn Method', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Move Learn Method by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('level-up');
  });

  it('fetches one Move Learn Method by name', async () => {
    const result = await api.getByName('egg');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('egg');
  });

  it('fetches the first 11 Move Categories', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(11);
    // resource starts with id = -1
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[10].url)).toBe(11);
  });

  it('fetches 3 Move Categories, starting at 2nd Move Learn Method', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Move Learn Method resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(11);
  });

  it('retuns pagination info about Move Learn Method resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(11);
  });

  it('throws ResourceNotFoundError when fetching invalid Move Learn Method', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
