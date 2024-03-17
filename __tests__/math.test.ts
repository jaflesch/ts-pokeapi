import {describe, expect, test} from '@jest/globals';
import { getMaxStatValue, getMinStatValue, getStatValue } from '../src/math';
import { InvalidParameterValueError } from '../src/errors/InvalidParameterValueError';

describe('when using math module', () => {
  it('gets a Pokémon stat at level 100, 0 IVs and 0 EVs', () => {
    expect(
      getStatValue({
        hp: true,
        base: 100,
        level: 100,
        iv: 0,
      })
    ).toBe(310);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        iv: 0,
        nature: 'enhancing',
      })
    ).toBe(225);
    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        iv: 0,
        nature: 'neutral',
      })
    ).toBe(205);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        iv: 0,
        nature: 'hindering',
      })
    ).toBe(184);

  });
  
  it('gets a Pokémon stat at level 100, 0 IVs and MAX EVs', () => {
    expect(
      getStatValue({
        hp: true,
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
      })
    ).toBe(373);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
        nature: 'enhancing',
      })
    ).toBe(294);
    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
        nature: 'neutral',
      })
    ).toBe(268);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
        nature: 'hindering',
      })
    ).toBe(241);

  });
  
  it('gets a Pokémon stat at level 100, MAX IVs and 0 EVs', () => {
    expect(
      getStatValue({
        hp: true,
        base: 100,
        level: 100,
      })
    ).toBe(341);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        nature: 'enhancing',
      })
    ).toBe(259);
    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        nature: 'neutral',
      })
    ).toBe(236);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        nature: 'hindering',
      })
    ).toBe(212);

  });

  it('gets a Pokémon stat at level 100, MAX IVs and MAX EVs', () => {
    expect(
      getStatValue({
        hp: true,
        base: 100,
        level: 100,
        ev: 255,
      })
    ).toBe(404);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        nature: 'enhancing',
        ev: 255,
      })
    ).toBe(328);
    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        nature: 'neutral',
        ev: 255,
      })
    ).toBe(299);

    expect(
      getStatValue({
        hp: false,
        base: 100,
        level: 100,
        nature: 'hindering',
        ev: 255,
      })
    ).toBe(269);

  });

  it('gets all Garchomp stats', () => {
    expect(
      getStatValue({
        hp: true,
        base: 108,
        level: 78,
        iv: 24,
        ev: 74,
      })
    ).toBe(289);

    expect(
      getStatValue({
        hp: false,
        base: 130,
        level: 78,
        iv: 12,
        ev: 190,
        nature: 'enhancing',
      })
    ).toBe(278);

    expect(
      getStatValue({
        hp: false,
        base: 95,
        level: 78,
        iv: 30,
        ev: 91,
        nature: 'neutral',
      })
    ).toBe(193);

    expect(
      getStatValue({
        hp: false,
        base: 80,
        level: 78,
        iv: 16,
        ev: 48,
        nature: 'hindering',
      })
    ).toBe(135);

    expect(
      getStatValue({
        hp: false,
        base: 85,
        ev: 84,
        iv: 23,
        nature: 'neutral',
        level: 78,
      })
    ).toBe(171);

    expect(
      getStatValue({
        hp: false,
        ev: 23,
        iv: 5,
        nature: 'neutral',
        base: 102,
        level: 78,
      })
    ).toBe(171);    
  });

  it('gets Alakazam Sp.Atk at level 100, beneficial Nature, 252 EVs, 31 EVs', () => {
    expect(
      getMaxStatValue({
        hp: false,
        base: 135,
        level: 100,
      })
    ).toBe(405);      
  });
  it('gets Alakazam Sp.Atk at level 100, hindering Nature, 0 EVs, 0 EVs', () => {
    expect(
      getMinStatValue({
        hp: false,
        base: 135,
        level: 100,
      })
    ).toBe(247);      
  });

  it('gets InvalidParameterValue exception when using invalid EV values', () => {
    expect(() => {
      getStatValue({
        hp: true,
        level: 50,
        base: 100,
        ev: -1,
      })
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getStatValue({
        hp: true,
        level: 50,
        base: 100,
        ev: 256,
      })
    }).toThrow(InvalidParameterValueError);
  });

  it('gets InvalidParameterValue exception when using invalid IV values', () => {
    expect(() => {
      getStatValue({
        hp: true,
        level: 50,
        base: 100,
        iv: -1,
      })
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getStatValue({
        hp: true,
        level: 50,
        base: 100,
        iv: 32,
      })
    }).toThrow(InvalidParameterValueError);
  })
});