import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Location Area resource', () => {
  const api = new PokeApi('location-area');

  it('fetches one Location Area', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Location Area by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('canalave-city-area');
  });

  it('fetches one Location Area by name', async () => {
    const result = await api.getByName('sunyshore-city-area');
    expect(result).toBeDefined();
    expect(result.id).toBe(4);
    expect(result.name).toBe('sunyshore-city-area');
  });

  it('fetches the first 20 Location Areas', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 3 Location Areas, starting at 2nd Location Area', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Location Area resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(1054);
  });

  it('retuns pagination info about Location Area resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
