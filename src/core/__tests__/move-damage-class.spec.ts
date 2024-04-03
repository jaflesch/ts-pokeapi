import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Move Damage Class resource', () => {
  const api = new PokeApi('move-damage-class');

  it('fetches one Move Damage Class', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Move Damage Class by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('status');
  });

  it('fetches one Move Damage Class by name', async () => {
    const result = await api.getByName('physical');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('physical');
  });

  it('fetches the first 3 Move Damage Classes', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(3);
    // resource starts with id = -1
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[2].url)).toBe(3);
  });

  it('fetches 3 Move Damage Classes, starting at 2nd Move Damage Class', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(2);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[1].url)).toBe(3);
  });

  it('retuns the total number of Move Damage Class resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(3);
  });

  it('retuns pagination info about Move Damage Class resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(3);
  });
});
