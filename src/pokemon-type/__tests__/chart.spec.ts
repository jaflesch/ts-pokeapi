import { describe, expect, it } from '@jest/globals';
import { PokemonTypesArrayIndex } from '../constants';
import {
  getPokemonTypeChartAttack,
  getPokemonTypeChartAttackCons,
  getPokemonTypeChartAttackPros,
  getPokemonTypeChartDefense,
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
  it('returns the same results for getPokemonTypeChartAttackPros() function and PokemonTypeChart.getAtkPros() method', async () => {
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.NORMAL),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.NORMAL));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.FIRE),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.FIRE));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.WATER),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.WATER));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.GRASS),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.GRASS));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.ELECTRIC),
    ).toStrictEqual(
      PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.ELECTRIC),
    );
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.ICE),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.ICE));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.FIGHTING),
    ).toStrictEqual(
      PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.FIGHTING),
    );
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.POISON),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.POISON));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.GROUND),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.GROUND));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.FLYING),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.FLYING));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.PSYCHIC),
    ).toStrictEqual(
      PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.PSYCHIC),
    );
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.BUG),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.BUG));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.ROCK),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.ROCK));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.GHOST),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.GHOST));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.DRAGON),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.DRAGON));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.DARK),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.DARK));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.STEEL),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.STEEL));
    expect(
      getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.FAIRY),
    ).toStrictEqual(PokemonTypeChart.getAtkPros(PokemonTypesArrayIndex.FAIRY));
  });

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

describe('when using getPokemonTypeChartAttackCons() function', () => {
  it('returns the same results for getPokemonTypeChartAttackCons() function and PokemonTypeChart.getAtkCons() method', async () => {
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.NORMAL),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.NORMAL));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.FIRE),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.FIRE));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.WATER),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.WATER));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.GRASS),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.GRASS));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.ELECTRIC),
    ).toStrictEqual(
      PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.ELECTRIC),
    );
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.ICE),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.ICE));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.FIGHTING),
    ).toStrictEqual(
      PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.FIGHTING),
    );
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.POISON),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.POISON));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.GROUND),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.GROUND));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.FLYING),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.FLYING));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.PSYCHIC),
    ).toStrictEqual(
      PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.PSYCHIC),
    );
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.BUG),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.BUG));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.ROCK),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.ROCK));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.GHOST),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.GHOST));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.DRAGON),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.DRAGON));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.DARK),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.DARK));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.STEEL),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.STEEL));
    expect(
      getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.FAIRY),
    ).toStrictEqual(PokemonTypeChart.getAtkCons(PokemonTypesArrayIndex.FAIRY));
  });

  it('returns an object with PokemonTypesArrayIndex where Normal type moves have no effect and are not effective', async () => {
    const cons = getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.NORMAL);
    expect(cons.noEffect).toContain(PokemonTypesArrayIndex.GHOST);
    expect(cons.notEffective).toContain(PokemonTypesArrayIndex.ROCK);
    expect(cons.notEffective).toContain(PokemonTypesArrayIndex.STEEL);
  });
  it('returns an object with PokemonTypesArrayIndex where Fighting type moves have no effect and are not effective', async () => {
    const cons = getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.FIGHTING);
    expect(cons.noEffect).toHaveLength(1);
    expect(cons.noEffect).toContain(PokemonTypesArrayIndex.GHOST);
    expect(cons.notEffective).toContain(PokemonTypesArrayIndex.POISON);
    expect(cons.notEffective).toContain(PokemonTypesArrayIndex.PSYCHIC);
    expect(cons.notEffective).toContain(PokemonTypesArrayIndex.BUG);
    expect(cons.notEffective).toContain(PokemonTypesArrayIndex.FAIRY);
  });
  it('returns an object with PokemonTypesArrayIndex where Ghost type moves have no effect and are not effective', async () => {
    const cons = getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.GHOST);
    expect(cons.noEffect).toHaveLength(1);
    expect(cons.noEffect).toContain(PokemonTypesArrayIndex.NORMAL);
    expect(cons.notEffective).toHaveLength(1);
    expect(cons.notEffective).toContain(PokemonTypesArrayIndex.DARK);
  });
  it('returns false when expecting wrong Psychic not effective and no effect type moves', async () => {
    const cons = getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.PSYCHIC);
    expect(cons.noEffect.length === 0).toBe(false);
    expect(
      cons.notEffective.some((type) => type === PokemonTypesArrayIndex.NORMAL),
    ).toBe(false);
    expect(
      cons.notEffective.some((type) => type === PokemonTypesArrayIndex.GHOST),
    ).toBe(false);
    expect(
      cons.notEffective.some(
        (type) => type === PokemonTypesArrayIndex.FIGHTING,
      ),
    ).toBe(false);
    expect(
      cons.notEffective.some((type) => type === PokemonTypesArrayIndex.DARK),
    ).toBe(false);
  });
});

describe('when using getPokemonTypeChartDefense() function', () => {
  it("retuns an object with 'chart', 'normal', 'noEffect', 'superEffective', and 'notEffective' properties", async () => {
    const normal = getPokemonTypeChartDefense(PokemonTypesArrayIndex.NORMAL);
    expect(normal).toBeDefined();
    expect(normal).toHaveProperty('chart');
    expect(normal).toHaveProperty('normal');
    expect(normal).toHaveProperty('noEffect');
    expect(normal).toHaveProperty('notEffective');
    expect(normal).toHaveProperty('superEffective');
  });

  it('returns the same results for getPokemonTypeChartDefense() function and PokemonTypeChart.getDefense() method', async () => {
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.NORMAL),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.NORMAL));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.FIRE),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.FIRE));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.WATER),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.WATER));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.GRASS),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.GRASS));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.ELECTRIC),
    ).toStrictEqual(
      PokemonTypeChart.getDefense(PokemonTypesArrayIndex.ELECTRIC),
    );
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.ICE),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.ICE));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.FIGHTING),
    ).toStrictEqual(
      PokemonTypeChart.getDefense(PokemonTypesArrayIndex.FIGHTING),
    );
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.POISON),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.POISON));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.GROUND),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.GROUND));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.FLYING),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.FLYING));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.PSYCHIC),
    ).toStrictEqual(
      PokemonTypeChart.getDefense(PokemonTypesArrayIndex.PSYCHIC),
    );
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.BUG),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.BUG));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.ROCK),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.ROCK));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.GHOST),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.GHOST));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.DRAGON),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.DRAGON));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.DARK),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.DARK));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.STEEL),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.STEEL));
    expect(
      getPokemonTypeChartDefense(PokemonTypesArrayIndex.FAIRY),
    ).toStrictEqual(PokemonTypeChart.getDefense(PokemonTypesArrayIndex.FAIRY));
  });

  it('returns the correct PokemonTypesArrayIndex[] for no effect Normal defending type chart', async () => {
    const normal = getPokemonTypeChartDefense(PokemonTypesArrayIndex.NORMAL);
    expect(normal.noEffect).toContain(PokemonTypesArrayIndex.GHOST);
  });
  it('returns the correct PokemonTypesArrayIndex[] for not effective Normal defending type chart', async () => {
    const normal = getPokemonTypeChartDefense(PokemonTypesArrayIndex.NORMAL);
    expect(normal.notEffective).toHaveLength(0);
  });
  it('returns and empty array for super effective Normal defending type chart', async () => {
    const normal = getPokemonTypeChartDefense(PokemonTypesArrayIndex.NORMAL);
    expect(normal.superEffective).toContain(PokemonTypesArrayIndex.FIGHTING);
  });
});
