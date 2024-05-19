import { describe, expect, it, jest } from '@jest/globals';
import { pokeapi, PokeApi } from '../poke-api';

describe('PokeApi class', () => {
  it('defines an instance of PokeApi class', () => {
    const api = new PokeApi('pokemon');
    expect(api).toBeDefined();
  });

  it('calls console.log() when debug property is true', async () => {
    const consoleSpy = jest.spyOn(global.console, 'log');
    const apiWithParams = new PokeApi('pokemon', { debug: true });
    const pokemon = await apiWithParams.get(1);

    expect(apiWithParams).toBeDefined();
    expect(pokemon).toBeDefined();
    expect(consoleSpy).toHaveBeenCalled();
  });
});

describe('pokeapi() function', () => {
  it('defines an instance of PokeApi class', async () => {
    const api = pokeapi('pokemon');
    expect(api).toBeDefined();
  });

  it('calls console.log() when debug property is true', async () => {
    const consoleSpy = jest.spyOn(global.console, 'log');
    const apiWithParams = pokeapi('pokemon', { debug: true });
    const pokemon = await apiWithParams.get(1);

    expect(apiWithParams).toBeDefined();
    expect(pokemon).toBeDefined();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
