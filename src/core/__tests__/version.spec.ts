import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Version resource', () => {
  const api = new PokeApi('version');

  it('fetches one Version Group', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Version by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('red');
  });

  it('fetches one Version by name', async () => {
    const result = await api.getByName('yellow');
    expect(result).toBeDefined();
    expect(result.id).toBe(3);
    expect(result.name).toBe('yellow');
  });

  it('fetches the first 20 Version Groups', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[19].url)).toBe(20);
  });

  it('fetches 3 Version Groups, starting at 2nd Version Group', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Version resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(43);
  });

  it('retuns pagination info about Version resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
