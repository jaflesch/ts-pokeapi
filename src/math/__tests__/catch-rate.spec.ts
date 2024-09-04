import { describe, expect, it } from '@jest/globals';
import { Pokemon } from '../../core';
import { catchRate, CatchRateGenIXParams } from '../catch-rate';
import { fixtures } from './fixtures/catch-rate.fixture';

const getBaseParams = (): CatchRateGenIXParams => ({
  pokemon: fixtures.pikachu as unknown as Pokemon,
  captureRate: fixtures.pikachu.capture_rate,
  ball: 'poke-ball',
  currHp: '100%',
  level: 50,
  pokedex: 0,
  raid: false,
  capturePower: 0,
  iv: 31,
  offGuard: false,
  status: 'none',
  badges: 0,
  charm: false,
  turn: 1,
  night: false,
  cave: false,
  gender: 'male',
  ownPokemon: {
    name: 'Charizard',
    level: 100,
    gender: 'female',
  },
  underwater: false,
  onWater: false,
  registered: false,
  // staticEncounter: false,
});

describe('When calculating chances to capture a Pikachu with common balls', () => {
  it('should return ~15% chances with default parameters', () => {
    const { success } = catchRate.sv(getBaseParams());
    expect(success).toBe(15.236);
  });

  it('should return ~20% chances with a Great Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'great-ball',
    });
    expect(success).toBe(20.651);
  });

  it('should return ~25% chances with an Ultra Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'ultra-ball',
    });
    expect(success).toBe(25.623);
  });

  it('should return 100% guaranteed catch with a Master Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'master-ball',
    });
    expect(success).toBe(100);
  });
});

describe('When calculating chances to capture a Pikachu with different HPs', () => {
  it('should return ~15% chances with full HP', () => {
    const { success } = catchRate.sv(getBaseParams());
    expect(success).toBe(15.236);
  });

  it('should return ~25% chances with 1/2 (half) HP', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: '50%',
    });
    expect(success).toBe(25.623);
  });

  it('should return ~34% chances with 1 HP left', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
    });
    expect(success).toBe(34.561);
  });

  it("should adjust currHp to 1HP if input value is smaller than '1%' and return ~34% chances", () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: '0%',
    });
    expect(success).toBe(34.561);
  });

  it('should adjust currHp to 1HP if input value is smaller than 1 and return ~34% chances', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: -10,
    });
    expect(success).toBe(34.561);
  });

  it("should adjust currHp to 1HP if input value is greater than '100%' and return ~15% chances", () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: '120%',
    });
    expect(success).toBe(15.236);
  });
});

describe('When calculating chances to capture a Pikachu with different Levels', () => {
  it('should return ~88% chances with a Lv.1 Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 1,
    });
    expect(success).toBe(88.079);
  });

  it('should return ~50% chances with a Lv.10 Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 10,
    });
    expect(success).toBe(50.04);
  });

  it('should return ~35% chances with a Lv.20 Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 20,
    });
    expect(success).toBe(35.19);
  });

  it('should return ~29% chances with a Lv.30 Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 30,
    });
    expect(success).toBe(29.751);
  });

  it('should return ~21% chances with a Lv.40 Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 40,
    });
    expect(success).toBe(21.288);
  });

  it('should return ~10% chances with a Lv.60 Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 60,
    });
    expect(success).toBe(10.903);
  });

  it('should return ~9% chances with a Lv.60+ Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 61,
    });
    expect(success).toBe(9.221);
  });
  it('should return ~9% chances with a Lv.100 Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 100,
    });
    expect(success).toBe(9.221);
  });
});

describe('When calculating chances to capture a Pikachu with different battle status', () => {
  it('should return ~20% chances with poisoned status', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      status: 'poisoned',
    });
    expect(success).toBe(20.651);
  });

  it('should return ~20% chances with badly poisoned status', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      status: 'badly-poisoned',
    });
    expect(success).toBe(20.651);
  });

  it('should return ~20% chances with paralyzed status', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      status: 'paralyzed',
    });
    expect(success).toBe(20.651);
  });

  it('should return ~20% chances with burned status', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      status: 'burned',
    });
    expect(success).toBe(20.651);
  });

  it('should return ~20% chances with asleep status', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      status: 'asleep',
    });
    expect(success).toBe(30.293);
  });

  it('should return ~20% chances with frozen status', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      status: 'frozen',
    });
    expect(success).toBe(30.293);
  });
});

describe('When calculating chances to capture a Pikachu with different capture powers', () => {
  it('should return ~16% chances with Capture Power Lv. 1', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      capturePower: 1,
    });
    expect(success).toBe(16.363);
  });

  it('should return ~18% chances with Capture Power Lv. 2', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      capturePower: 2,
    });
    expect(success).toBe(18.015);
  });

  it('should return ~25% chances with Capture Power Lv. 3', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      capturePower: 3,
    });
    expect(success).toBe(25.623);
  });

  it('should return ~27% chances with Capture Power Lv. 1 and off guard backstrike', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      capturePower: 1,
      offGuard: true,
    });
    expect(success).toBe(27.522);
  });

  it('should return ~30% chances with Capture Power Lv. 2 and off guard backstrike', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      capturePower: 2,
      offGuard: true,
    });
    expect(success).toBe(30.293);
  });

  it('should return ~43% chances with Capture Power Lv. 3 and off guard backstrike', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      capturePower: 3,
      offGuard: true,
    });
    expect(success).toBe(43.105);
  });
});

describe('When calculating chances to capture a Lv.65 Pikachu with different total badges earned', () => {
  it('should return ~9% chances with no badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 0,
    });
    expect(success).toBe(9.221);
  });

  it('should return ~10% chances with 1 badge earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 1,
    });
    expect(success).toBe(10.903);
  });

  it('should return ~12% chances with 2 badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 2,
    });
    expect(success).toBe(12.888);
  });

  it('should return ~15% chances with 3 badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 3,
    });
    expect(success).toBe(15.236);
  });

  it('should return ~18% chances with 4 badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 4,
    });
    expect(success).toBe(18.015);
  });

  it('should return ~21% chances with 5 badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 5,
    });
    expect(success).toBe(21.288);
  });

  it('should return ~25% chances with 6 badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 6,
    });
    expect(success).toBe(25.167);
  });

  it('should return ~29% chances with 7 badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 7,
    });
    expect(success).toBe(29.751);
  });

  it('should return ~35% chances with 8 badges earned', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 65,
      badges: 8,
    });
    expect(success).toBe(35.19);
  });
});

describe('When calculating chances to capture a Pikachu with different HP IVs', () => {
  it('should return ~34% chances with 1 HP left, 0-5 IVs', () => {
    const expectedResult = 34.537;
    const outputs: number[] = [];
    for (let i = 0; i < 6; i++) {
      const { success } = catchRate.sv({
        ...getBaseParams(),
        iv: i,
        currHp: 1,
      });
      outputs.push(success);
    }
    const total = outputs.filter((value) => value === expectedResult);
    expect(total).toHaveLength(6);
  });

  it('should return ~34% chances with 1 HP left, 6-31 IVs', () => {
    const expectedResult = 34.561;
    const outputs: number[] = [];
    for (let i = 6; i < 32; i++) {
      const { success } = catchRate.sv({
        ...getBaseParams(),
        iv: i,
        currHp: 1,
      });
      outputs.push(success);
    }
    const total = outputs.filter((value) => value === expectedResult);
    expect(total).toHaveLength(26);
  });
});

describe('When calculating chances to capture a Pikachu in a Tera Raid battle', () => {
  it('should always return 100% guaranteed catch', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      raid: true,
    });
    expect(success).toBe(100);
  });
});

describe('When calculating chances to capture Pokémon with different capture rates, at Lv.50 and 1 HP', () => {
  it('should return ~43% catch rate for Scatterbug', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.scatterbug.capture_rate,
      pokemon: fixtures.scatterbug as unknown as Pokemon,
    });
    expect(success).toBe(43.105);
  });

  it('should return ~34% catch rate for Cyclizar', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.cyclizar.capture_rate,
      pokemon: fixtures.cyclizar as unknown as Pokemon,
    });
    expect(success).toBe(34.614);
  });

  it('should return ~28% catch rate for Tandemaus', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.tandemaus.capture_rate,
      pokemon: fixtures.tandemaus as unknown as Pokemon,
    });
    expect(success).toBe(28.969);
  });

  it('should return ~19% catch rate for Charcadet', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.charcadet.capture_rate,
      pokemon: fixtures.charcadet as unknown as Pokemon,
    });
    expect(success).toBe(19.739);
  });

  it('should return ~8% catch rate for Flutter Mane', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.flutterMane.capture_rate,
      pokemon: fixtures.flutterMane as unknown as Pokemon,
    });
    expect(success).toBe(8.667);
  });

  it('should return ~7% catch rate for Dondozo', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.dondozo.capture_rate,
      pokemon: fixtures.dondozo as unknown as Pokemon,
    });
    expect(success).toBe(7.569);
  });

  it('should return ~3% catch rate for Iron Valiant', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.ironValiant.capture_rate,
      pokemon: fixtures.ironValiant as unknown as Pokemon,
    });
    expect(success).toBe(3.803);
  });

  it('should return ~2% catch rate for Chien-Pao', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.chienPao.capture_rate,
      pokemon: fixtures.chienPao as unknown as Pokemon,
    });
    expect(success).toBe(2.593);
  });

  it('should return ~2% catch rate for Ogerpon', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.ogerpon.capture_rate,
      pokemon: fixtures.ogerpon as unknown as Pokemon,
    });
    expect(success).toBe(2.262);
  });

  it('should return ~1% catch rate for Okidogi', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.okidogi.capture_rate,
      pokemon: fixtures.okidogi as unknown as Pokemon,
    });
    expect(success).toBe(1.542);
  });

  it('should return ~1% catch rate for Miraidon', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      currHp: 1,
      captureRate: fixtures.miraidon.capture_rate,
      pokemon: fixtures.miraidon as unknown as Pokemon,
    });
    expect(success).toBe(1.542);
  });
});

describe('When calculating chances to capture a Pikachu, a Venonat, and Psyduck in a Net Ball', () => {
  it('should return ~43% catch rate for Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'net-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~38% catch rate for Venonat', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'net-ball',
      pokemon: fixtures.venonat as unknown as Pokemon,
      captureRate: fixtures.venonat.capture_rate,
    });
    expect(success).toBe(38.973);
  });

  it('should return ~38% catch rate for Psyduck', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'net-ball',
      pokemon: fixtures.psyduck as unknown as Pokemon,
      captureRate: fixtures.psyduck.capture_rate,
    });
    expect(success).toBe(38.973);
  });
});

describe('When calculating chances to capture a Pikachu in a Nest Ball', () => {
  it('should always return 100% catch rate when at Lv.1', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 1,
      badges: 8,
      ball: 'nest-ball',
    });
    expect(success).toBe(100);
  });

  it('should return ~72% catch rate when at Lv.15', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 15,
      badges: 8,
      ball: 'nest-ball',
    });
    expect(success).toBe(72.034);
  });

  it('should return ~61% catch rate when at Lv.20', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 20,
      badges: 8,
      ball: 'nest-ball',
    });
    expect(success).toBe(61.355);
  });

  it('should return ~50% catch rate when at Lv.25', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 25,
      badges: 8,
      ball: 'nest-ball',
    });
    expect(success).toBe(50.04);
  });

  it('should return ~40% catch rate when at Lv.29', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 29,
      badges: 8,
      ball: 'nest-ball',
    });
    expect(success).toBe(40.324);
  });

  it('should return ~35% catch rate when at Lv.30', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 30,
      badges: 8,
      ball: 'nest-ball',
    });
    expect(success).toBe(35.19);
  });

  it('should always return ~35% catch rate when at Lv.30+', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 100,
      badges: 8,
      ball: 'nest-ball',
    });
    expect(success).toBe(35.19);
  });
});

describe('When calculating chances to capture a Pikachu in a Dive Ball', () => {
  it('should return ~15% catch rate when Pokémon is not underwater', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'dive-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~38% catch rate when Pokémon is underwater', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'dive-ball',
      underwater: true,
    });
    expect(success).toBe(38.973);
  });
});

describe('When calculating chances to capture a Pikachu in a Lure Ball', () => {
  it('should return ~15% catch rate when Pokémon is not in nor directly above water', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      onWater: false,
      ball: 'lure-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~43% catch rate when Pokémon is in or directly above water', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'lure-ball',
      onWater: true,
    });
    expect(success).toBe(43.105);
  });
});

describe('When calculating chances to capture a Pikachu in a Repeat Ball', () => {
  it('should return ~15% catch rate when Pokémon is not registered on Pokédex yet', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'repeat-ball',
      registered: false,
    });
    expect(success).toBe(15.236);
  });

  it('should return ~43% catch rate when Pokémon is already registered on Pokédex', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'repeat-ball',
      registered: true,
    });
    expect(success).toBe(38.973);
  });
});

describe('When calculating chances to capture a Pikachu in a Timer Ball', () => {
  it('should return ~15% catch rate when is on turn 1', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 1,
      ball: 'timer-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~18% catch rate when is on turn 2', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 2,
      ball: 'timer-ball',
    });
    expect(success).toBe(18.552);
  });

  it('should return ~21% catch rate when is on turn 3', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 3,
      ball: 'timer-ball',
    });
    expect(success).toBe(21.674);
  });

  it('should return ~24% catch rate when is on turn 4', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 4,
      ball: 'timer-ball',
    });
    expect(success).toBe(24.65);
  });

  it('should return ~27% catch rate when is on turn 5', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 5,
      ball: 'timer-ball',
    });
    expect(success).toBe(27.522);
  });

  it('should return ~30% catch rate when is on turn 6', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 6,
      ball: 'timer-ball',
    });
    expect(success).toBe(30.293);
  });

  it('should return ~32% catch rate when is on turn 7', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 7,
      ball: 'timer-ball',
    });
    expect(success).toBe(32.98);
  });

  it('should return ~35% catch rate when is on turn 8', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 8,
      ball: 'timer-ball',
    });
    expect(success).toBe(35.591);
  });

  it('should return ~38% catch rate when is on turn 9', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 9,
      ball: 'timer-ball',
    });
    expect(success).toBe(38.143);
  });

  it('should return ~40% catch rate when is on turn 10', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 10,
      ball: 'timer-ball',
    });
    expect(success).toBe(40.64);
  });

  it('should return ~43% catch rate when is on turn 11', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 11,
      ball: 'timer-ball',
    });
    expect(success).toBe(43.105);
  });

  it('should return ~43% catch rate when is on turn 11+', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 50,
      ball: 'timer-ball',
    });
    expect(success).toBe(43.105);
  });
});

describe('When calculating chances to capture a Pikachu in a Quick Ball', () => {
  it('should return ~50% catch rate when is on turn 1', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 1,
      ball: 'quick-ball',
    });
    expect(success).toBe(50.954);
  });

  it('should return ~15% catch rate when is on turn 2', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 2,
      ball: 'quick-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate when is on turn 2+', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      turn: 50,
      ball: 'quick-ball',
    });
    expect(success).toBe(15.236);
  });
});

describe('When calculating chances to capture a Pikachu in a Dusk Ball', () => {
  it('should return ~50% catch rate when is not nighttime nor inside a cave', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      cave: false,
      night: false,
      ball: 'dusk-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~34% catch rate when is nighttime', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      night: true,
      cave: false,
      ball: 'dusk-ball',
    });
    expect(success).toBe(34.718);
  });

  it('should return ~34% catch rate when is inside a cave', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      cave: true,
      night: false,
      ball: 'dusk-ball',
    });
    expect(success).toBe(34.718);
  });

  it('should return ~34% catch rate when is inside a cave and is nighttime', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      cave: true,
      night: true,
      ball: 'dusk-ball',
    });
    expect(success).toBe(34.718);
  });
});

describe('When calculating chances to capture a Pikachu and a Voltorb in a Fast Ball', () => {
  it('should return ~15% catch rate for Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'fast-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~43% catch rate for Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'fast-ball',
      pokemon: fixtures.voltorb as unknown as Pokemon,
      captureRate: fixtures.voltorb.capture_rate,
    });
    expect(success).toBe(43.105);
  });
});

describe('When calculating chances to capture a Pikachu in a Level Ball', () => {
  it('should always return 100% guaranteed catch rate for Pikachu when 4x level diference or higher', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 25,
      ownPokemon: {
        level: 100,
      },
      ball: 'level-ball',
    });
    expect(success).toBe(100);
  });

  it('should return ~99% catch rate for Pikachu when 2x level diference or higher (but less than 4x)', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 25,
      ownPokemon: {
        level: 99,
      },
      ball: 'level-ball',
    });
    expect(success).toBe(99.513);
  });

  it('should return ~59% catch rate for Pikachu when higher level (but less than 2x)', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 25,
      ownPokemon: {
        level: 49,
      },
      ball: 'level-ball',
    });
    expect(success).toBe(59.176);
  });

  it('should return ~35% catch rate for Pikachu when at same level', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 25,
      ownPokemon: {
        level: 25,
      },
      ball: 'level-ball',
    });
    expect(success).toBe(35.19);
  });

  it('should return ~35% catch rate for Pikachu when at lower level', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 25,
      ownPokemon: {
        level: 24,
      },
      ball: 'level-ball',
    });
    expect(success).toBe(35.19);
  });

  it('should return ~35% catch rate for Pikachu if no ownPokemon param is provided', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      level: 25,
      ball: 'level-ball',
      ownPokemon: undefined,
    });
    expect(success).toBe(35.19);
  });
});

describe('When calculating chances to capture a Pikachu in a Love Ball', () => {
  it('should return ~15% catch rate for Pikachu (M) with different Pokémons, same genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'male',
      ownPokemon: {
        name: 'raichu',
        gender: 'male',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate for Pikachu (M) with different Pokémons, different genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'male',
      ownPokemon: {
        name: 'raichu',
        gender: 'female',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate for Pikachu (M) with same Pokémons, same genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'male',
      ownPokemon: {
        name: 'pikachu',
        gender: 'male',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~72% catch rate for Pikachu (M) with same Pokémons, different genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'male',
      ownPokemon: {
        name: 'pikachu',
        gender: 'female',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(72.493);
  });

  it('should return ~15% catch rate for Pikachu (F) with different Pokémons, same genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'female',
      ownPokemon: {
        name: 'raichu',
        gender: 'male',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate for Pikachu (F) with different Pokémons, different genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'female',
      ownPokemon: {
        name: 'raichu',
        gender: 'female',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate for Pikachu (F) with same Pokémons, same genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'female',
      ownPokemon: {
        name: 'pikachu',
        gender: 'female',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate for Pikachu (F) with same Pokémons, different genders', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      gender: 'female',
      ownPokemon: {
        name: 'pikachu',
        gender: 'male',
      },
      ball: 'love-ball',
    });
    expect(success).toBe(72.493);
  });

  it('should return ~15%% catch rate for Pikachu if no ownPokemon param is provided', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'love-ball',
      ownPokemon: undefined,
    });
    expect(success).toBe(15.236);
  });
});

describe('When calculating chances to capture certain Pokémons in a Moon Ball', () => {
  it('should return ~15% catch rate for Pikachu', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'moon-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~39% catch rate for Nidorina', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'moon-ball',
      pokemon: fixtures.nidorina as unknown as Pokemon,
      captureRate: fixtures.nidorina.capture_rate,
    });
    expect(success).toBe(30.535);
  });
  it('should return ~39% catch rate for Nidorino', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'moon-ball',
      pokemon: fixtures.nidorino as unknown as Pokemon,
      captureRate: fixtures.nidorino.capture_rate,
    });
    expect(success).toBe(30.535);
  });

  it('should return ~39% catch rate for Jigglypuff', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'moon-ball',
      pokemon: fixtures.jigglypuff as unknown as Pokemon,
      captureRate: fixtures.jigglypuff.capture_rate,
    });
    expect(success).toBe(39.642);
  });

  it('should return ~39% catch rate for Clefairy', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'moon-ball',
      pokemon: fixtures.clefairy as unknown as Pokemon,
      captureRate: fixtures.clefairy.capture_rate,
    });
    expect(success).toBe(36.077);
  });

  it('should return ~53% catch rate for Skitty', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'moon-ball',
      pokemon: fixtures.skitty as unknown as Pokemon,
      captureRate: fixtures.skitty.capture_rate,
    });
    expect(success).toBe(53.737);
  });

  it('should return ~43% catch rate for Munna', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'moon-ball',
      pokemon: fixtures.munna as unknown as Pokemon,
      captureRate: fixtures.munna.capture_rate,
    });
    expect(success).toBe(43.105);
  });
});

describe('When calculating chances to capture a Pikachu in a Dream Ball', () => {
  it('should return ~15% catch rate when status is not asleep', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'dream-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~85% catch rate for Pikachu when status is asleep', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'dream-ball',
      status: 'asleep',
    });
    expect(success).toBe(85.706);
  });
});

describe('When calculating chances to capture a Komala', () => {
  it('should return ~5% catch rate with a regular Poké Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      pokemon: fixtures.komala as unknown as Pokemon,
      captureRate: fixtures.komala.capture_rate,
      ball: 'poke-ball',
    });
    expect(success).toBe(5.172);
  });

  it('should return ~14% catch rate with a Dream Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      pokemon: fixtures.komala as unknown as Pokemon,
      captureRate: fixtures.komala.capture_rate,
      ball: 'dream-ball',
    });
    expect(success).toBe(14.628);
  });
});

describe('When calculating chances to capture a Pikachu in a Beast Ball', () => {
  it('should return ~2% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
    });
    expect(success).toBe(2.711);
  });
});

describe('When calculating chances to capture an Ultra Beast in a Beast Ball', () => {
  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.nihilego as unknown as Pokemon,
      captureRate: fixtures.nihilego.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.buzzwole as unknown as Pokemon,
      captureRate: fixtures.buzzwole.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.pheromosa as unknown as Pokemon,
      captureRate: fixtures.pheromosa.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.xurkitree as unknown as Pokemon,
      captureRate: fixtures.xurkitree.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.celesteela as unknown as Pokemon,
      captureRate: fixtures.celesteela.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.kartana as unknown as Pokemon,
      captureRate: fixtures.kartana.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.guzzlord as unknown as Pokemon,
      captureRate: fixtures.guzzlord.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.poipole as unknown as Pokemon,
      captureRate: fixtures.poipole.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.naganadel as unknown as Pokemon,
      captureRate: fixtures.naganadel.capture_rate,
    });
    expect(success).toBe(17.288);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.stakataka as unknown as Pokemon,
      captureRate: fixtures.stakataka.capture_rate,
    });
    expect(success).toBe(12.761);
  });

  it('should return ~17% catch rate', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'beast-ball',
      pokemon: fixtures.blacephalon as unknown as Pokemon,
      captureRate: fixtures.blacephalon.capture_rate,
    });
    expect(success).toBe(12.761);
  });
});

describe('When calculating chances to capture a Pikachu in other balls', () => {
  it('should return ~15% catch rate with a Premier Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'premier-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate with a Heal Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'heal-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate with a Luxury Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'luxury-ball',
    });
    expect(success).toBe(15.236);
  });

  it('should return ~15% catch rate with a Friend Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'friend-ball',
    });
    expect(success).toBe(15.236);
  });
});

describe('When calculating the effectiveness of Heavy Ball on Pokémons', () => {
  it('should return ~15% catch rate for Pikachu with a PokéBall', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'poke-ball',
    });
    expect(success).toBe(15.236);
  });
  it('should return ~14% catch rate for Pikachu with a Heavy Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'heavy-ball',
    });
    expect(success).toBe(14.017);
  });

  it('should return ~0.6% catch rate for Stakataka with a PokéBall', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'poke-ball',
      captureRate: fixtures.stakataka.capture_rate,
      pokemon: fixtures.stakataka as unknown as Pokemon,
    });
    expect(success).toBe(0.679);
  });
  it('should return ~14% catch rate for Stakataka with a Heavy Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'heavy-ball',
      captureRate: fixtures.stakataka.capture_rate,
      pokemon: fixtures.stakataka as unknown as Pokemon,
    });
    expect(success).toBe(1.142);
  });

  it('should return ~0.6% catch rate for Miraidon with a PokéBall', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'poke-ball',
      captureRate: fixtures.miraidon.capture_rate,
      pokemon: fixtures.miraidon as unknown as Pokemon,
    });
    expect(success).toBe(0.678);
  });
  it('should return ~3% catch rate for Miraidon with a Heavy Ball', () => {
    const { success } = catchRate.sv({
      ...getBaseParams(),
      ball: 'heavy-ball',
      captureRate: fixtures.miraidon.capture_rate,
      pokemon: fixtures.miraidon as unknown as Pokemon,
    });
    expect(success).toBe(3.126);
  });

  it('should return ~0.9% catch rate for Xurkitree for both PokéBall and Heavy Ball', () => {
    const pokeball = catchRate.sv({
      ...getBaseParams(),
      ball: 'poke-ball',
      captureRate: fixtures.xurkitree.capture_rate,
      pokemon: fixtures.xurkitree as unknown as Pokemon,
    });
    const heavyball = catchRate.sv({
      ...getBaseParams(),
      ball: 'heavy-ball',
      captureRate: fixtures.xurkitree.capture_rate,
      pokemon: fixtures.xurkitree as unknown as Pokemon,
    });
    expect(pokeball.success === heavyball.success).toBeTruthy();
  });
});

describe('When calculating the chances of critical capture a Pikachu by the number of registered Pokémon on Pokédex', () => {
  it('should return no critical capture chance with 0 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 0,
    });
    expect(critChance).toBe(0);
  });

  it('should return no critical capture chance with 30 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 30,
    });
    expect(critChance).toBe(0);
  });

  it('should return ~0.3% critical capture chance with 31 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 31,
    });
    expect(critChance).toBe(0.391);
  });

  it('should return ~0.3% critical capture chance with 150 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 150,
    });
    expect(critChance).toBe(0.391);
  });

  it('should return ~1% critical capture chance with 151 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 151,
    });
    expect(critChance).toBe(1.172);
  });

  it('should return ~1% critical capture chance with 300 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 300,
    });
    expect(critChance).toBe(1.172);
  });

  it('should return ~1% critical capture chance with 301 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 301,
    });
    expect(critChance).toBe(1.953);
  });

  it('should return no critical capture chance with 450 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 450,
    });
    expect(critChance).toBe(1.953);
  });

  it('should return ~2% critical capture chance with 451 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 451,
    });
    expect(critChance).toBe(2.344);
  });

  it('should return ~2% critical capture chance with 600 Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 600,
    });
    expect(critChance).toBe(2.344);
  });

  it('should return ~3% critical capture chance with 600+ Pokémon registered', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
    });
    expect(critChance).toBe(3.125);
  });
});

describe('When calculating the chances of critical capture a Pikachu with Catching Charm item', () => {
  it('should return no critical capture chance with 30 or less Pokémon registered, but no charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: false,
      pokedex: 30,
    });
    expect(critChance).toBe(0);
  });
  it('should return no critical capture chance with 30 or less Pokémon registered and charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: true,
      pokedex: 30,
    });
    expect(critChance).toBe(0);
  });

  it('should return ~0.3% critical capture chance with 150 Pokémon registered, but no charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: false,
      pokedex: 150,
    });
    expect(critChance).toBe(0.391);
  });
  it('should return ~1% critical capture chance with 150 Pokémon registered and charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: true,
      pokedex: 150,
    });
    expect(critChance).toBe(1.172);
  });

  it('should return ~1% critical capture chance with 300 Pokémon registered, but no charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: false,
      pokedex: 300,
    });
    expect(critChance).toBe(1.172);
  });
  it('should return ~2% critical capture chance with 300 Pokémon registered and charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: true,
      pokedex: 300,
    });
    expect(critChance).toBe(2.344);
  });

  it('should return ~1% critical capture chance with 450 Pokémon registered, but no charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: false,
      pokedex: 450,
    });
    expect(critChance).toBe(1.953);
  });
  it('should return ~3% critical capture chance with 450 Pokémon registered and charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: true,
      pokedex: 450,
    });
    expect(critChance).toBe(3.906);
  });

  it('should return ~2% critical capture chance with 600 Pokémon registered, but no charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: false,
      pokedex: 600,
    });
    expect(critChance).toBe(2.344);
  });

  it('should return ~5% critical capture chance with 600 Pokémon registered and charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      charm: true,
      pokedex: 600,
    });
    expect(critChance).toBe(5.078);
  });

  it('should return ~3% critical capture chance with 600+ Pokémon registered, but no charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      charm: false,
    });
    expect(critChance).toBe(3.125);
  });
  it('should return ~6% critical capture chance with 600+ Pokémon registered and charm', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      charm: true,
    });
    expect(critChance).toBe(6.641);
  });
});

describe('When calculating the chances of critical capture a Pikachu with Capture Powers (600+ Pokédex, no charm)', () => {
  it('should return ~3% critical capture chance with no capture powers', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 0,
    });
    expect(critChance).toBe(3.125);
  });

  it('should return ~3.5% critical capture chance with Capture Power Lv.1', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 1,
    });
    expect(critChance).toBe(3.516);
  });

  it('should return ~3.9% critical capture chance with Capture Power Lv.2', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 2,
    });
    expect(critChance).toBe(3.906);
  });

  it('should return ~3.9% critical capture chance with Capture Power Lv.3', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 3,
    });
    expect(critChance).toBe(6.641);
  });
});

describe('When calculating the chances of capturing a Pikachu with Capture Powers (600+ Pokédex, no charm)', () => {
  it('should return ~3% critical capture chance with no capture powers', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 0,
    });
    expect(critChance).toBe(3.125);
  });

  it('should return ~3.5% critical capture chance with Capture Power Lv.1', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 1,
    });
    expect(critChance).toBe(3.516);
  });

  it('should return ~3.9% critical capture chance with Capture Power Lv.2', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 2,
    });
    expect(critChance).toBe(3.906);
  });

  it('should return ~3.9% critical capture chance with Capture Power Lv.3', () => {
    const { critChance } = catchRate.sv({
      ...getBaseParams(),
      pokedex: 601,
      capturePower: 3,
    });
    expect(critChance).toBe(6.641);
  });
});
