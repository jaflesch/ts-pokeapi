import { describe, expect, it } from '@jest/globals';
import {
  getMoveBasePowerByWeight,
  getMoveBasePowerByRelativeWeight,
} from '../moves-weight';

describe('Heavy Slam / Heat Crash damage power', () => {
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
      getMoveBasePowerByRelativeWeight({
        user: weights.snorlax,
        target: weights.hariyama,
      }),
    ).toBe(40);
  });

  it('returns 60 BP move', () => {
    expect(
      getMoveBasePowerByRelativeWeight({
        user: weights.snorlax,
        target: weights.arcanine,
      }),
    ).toBe(60);
  });

  it('returns 80 BP move', () => {
    expect(
      getMoveBasePowerByRelativeWeight({
        user: weights.snorlax,
        target: weights.emboar,
      }),
    ).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(
      getMoveBasePowerByRelativeWeight({
        user: weights.snorlax,
        target: weights.graveler,
      }),
    ).toBe(100);
  });

  it('returns 120 BP move', () => {
    expect(
      getMoveBasePowerByRelativeWeight({
        user: weights.snorlax,
        target: weights.jumpluff,
      }),
    ).toBe(120);
  });
});

describe('Grass Knot / Low kick damage power', () => {
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
    expect(getMoveBasePowerByWeight(weights.gastly)).toBe(20);
    expect(getMoveBasePowerByWeight(weights.vulpix)).toBe(20);
  });

  it('returns 40 BP move', () => {
    expect(getMoveBasePowerByWeight(weights.kakuna)).toBe(40);
    expect(getMoveBasePowerByWeight(weights.purrlolin)).toBe(40);
    expect(getMoveBasePowerByWeight(weights.nidorina)).toBe(40);
    expect(getMoveBasePowerByWeight(weights.staraptor)).toBe(40);
  });

  it('returns 60 BP move', () => {
    expect(getMoveBasePowerByWeight(weights.seadra)).toBe(60);
    expect(getMoveBasePowerByWeight(weights.hitmonlee)).toBe(60);
  });

  it('returns 80 BP move', () => {
    expect(getMoveBasePowerByWeight(weights.zweilous)).toBe(80);
    expect(getMoveBasePowerByWeight(weights.hitmonchan)).toBe(80);
    expect(getMoveBasePowerByWeight(weights.bergmite)).toBe(80);
  });

  it('returns 100 BP move', () => {
    expect(getMoveBasePowerByWeight(weights.venusaur)).toBe(100);
    expect(getMoveBasePowerByWeight(weights.rampardos)).toBe(100);
  });

  it('returns 120 BP move', () => {
    expect(getMoveBasePowerByWeight(weights.crustle)).toBe(120);
    expect(getMoveBasePowerByWeight(weights.scolipede)).toBe(120);
  });
});
