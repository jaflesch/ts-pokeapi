import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Pal Park Area resource', () => {
  const api = new PokeApi('pal-park-area');

  it('fetches one Pal Park Area', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pal Park Area by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('forest');
  });

  it('fetches one Pal Park Area by name', async () => {
    const result = await api.getByName('field');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('field');
  });

  it('fetches the first 5 Pal Park Areas', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(5);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[4].url)).toBe(5);
  });

  it('fetches 3 Pal Park Areas, starting at 2nd Pal Park Area', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Pal Park Area resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(5);
  });

  it('retuns pagination info about Pal Park Area resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(5);
  });
});
