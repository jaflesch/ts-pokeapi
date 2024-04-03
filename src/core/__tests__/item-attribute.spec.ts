import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Item Attribute resource', () => {
  const api = new PokeApi('item-attribute');

  it('fetches one Item Attribute', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Item Attribute by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('countable');
  });

  it('fetches one Item Attribute by name', async () => {
    const result = await api.getByName('holdable');
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
    expect(result.name).toBe('holdable');
  });

  it('fetches the first 8 Item Attributes', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(8);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[7].url)).toBe(8);
  });

  it('fetches 3 Item Attributes, starting at 2nd Item Attribute', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Item Attribute resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(8);
  });

  it('retuns pagination info about Item Attribute resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(8);
  });
});
