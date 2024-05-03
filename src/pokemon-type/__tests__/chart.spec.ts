import { describe, expect, it } from '@jest/globals';
import { PokemonTypesArrayIndex } from '../constants';
import {
  getPokemonTypeChartAttack,
  getPokemonTypeChartAttackPros,
  PokemonTypeChart,
} from '../chart';

describe('when using getPokemonTypeChartAttack() function', () => {
  it("retuns an object with 'chart', 'normal', 'noEffect', 'superEffective', and 'notEffective' properties", async () => {
    const normal = getPokemonTypeChartAttack(PokemonTypesArrayIndex.NORMAL);
    expect(normal).toBeDefined();
    expect(normal).toHaveProperty('chart');
    expect(normal).toHaveProperty('normal');
    expect(normal).toHaveProperty('noEffect');
    expect(normal).toHaveProperty('notEffective');
    expect(normal).toHaveProperty('superEffective');
  });

  it('returns the same results for getPokemonTypeChartAttack() function and PokemonTypeChart.getAttack() method', async () => {
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.NORMAL),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.NORMAL));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.FIRE),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.FIRE));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.WATER),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.WATER));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.GRASS),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.GRASS));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.ELECTRIC),
    ).toStrictEqual(
      PokemonTypeChart.getAttack(PokemonTypesArrayIndex.ELECTRIC),
    );
    expect(getPokemonTypeChartAttack(PokemonTypesArrayIndex.ICE)).toStrictEqual(
      PokemonTypeChart.getAttack(PokemonTypesArrayIndex.ICE),
    );
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.FIGHTING),
    ).toStrictEqual(
      PokemonTypeChart.getAttack(PokemonTypesArrayIndex.FIGHTING),
    );
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.POISON),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.POISON));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.GROUND),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.GROUND));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.FLYING),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.FLYING));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.PSYCHIC),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.PSYCHIC));
    expect(getPokemonTypeChartAttack(PokemonTypesArrayIndex.BUG)).toStrictEqual(
      PokemonTypeChart.getAttack(PokemonTypesArrayIndex.BUG),
    );
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.ROCK),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.ROCK));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.GHOST),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.GHOST));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.DRAGON),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.DRAGON));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.DARK),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.DARK));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.STEEL),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.STEEL));
    expect(
      getPokemonTypeChartAttack(PokemonTypesArrayIndex.FAIRY),
    ).toStrictEqual(PokemonTypeChart.getAttack(PokemonTypesArrayIndex.FAIRY));
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

describe('when using getPokemonTypeChartAttackPros() function', () => {
  it('returns an empty array for super effective Normal type moves', async () => {
    const pros = getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.NORMAL);
    expect(pros).toHaveLength(0);
  });
  it('returns an array of PokemonTypesArrayIndex for super effective Fighting type moves', async () => {
    const pros = getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.FIGHTING);
    expect(pros).toContain(PokemonTypesArrayIndex.NORMAL);
    expect(pros).toContain(PokemonTypesArrayIndex.ICE);
    expect(pros).toContain(PokemonTypesArrayIndex.ROCK);
    expect(pros).toContain(PokemonTypesArrayIndex.STEEL);
  });
  it('returns an array of PokemonTypesArrayIndex for super effective Ghost type moves', async () => {
    const pros = getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.GHOST);
    expect(pros).toContain(PokemonTypesArrayIndex.PSYCHIC);
    expect(pros).toContain(PokemonTypesArrayIndex.GHOST);
    expect(pros).toContain(PokemonTypesArrayIndex.GHOST);
  });
  it('returns false when expecting wrong super effective Psychic type moves', async () => {
    const pros = getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.PSYCHIC);
    expect(pros.some((type) => type === PokemonTypesArrayIndex.PSYCHIC)).toBe(
      false,
    );
    expect(pros.some((type) => type === PokemonTypesArrayIndex.NORMAL)).toBe(
      false,
    );
    expect(pros.some((type) => type === PokemonTypesArrayIndex.DARK)).toBe(
      false,
    );
  });
});
