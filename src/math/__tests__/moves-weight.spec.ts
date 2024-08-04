import { describe, expect, it } from '@jest/globals';
import {
  getLowKickBasePower,
  getGrassKnotBasePower,
  getHeatCrashBasePower,
  getHeavySlamBasePower,
} from '../moves-weight';

describe('Heavy Slam base power', () => {
  const weights = {
    emboar: 150,
    snorlax: 460,
    jumpluff: 3,
    arcanine: 155,
    graveler: 105,
    hariyama: 253.8,
  };

  it('returns 40 BP move', () => {
    expect(
      getHeavySlamBasePower({
        user: weights.snorlax,
        target: weights.hariyama,
      }),
    ).toBe(40);
  });

  it('returns 60 BP move', () => {
    expect(
      getHeavySlamBasePower({
        user: weights.snorlax,
        target: weights.arcanine,
      }),
    ).toBe(60);
  });

  it('returns 80 BP move', () => {
    expect(
      getHeavySlamBasePower({
        user: weights.snorlax,
        target: weights.emboar,
      }),
    ).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(
      getHeavySlamBasePower({
        user: weights.snorlax,
        target: weights.graveler,
      }),
    ).toBe(100);
  });

  it('returns 120 BP move', () => {
    expect(
      getHeavySlamBasePower({
        user: weights.snorlax,
        target: weights.jumpluff,
      }),
    ).toBe(120);
  });
});

describe('Heat Crash base power', () => {
  const weights = {
    emboar: 150,
    snorlax: 460,
    jumpluff: 3,
    arcanine: 155,
    graveler: 105,
    hariyama: 253.8,
  };

  it('returns 40 BP move', () => {
    expect(
      getHeatCrashBasePower({
        user: weights.snorlax,
        target: weights.hariyama,
      }),
    ).toBe(40);
  });

  it('returns 60 BP move', () => {
    expect(
      getHeatCrashBasePower({
        user: weights.snorlax,
        target: weights.arcanine,
      }),
    ).toBe(60);
  });

  it('returns 80 BP move', () => {
    expect(
      getHeatCrashBasePower({
        user: weights.snorlax,
        target: weights.emboar,
      }),
    ).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(
      getHeatCrashBasePower({
        user: weights.snorlax,
        target: weights.graveler,
      }),
    ).toBe(100);
  });

  it('returns 120 BP move', () => {
    expect(
      getHeatCrashBasePower({
        user: weights.snorlax,
        target: weights.jumpluff,
      }),
    ).toBe(120);
  });
});

describe('Grass Knot base power', () => {
  const weights = {
    gastly: 0.1,
    vulpix: 9.9,
    kakuna: 10,
    purrlolin: 10.1,
    nidorina: 20,
    staraptor: 24.9,
    seadra: 25,
    hitmonlee: 49.8,
    zweilous: 50,
    hitmonchan: 50.2,
    bergmite: 99.5,
    venusaur: 100,
    rampardos: 102.5,
    crustle: 200,
    scolipede: 200.5,
  };
  it('returns 20 BP move', () => {
    expect(getGrassKnotBasePower(weights.gastly)).toBe(20);
  });

  it('returns 40 BP move', () => {
    expect(getGrassKnotBasePower(weights.kakuna)).toBe(40);
    expect(getGrassKnotBasePower(weights.purrlolin)).toBe(40);
  });

  it('returns 60 BP move', () => {
    expect(getGrassKnotBasePower(weights.seadra)).toBe(60);
  });

  it('returns 80 BP move', () => {
    expect(getGrassKnotBasePower(weights.zweilous)).toBe(80);
    expect(getGrassKnotBasePower(weights.hitmonchan)).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(getGrassKnotBasePower(weights.venusaur)).toBe(100);
  });

  it('returns 120 BP move', () => {
    expect(getGrassKnotBasePower(weights.crustle)).toBe(120);
  });
});

describe('Grass Knot base power', () => {
  const weights = {
    gastly: 0.1,
    vulpix: 9.9,
    kakuna: 10,
    purrlolin: 10.1,
    nidorina: 20,
    staraptor: 24.9,
    seadra: 25,
    hitmonlee: 49.8,
    zweilous: 50,
    hitmonchan: 50.2,
    bergmite: 99.5,
    venusaur: 100,
    rampardos: 102.5,
    crustle: 200,
    scolipede: 200.5,
  };
  it('returns 20 BP move', () => {
    expect(getLowKickBasePower(weights.vulpix)).toBe(20);
  });

  it('returns 40 BP move', () => {
    expect(getLowKickBasePower(weights.nidorina)).toBe(40);
    expect(getLowKickBasePower(weights.staraptor)).toBe(40);
  });

  it('returns 60 BP move', () => {
    expect(getLowKickBasePower(weights.hitmonlee)).toBe(60);
  });

  it('returns 80 BP move', () => {
    expect(getLowKickBasePower(weights.hitmonchan)).toBe(80);
    expect(getLowKickBasePower(weights.bergmite)).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(getLowKickBasePower(weights.rampardos)).toBe(100);
  });

  it('returns 120 BP move', () => {
    expect(getLowKickBasePower(weights.scolipede)).toBe(120);
  });
});
