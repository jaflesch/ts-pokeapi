import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Location resource', () => {
  const api = new PokeApi('location');

  it('fetches one Location', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Location by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('canalave-city');
  });

  it('fetches one Location by name', async () => {
    const result = await api.getByName('pallet-town');
    expect(result).toBeDefined();
    expect(result.id).toBe(86);
    expect(result.name).toBe('pallet-town');
  });

  it('fetches the first 20 Locations', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 3 Locations, starting at 2nd Location', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Location resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(1036);
  });

  it('retuns pagination info about Location resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });

  it('throws ResourceNotFoundError when fetching invalid Location', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
