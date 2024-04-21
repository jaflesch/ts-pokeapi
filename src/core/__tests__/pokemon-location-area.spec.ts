import { describe, expect, it } from '@jest/globals';
import { PokeApi } from '../poke-api';
import { getResourceIdFromURL } from '../utils';
import { ResourceNotFoundError } from '../../errors';

describe('PokéAPI Pokémon Location Area resource', () => {
  const api = new PokeApi('pokemon-location-area');

  it('fetches one Pokémon Location Area', async () => {
    const result = await api.get(1);
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });

  it('fetches one Pokémon Location Area by id', async () => {
    const result = await api.getById(1);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(getResourceIdFromURL(result[0].location_area.url)).toBe(281);
  });

  it('fetches one Pokémon Location Area by name', async () => {
    const result = await api.getByName('charmander');
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(getResourceIdFromURL(result[0].location_area.url)).toBe(285);
  });

  it('fetches one Pokémon Location Area by getAll() method', async () => {
    const result = await api.getAll(7);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
    expect(getResourceIdFromURL(result[0].location_area.url)).toBe(282);
  });

  it('throws ResourceNotFoundError when fetching invalid Pokémon Location Area', async () => {
    await expect(async () => {
      await api.get(-10);
    }).rejects.toThrow(ResourceNotFoundError);
  });
});
