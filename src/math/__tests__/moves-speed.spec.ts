import { describe, expect, it } from '@jest/globals';
import { getElectroBallBasePower, getGyroBallBasePower } from '../moves-speed';

describe('Electro ball damage power', () => {
  const speeds = {
    regielekiBase: 436,
    regielekiMaxPositive: 548,
    regielekiMaxPositivePlus1: 822,
    regielekiMaxPositivePlus2: 1096,
    electrode: 438,
    jolteon: 394,
    rillaboom: 206,
    bronzong: 63,
  };

  it('returns 40 BP move', () => {
    expect(
      getElectroBallBasePower(speeds.regielekiBase, speeds.electrode),
    ).toBe(40);
  });

  it('returns 60 BP move', () => {
    expect(
      getElectroBallBasePower(speeds.regielekiMaxPositive, speeds.electrode),
    ).toBe(60);
    expect(
      getElectroBallBasePower(
        speeds.regielekiMaxPositivePlus1,
        speeds.electrode,
      ),
    ).toBe(60);
  });

  it('returns 80 BP move', () => {
    expect(
      getElectroBallBasePower(
        speeds.regielekiMaxPositivePlus2,
        speeds.electrode,
      ),
    ).toBe(80);
  });

  it('returns 120 BP move', () => {
    expect(
      getElectroBallBasePower(speeds.regielekiMaxPositivePlus2, speeds.jolteon),
    ).toBe(80);
  });

  it('returns 150 BP move', () => {
    expect(
      getElectroBallBasePower(
        speeds.regielekiMaxPositivePlus2,
        speeds.rillaboom,
      ),
    ).toBe(150);

    expect(getElectroBallBasePower(speeds.regielekiBase, speeds.bronzong)).toBe(
      150,
    );
  });

  // it('returns 80 BP move', () => {
  //   expect(
  //     getElectroBallBasePower({
  //       user: weights.snorlax,
  //       target: weights.emboar,
  //     }),
  //   ).toBe(80);
  // });

  // it('returns 100 BP move', () => {
  //   expect(
  //     getElectroBallBasePower({
  //       user: weights.snorlax,
  //       target: weights.graveler,
  //     }),
  //   ).toBe(100);
  // });

  // it('returns 120 BP move', () => {
  //   expect(
  //     getElectroBallBasePower({
  //       user: weights.snorlax,
  //       target: weights.jumpluff,
  //     }),
  //   ).toBe(120);
  // });
});

describe('Gyro ball damage power', () => {
  const speeds = {
    bronzong: 63,
    regieleki: 436,
    electrode: 336,
    charizard: 236,
    skeledirge: 168,
  };

  it('returns 1 BP move', () => {
    expect(getGyroBallBasePower(speeds.bronzong, speeds.bronzong)).toBe(26);
  });

  it('returns 67 BP move', () => {
    expect(getGyroBallBasePower(speeds.bronzong, speeds.skeledirge)).toBe(67);
  });

  it('returns 94 BP move', () => {
    expect(getGyroBallBasePower(speeds.bronzong, speeds.charizard)).toBe(94);
  });

  it('returns 134 BP move', () => {
    expect(getGyroBallBasePower(speeds.bronzong, speeds.electrode)).toBe(134);
  });

  it('returns 150 BP move', () => {
    expect(getGyroBallBasePower(speeds.bronzong, speeds.regieleki)).toBe(150);
  });
});
