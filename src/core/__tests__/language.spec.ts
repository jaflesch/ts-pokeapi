import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Language resource', () => {
  const api = new PokeApi('language');

  it('fetches one Language', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Language by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('ja-Hrkt');
  });

  it('fetches one Language by name', async () => {
    const result = await api.getByName('en');
    expect(result).toBeDefined();
    expect(result.id).toBe(9);
    expect(result.name).toBe('en');
  });

  it('fetches the first 13 Languages', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(13);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[12].url)).toBe(13);
  });

  it('fetches 3 Languages, starting at 2nd Language', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Language resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(13);
  });

  it('retuns pagination info about Language resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(13);
  });

  it('throws ResourceNotFoundError when fetching invalid Language', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
