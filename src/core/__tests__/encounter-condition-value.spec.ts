import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';

describe('PokéAPI Encounter Condition Value resource', () => {
  const api = new PokeApi('encounter-condition-value');

  it('fetches one Encounter Condition Value', async () => {
    const result = await api.get(2);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Encounter Condition Value by id', async () => {
    const result = await api.getById(5);
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
    expect(result.name).toBe('time-night');
  });

  it('fetches one Encounter Condition Value by name', async () => {
    const result = await api.getByName('swarm-yes');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
    expect(result.name).toBe('swarm-yes');
  });

  it('fetches the first 20 Encounter Condition Value', async () => {
    const result = await api.getAll();
    expect(result).toHaveLength(20);
    expect(getResourceIdFromURL(result[0].url)).toBe(1);
    expect(getResourceIdFromURL(result[4].url)).toBe(5);
  });

  it('fetches 3 Encounter Condition Values, starting at 2nd Encounter Condition Value', async () => {
    const result = await api.getAll({ offset: 1, limit: 3 });
    expect(result).toHaveLength(3);
    expect(getResourceIdFromURL(result[0].url)).toBe(2);
    expect(getResourceIdFromURL(result[2].url)).toBe(4);
  });

  it('retuns the total number of Encounter Condition Value resources', async () => {
    const count = await api.count();
    expect(count).toBeDefined();
    expect(count).toBe(71);
  });

  it('retuns pagination info about Encounter Condition Value resources', async () => {
    const pagination = await api.paginate();
    expect(pagination.count).toBeDefined();
    expect(pagination.next).toBeDefined();
    expect(pagination.previous).toBeDefined();
    expect(pagination.results).toHaveLength(20);
  });
});
