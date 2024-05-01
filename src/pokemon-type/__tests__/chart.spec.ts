import { describe, expect, it } from '@jest/globals';
import { PokemonTypesArrayIndex } from '../constants';
import { getPokemonTypeChartAttack, PokemonTypeChart } from '../chart';

describe('when type matchup', () => {
  it("retuns an object with 'normal', 'noEffect', 'superEffective', and 'notEffective' properties", async () => {
    const normal = getPokemonTypeChartAttack(PokemonTypesArrayIndex.NORMAL);
    expect(normal).toBeDefined();
    expect(normal).toHaveProperty('normal');
    expect(normal).toHaveProperty('noEffect');
    expect(normal).toHaveProperty('notEffective');
    expect(normal).toHaveProperty('superEffective');
  });
  it('returns the correct PokemonTypesArrayIndex[] for no effect Normal attacking type chart', async () => {
    const normal = getPokemonTypeChartAttack(PokemonTypesArrayIndex.NORMAL);
    expect(normal.noEffect).toContain(PokemonTypesArrayIndex.GHOST);
  });
  it('returns the correct PokemonTypesArrayIndex[] for not effective Normal attacking type chart', async () => {
    const normal = getPokemonTypeChartAttack(PokemonTypesArrayIndex.NORMAL);
    expect(normal.notEffective).toContain(PokemonTypesArrayIndex.ROCK);
    expect(normal.notEffective).toContain(PokemonTypesArrayIndex.STEEL);
  });
  it('returns and empty array for super effective Normal attacking type chart', async () => {
    const normal = getPokemonTypeChartAttack(PokemonTypesArrayIndex.NORMAL);
    expect(normal.superEffective).toHaveLength(0);
  });
});
