import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Encounter Method resource', () => {
  const api = new PokeApi('encounter-method');

  it('fetches one Encounter Method', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Encounter Method by id', async () => {
    const result = await api.getById(5);
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
    expect(result.name).toBe('surf');
  });

  it('fetches one Encounter Method by name', async () => {
    const result = await api.getByName('walk');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('walk');
  });

  it('fetches the first 20 Encounter Method', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[4].url)).toBe(5);
  });

  it('fetches 3 Encounter Methods, starting at 2nd Encounter Method', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Encounter Method resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(37);
  });

  it('retuns pagination info about Encounter Method resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
