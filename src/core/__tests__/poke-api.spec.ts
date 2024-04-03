import { describe, expect, it } from '@jest/globals';
import { pokeapi, PokeApi } from '../poke-api';

describe('PokeApi class', () => {
  it('defines an instance of PokeApi class', () => {
    const api = new PokeApi('pokemon');
    expect(api).toBeDefined();

    const apiWithParams = new PokeApi('pokemon', { debug: true });
    expect(apiWithParams).toBeDefined();
  });
});

describe('pokeapi() function', () => {
  it('defines an instance of PokeApi class', async () => {
    const api = pokeapi('pokemon', { debug: true });
    expect(api).toBeDefined();

    const apiWithParams = pokeapi('pokemon', { debug: true });
    expect(apiWithParams).toBeDefined();
  });
});
