import { describe, expect, it } from '@jest/globals';
import {
  isIdealBerryHP,
  isIdealLifeOrbHP,
  isIdealWeatherHP,
  isIdealLeftoversHP,
  isIdealGrassyTerrainHP,
  hailDamage,
  lifeOrbRecoil,
  sandstormDamage,
  leftoversRecover,
  blackSludgeRecover,
  grassyTerrainRecover,
  idealHPForBerry,
  idealHPForLifeOrb,
  idealHPForWeather,
  idealHPForLeftovers,
  idealHPForGrassyTerrain,
} from '../hp-regeneration';

describe('when using isIdealBerryHP()', () => {
  it('returns true when even number', () => {
    expect(isIdealBerryHP(2)).toBeTruthy();
    expect(isIdealBerryHP(4)).toBeTruthy();
    expect(isIdealBerryHP(50)).toBeTruthy();
    expect(isIdealBerryHP(100)).toBeTruthy();
  });

  it('returns false when odd number', () => {
    expect(isIdealBerryHP(1)).toBeFalsy();
    expect(isIdealBerryHP(5)).toBeFalsy();
    expect(isIdealBerryHP(55)).toBeFalsy();
    expect(isIdealBerryHP(151)).toBeFalsy();
  });
});

describe('when using isIdealLifeOrbHP()', () => {
  it('returns true when number ends with 9', () => {
    expect(isIdealLifeOrbHP(9)).toBeTruthy();
    expect(isIdealLifeOrbHP(19)).toBeTruthy();
    expect(isIdealLifeOrbHP(99)).toBeTruthy();
    expect(isIdealLifeOrbHP(199)).toBeTruthy();
  });

  it("returns false when number doesn't end with 9", () => {
    expect(isIdealLifeOrbHP(10)).toBeFalsy();
    expect(isIdealLifeOrbHP(20)).toBeFalsy();
    expect(isIdealLifeOrbHP(50)).toBeFalsy();
    expect(isIdealLifeOrbHP(150)).toBeFalsy();
  });
});

describe('when using isIdealWeatherHP()', () => {
  it('returns true when number is divisible by 16 minus 1', () => {
    expect(isIdealWeatherHP(15)).toBeTruthy();
    expect(isIdealWeatherHP(159)).toBeTruthy();
    expect(isIdealWeatherHP(175)).toBeTruthy();
    expect(isIdealWeatherHP(191)).toBeTruthy();
  });

  it("returns false when number isn't divisible by 16 minus 1", () => {
    expect(isIdealWeatherHP(10)).toBeFalsy();
    expect(isIdealWeatherHP(20)).toBeFalsy();
    expect(isIdealWeatherHP(50)).toBeFalsy();
    expect(isIdealWeatherHP(150)).toBeFalsy();
  });
});

describe('when using isIdealGrassyTerrainHP()', () => {
  it('returns true when number is divisible by 16', () => {
    expect(isIdealGrassyTerrainHP(16)).toBeTruthy();
    expect(isIdealGrassyTerrainHP(160)).toBeTruthy();
    expect(isIdealGrassyTerrainHP(176)).toBeTruthy();
    expect(isIdealGrassyTerrainHP(192)).toBeTruthy();
  });

  it("returns false when number isn't divisible by 16", () => {
    expect(isIdealGrassyTerrainHP(17)).toBeFalsy();
    expect(isIdealGrassyTerrainHP(33)).toBeFalsy();
    expect(isIdealGrassyTerrainHP(162)).toBeFalsy();
    expect(isIdealGrassyTerrainHP(190)).toBeFalsy();
  });
});

describe('when using isIdealLeftoversHP()', () => {
  it('returns true when number is divisible by 16', () => {
    expect(isIdealLeftoversHP(16)).toBeTruthy();
    expect(isIdealLeftoversHP(160)).toBeTruthy();
    expect(isIdealLeftoversHP(176)).toBeTruthy();
    expect(isIdealLeftoversHP(192)).toBeTruthy();
  });

  it("returns false when number isn't divisible by 16", () => {
    expect(isIdealLeftoversHP(17)).toBeFalsy();
    expect(isIdealLeftoversHP(33)).toBeFalsy();
    expect(isIdealLeftoversHP(162)).toBeFalsy();
    expect(isIdealLeftoversHP(190)).toBeFalsy();
  });
});

describe('when using lifeOrbRecoil()', () => {
  it('returns 10%, rounded down, of original HP', () => {
    expect(lifeOrbRecoil(150)).toBe(15);
    expect(lifeOrbRecoil(151)).toBe(15);
    expect(lifeOrbRecoil(159)).toBe(15);
    expect(lifeOrbRecoil(160)).toBe(16);
  });

  it('returns 1 if 10%, rounded down, of original HP é smaller than 1', () => {
    expect(lifeOrbRecoil(9)).toBe(1);
    expect(lifeOrbRecoil(10)).toBe(1);
  });
});

describe('when using sandstormDamage()', () => {
  it('returns 1/16, rounded down, of original HP', () => {
    expect(sandstormDamage(159)).toBe(9);
    expect(sandstormDamage(160)).toBe(10);
    expect(sandstormDamage(161)).toBe(10);
    expect(sandstormDamage(162)).toBe(10);
  });
});

describe('when using hailDamage()', () => {
  it('returns 1/16, rounded down, of original HP', () => {
    expect(hailDamage(159)).toBe(9);
    expect(hailDamage(160)).toBe(10);
    expect(hailDamage(161)).toBe(10);
    expect(hailDamage(162)).toBe(10);
  });
});

describe('when using grassyTerrainRecover()', () => {
  it('returns 1/16, rounded down, of original HP', () => {
    expect(grassyTerrainRecover(159)).toBe(9);
    expect(grassyTerrainRecover(160)).toBe(10);
    expect(grassyTerrainRecover(161)).toBe(10);
    expect(grassyTerrainRecover(162)).toBe(10);
  });
});

describe('when using leftoversRecover()', () => {
  it('returns 1/16, rounded down, of original HP', () => {
    expect(leftoversRecover(159)).toBe(9);
    expect(leftoversRecover(160)).toBe(10);
    expect(leftoversRecover(161)).toBe(10);
    expect(leftoversRecover(162)).toBe(10);
  });
});

describe('when using blackSludgeRecover()', () => {
  it('returns 1/16, rounded down, of original HP, if user is Poison type', () => {
    expect(blackSludgeRecover(159, true)).toBe(9);
    expect(blackSludgeRecover(160, true)).toBe(10);
    expect(blackSludgeRecover(161, true)).toBe(10);
    expect(blackSludgeRecover(162, true)).toBe(10);
  });

  it('returns -1/8, rounded down, of original HP if user is not Poison type', () => {
    expect(blackSludgeRecover(159)).toBe(-18);
    expect(blackSludgeRecover(160)).toBe(-20);
    expect(blackSludgeRecover(161)).toBe(-20);
    expect(blackSludgeRecover(162)).toBe(-20);
  });
});

describe('when using idealHPForLifeOrb()', () => {
  it('returns the same value if HP is already ideal', () => {
    expect(idealHPForLifeOrb(159)).toBe(159);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForLifeOrb(155, 'min')).toBe(149);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForLifeOrb(155, 'max')).toBe(159);
  });
});

describe('when using idealHPForWeather()', () => {
  it('returns the same value if HP is already ideal', () => {
    expect(idealHPForWeather(175)).toBe(175);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForWeather(170, 'min')).toBe(159);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForWeather(170, 'max')).toBe(175);
  });
});

describe('when using idealHPForLeftovers()', () => {
  it('returns the same value if HP is already ideal', () => {
    expect(idealHPForLeftovers(176)).toBe(176);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForLeftovers(170, 'min')).toBe(160);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForLeftovers(170, 'max')).toBe(176);
  });
});

describe('when using idealHPForGrassyTerrain()', () => {
  it('returns the same value if HP is already ideal', () => {
    expect(idealHPForGrassyTerrain(176)).toBe(176);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForGrassyTerrain(170, 'min')).toBe(160);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForGrassyTerrain(170, 'max')).toBe(176);
  });
});

describe('when using idealHPForBerry()', () => {
  it('returns the same value if HP is already ideal', () => {
    expect(idealHPForBerry(150)).toBe(150);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForBerry(153, 'min')).toBe(152);
  });

  it('returns the previous ideal HP value', () => {
    expect(idealHPForBerry(153, 'max')).toBe(154);
  });
});
