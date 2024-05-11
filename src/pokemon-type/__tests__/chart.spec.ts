import { describe, expect, it, beforeEach } from '@jest/globals';
import { PokemonTypesArrayIndex } from '../constants';
import {
  getAttackMultipleByTypeChart,
  getPokemonTypeChartAttack,
  getPokemonTypeChartAttackCons,
  getPokemonTypeChartAttackPros,
  getPokemonTypeChartDefense,
  getPokemonTypeChartDefenseCons,
  getPokemonTypeChartDefensePros,
  getPokemonTypeMatchups,
  PokemonTypeChart,
  GetPokemonTypeMatchupsReturn,
} from '../chart';
import { pokeapi } from '../../core';

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

describe('when using getPokemonTypeChartDefensePros() function', () => {
  it('returns the same results for getPokemonTypeChartDefensePros() function and PokemonTypeChart.getDefPros() method', async () => {
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.NORMAL),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.NORMAL));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.FIRE),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.FIRE));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.WATER),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.WATER));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.GRASS),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.GRASS));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.ELECTRIC),
    ).toStrictEqual(
      PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.ELECTRIC),
    );
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.ICE),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.ICE));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.FIGHTING),
    ).toStrictEqual(
      PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.FIGHTING),
    );
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.POISON),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.POISON));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.GROUND),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.GROUND));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.FLYING),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.FLYING));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.PSYCHIC),
    ).toStrictEqual(
      PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.PSYCHIC),
    );
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.BUG),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.BUG));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.ROCK),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.ROCK));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.GHOST),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.GHOST));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.DRAGON),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.DRAGON));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.DARK),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.DARK));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.STEEL),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.STEEL));
    expect(
      getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.FAIRY),
    ).toStrictEqual(PokemonTypeChart.getDefPros(PokemonTypesArrayIndex.FAIRY));
  });

  it('returns an object with Normal type defense resistances', async () => {
    const pros = getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.NORMAL);
    expect(pros.noEffect).toContain(PokemonTypesArrayIndex.GHOST);
    expect(pros.notEffective).toHaveLength(0);
  });
  it('returns an object with Fighting type defense resistances', async () => {
    const pros = getPokemonTypeChartDefensePros(
      PokemonTypesArrayIndex.FIGHTING,
    );
    expect(pros.noEffect).toHaveLength(0);
    expect(pros.notEffective).toContain(PokemonTypesArrayIndex.BUG);
    expect(pros.notEffective).toContain(PokemonTypesArrayIndex.ROCK);
    expect(pros.notEffective).toContain(PokemonTypesArrayIndex.DARK);
  });
  it('returns an object with Ghost type defense resistances', async () => {
    const pros = getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.GHOST);
    expect(pros.noEffect).toContain(PokemonTypesArrayIndex.NORMAL);
    expect(pros.noEffect).toContain(PokemonTypesArrayIndex.FIGHTING);
    expect(pros.notEffective).toContain(PokemonTypesArrayIndex.POISON);
    expect(pros.notEffective).toContain(PokemonTypesArrayIndex.BUG);
  });
  it('returns false when expecting wrong Psychic type defense resistances', async () => {
    const pros = getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.PSYCHIC);
    expect(pros.noEffect.length > 0).toBe(false);
    expect(
      pros.notEffective.some((type) => type === PokemonTypesArrayIndex.FAIRY),
    ).toBe(false);
    expect(
      pros.notEffective.some((type) => type === PokemonTypesArrayIndex.STEEL),
    ).toBe(false);
    expect(
      pros.notEffective.some((type) => type === PokemonTypesArrayIndex.DRAGON),
    ).toBe(false);
    expect(
      pros.notEffective.some((type) => type === PokemonTypesArrayIndex.DARK),
    ).toBe(false);
  });
});

describe('when using getPokemonTypeChartDefenseCons() function', () => {
  it('returns the same results for getPokemonTypeChartDefenseCons() function and PokemonTypeChart.getDefCons() method', async () => {
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.NORMAL),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.NORMAL));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.FIRE),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.FIRE));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.WATER),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.WATER));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.GRASS),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.GRASS));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.ELECTRIC),
    ).toStrictEqual(
      PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.ELECTRIC),
    );
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.ICE),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.ICE));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.FIGHTING),
    ).toStrictEqual(
      PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.FIGHTING),
    );
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.POISON),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.POISON));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.GROUND),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.GROUND));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.FLYING),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.FLYING));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.PSYCHIC),
    ).toStrictEqual(
      PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.PSYCHIC),
    );
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.BUG),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.BUG));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.ROCK),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.ROCK));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.GHOST),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.GHOST));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.DRAGON),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.DRAGON));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.DARK),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.DARK));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.STEEL),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.STEEL));
    expect(
      getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.FAIRY),
    ).toStrictEqual(PokemonTypeChart.getDefCons(PokemonTypesArrayIndex.FAIRY));
  });

  it('returns an object with Normal type defense weaknesses', async () => {
    const cons = getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.NORMAL);
    expect(cons).toContain(PokemonTypesArrayIndex.FIGHTING);
  });
  it('returns an object with Fighting type defense weaknesses', async () => {
    const pros = getPokemonTypeChartDefenseCons(
      PokemonTypesArrayIndex.FIGHTING,
    );
    expect(pros).toContain(PokemonTypesArrayIndex.FLYING);
    expect(pros).toContain(PokemonTypesArrayIndex.PSYCHIC);
    expect(pros).toContain(PokemonTypesArrayIndex.FAIRY);
  });
  it('returns an object with Ghost type defense weaknesses', async () => {
    const pros = getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.GHOST);
    expect(pros).toContain(PokemonTypesArrayIndex.GHOST);
    expect(pros).toContain(PokemonTypesArrayIndex.DARK);
  });
  it('returns false when expecting wrong Psychic type defense weaknesses', async () => {
    const pros = getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.PSYCHIC);
    expect(pros.some((type) => type === PokemonTypesArrayIndex.FAIRY)).toBe(
      false,
    );
    expect(pros.some((type) => type === PokemonTypesArrayIndex.STEEL)).toBe(
      false,
    );
    expect(pros.some((type) => type === PokemonTypesArrayIndex.DRAGON)).toBe(
      false,
    );
  });
});

describe('when using getAttackMultipleByTypeChart() function', () => {
  it('returns x0.25 damage (resistance)', () => {
    const multiple = getAttackMultipleByTypeChart(PokemonTypesArrayIndex.FIRE, [
      PokemonTypesArrayIndex.FIRE,
      PokemonTypesArrayIndex.WATER,
    ]);
    expect(multiple).toBe(0.25);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.FIRE, PokemonTypesArrayIndex.WATER],
    );
    expect(multiple2).toBe(0.25);
  });

  it('returns x0.5 damage (resistance)', () => {
    const multiple = getAttackMultipleByTypeChart(PokemonTypesArrayIndex.FIRE, [
      PokemonTypesArrayIndex.FIRE,
    ]);
    expect(multiple).toBe(0.5);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.FIRE],
    );
    expect(multiple2).toBe(0.5);
  });

  it('returns x1 damage (normal)', () => {
    const multiple = getAttackMultipleByTypeChart(PokemonTypesArrayIndex.FIRE, [
      PokemonTypesArrayIndex.FIRE,
      PokemonTypesArrayIndex.GRASS,
    ]);
    expect(multiple).toBe(1);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.FIRE, PokemonTypesArrayIndex.GRASS],
    );
    expect(multiple2).toBe(1);
  });

  it('returns x2 damage (weakness)', () => {
    const multiple = getAttackMultipleByTypeChart(PokemonTypesArrayIndex.FIRE, [
      PokemonTypesArrayIndex.GRASS,
    ]);
    expect(multiple).toBe(2);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.GRASS],
    );
    expect(multiple2).toBe(2);
  });

  it('returns x4 damage (double weakness)', () => {
    const multiple = getAttackMultipleByTypeChart(PokemonTypesArrayIndex.FIRE, [
      PokemonTypesArrayIndex.BUG,
      PokemonTypesArrayIndex.GRASS,
    ]);
    expect(multiple).toBe(4);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GRASS],
    );
    expect(multiple2).toBe(4);
  });

  it('returns x0 damage (immunity)', () => {
    const multiple = getAttackMultipleByTypeChart(
      PokemonTypesArrayIndex.GHOST,
      [PokemonTypesArrayIndex.NORMAL],
    );
    expect(multiple).toBe(0);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.GHOST,
      [PokemonTypesArrayIndex.NORMAL],
    );
    expect(multiple2).toBe(0);
  });

  it('returns x0.5 damage (resistance by ability)', () => {
    const multiple = getAttackMultipleByTypeChart(
      PokemonTypesArrayIndex.ICE,
      [PokemonTypesArrayIndex.NORMAL],
      'thick-fat',
    );
    expect(multiple).toBe(0.5);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.ICE,
      [PokemonTypesArrayIndex.NORMAL],
      'thick-fat',
    );
    expect(multiple2).toBe(0.5);
  });

  it('returns x1.25 damage (weakness by ability)', () => {
    const multiple = getAttackMultipleByTypeChart(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.POISON],
      'dry-skin',
    );
    expect(multiple).toBe(1.25);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.POISON],
      'dry-skin',
    );
    expect(multiple2).toBe(1.25);
  });

  it('returns x2.5 damage (weakness by type and ability)', () => {
    const multiple = getAttackMultipleByTypeChart(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.ICE],
      'dry-skin',
    );
    expect(multiple).toBe(2.5);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.ICE],
      'dry-skin',
    );
    expect(multiple2).toBe(2.5);
  });

  it('returns x5 damage (weakness by both types and ability)', () => {
    const multiple = getAttackMultipleByTypeChart(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.GRASS, PokemonTypesArrayIndex.BUG],
      'dry-skin',
    );
    expect(multiple).toBe(5);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.GRASS, PokemonTypesArrayIndex.BUG],
      'dry-skin',
    );
    expect(multiple2).toBe(5);
  });

  it('returns x0 damage (immunity by ability)', () => {
    const multiple = getAttackMultipleByTypeChart(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GRASS],
      'flash-fire',
    );
    expect(multiple).toBe(0);

    const multiple2 = PokemonTypeChart.getAtkMultiple(
      PokemonTypesArrayIndex.FIRE,
      [PokemonTypesArrayIndex.BUG, PokemonTypesArrayIndex.GRASS],
      'flash-fire',
    );
    expect(multiple2).toBe(0);
  });
});

describe('when using getPokemonTypeMatchups() function', () => {
  const pokemon = pokeapi('pokemon').get('lanturn');
  let result: GetPokemonTypeMatchupsReturn = {
    types: [],
    offensive: [],
    defensive: [],
  };

  beforeEach(async () => {
    result = getPokemonTypeMatchups(await pokemon);
  });

  it('returns the same results for getPokemonTypeMatchups() function and PokemonTypeChart.getAttack() method', async () => {
    const result2 = PokemonTypeChart.getByPokemon(await pokemon);
    expect(result.types).toStrictEqual(result2.types);
    expect(result.offensive).toStrictEqual(result2.offensive);
    expect(result.defensive).toStrictEqual(result2.defensive);
  });

  it('returns an array of PokemonTypesArrayIndex from Pokémon PokéAPI resource', async () => {
    expect(result.types).toHaveLength(2);
    expect(result.types).toContain(PokemonTypesArrayIndex.WATER);
    expect(result.types).toContain(PokemonTypesArrayIndex.ELECTRIC);
  });

  it('returns an array types chart for each Pokémon type Pokémon PokéAPI resource', async () => {
    const [type1, type2] = result.offensive;

    expect(type1.typeIndex).toBe(PokemonTypesArrayIndex.WATER);
    expect(type1.noEffect).toHaveLength(0);
    expect(type1.superEffective).toHaveLength(3);
    expect(type1.superEffective).toContain(PokemonTypesArrayIndex.FIRE);
    expect(type1.superEffective).toContain(PokemonTypesArrayIndex.GROUND);
    expect(type1.superEffective).toContain(PokemonTypesArrayIndex.ROCK);
    expect(type1.notEffective).toHaveLength(3);
    expect(type1.notEffective).toContain(PokemonTypesArrayIndex.WATER);
    expect(type1.notEffective).toContain(PokemonTypesArrayIndex.GRASS);
    expect(type1.notEffective).toContain(PokemonTypesArrayIndex.DRAGON);
    expect(type1.chart).toHaveLength(18);

    expect(type2.typeIndex).toBe(PokemonTypesArrayIndex.ELECTRIC);
    expect(type2.noEffect).toHaveLength(1);
    expect(type2.noEffect).toContain(PokemonTypesArrayIndex.GROUND);
    expect(type2.superEffective).toHaveLength(2);
    expect(type2.superEffective).toContain(PokemonTypesArrayIndex.WATER);
    expect(type2.superEffective).toContain(PokemonTypesArrayIndex.FLYING);
    expect(type2.notEffective).toHaveLength(3);
    expect(type2.notEffective).toContain(PokemonTypesArrayIndex.GRASS);
    expect(type2.notEffective).toContain(PokemonTypesArrayIndex.ELECTRIC);
    expect(type2.notEffective).toContain(PokemonTypesArrayIndex.DRAGON);
    expect(type2.chart).toHaveLength(18);
  });

  it('returns an array of type charts for each Pokémon ability from Pokémon PokéAPI resource', async () => {
    const [voltAbsorb, illuminate, waterAbsorb] = result.defensive;

    expect(result.defensive).toHaveLength(3);
    expect(voltAbsorb.ability).toBe('volt-absorb');
    expect(voltAbsorb.noEffect).toHaveLength(1);
    expect(voltAbsorb.noEffect).toContain(PokemonTypesArrayIndex.ELECTRIC);
    expect(waterAbsorb.ability).toBe('water-absorb');
    expect(waterAbsorb.noEffect).toHaveLength(1);
    expect(waterAbsorb.noEffect).toContain(PokemonTypesArrayIndex.WATER);
    expect(illuminate.ability).toBe('illuminate');
    expect(illuminate.noEffect).toHaveLength(0);
  });
});
