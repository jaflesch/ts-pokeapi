import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Region resource', () => {
  const api = new PokeApi('region');

  it('fetches one Region', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Region by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('kanto');
  });

  it('fetches one Region by name', async () => {
    const result = await api.getByName('hoenn');
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('hoenn');
  });

  it('fetches the first 10 Regions', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(10);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[9].url)).toBe(10);
  });

  it('fetches 3 Regions, starting at 2nd Region', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Region resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(10);
  });

  it('retuns pagination info about Region resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(10);
  });

  it('throws ResourceNotFoundError when fetching invalid Region', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
