import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Move Ailment resource', () => {
  const api = new PokeApi('move-ailment');

  it('fetches one Move Ailment', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Move Ailment by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('paralysis');
  });

  it('fetches one Move Ailment by name', async () => {
    const result = await api.getByName('sleep');
    expect(result).toBeDefined();
    expect(result.id).toBe(2);
    expect(result.name).toBe('sleep');
  });

  it('fetches the first 20 Move Ailments', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    // resource starts with id = -1
    expect(getResourceIdFromURL(result[0].url)).toBe(-1);
    expect(getResourceIdFromURL(result[19].url)).toBe(21);
  });

  it('fetches 3 Move Ailments, starting at 2nd Move Ailment', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    // resource starts with id = -1
    expect(getResourceIdFromURL(result[0].url)).toBe(0);
    expect(getResourceIdFromURL(result[2].url)).toBe(2);
  });

  it('retuns the total number of Move Ailment resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(22);
  });

  it('retuns pagination info about Move Ailment resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });

  it('throws ResourceNotFoundError when fetching invalid Move Ailment', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
