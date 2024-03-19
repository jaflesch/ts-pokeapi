import { describe, expect, it } from '@jest/globals';
import {
  getStatValue,
  getMaxStatValue,
  getMinStatValue,
  getPriorGenIIIStatValue,
  getLegendsArceusStatValue,
  getLetsGoPikachuStatValue,
} from '../math';
import { InvalidParameterValueError } from '../errors/InvalidParameterValueError';
import {
  MIN_IV_VALUE,
  MAX_IV_VALUE,
  MIN_EV_VALUE,
  MAX_EV_VALUE,
  MIN_EFFORT_LEVEL_PLA,
  MAX_EFFORT_LEVEL_PLA,
  MIN_IV_VALUE_PRIOR_GEN3,
  MAX_IV_VALUE_PRIOR_GEN3,
  MIN_EV_VALUE_PRIOR_GEN3,
  MAX_EV_VALUE_PRIOR_GEN3,
} from '../constants';

describe('when using math module for current stats formula', () => {
  it('gets a Pokémon stat at level 100, 0 IVs and 0 EVs', () => {
    expect(
      getStatValue({
        isHp: true,
        base: 100,
        level: 100,
        iv: 0,
      }),
    ).toBe(310);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        iv: 0,
        nature: 'enhancing',
      }),
    ).toBe(225);
    expect(
      getStatValue({
        base: 100,
        level: 100,
        iv: 0,
        nature: 'neutral',
      }),
    ).toBe(205);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        iv: 0,
        nature: 'hindering',
      }),
    ).toBe(184);
  });

  it('gets a Pokémon stat at level 100, 0 IVs and MAX EVs', () => {
    expect(
      getStatValue({
        isHp: true,
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
      }),
    ).toBe(373);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
        nature: 'enhancing',
      }),
    ).toBe(294);
    expect(
      getStatValue({
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
        nature: 'neutral',
      }),
    ).toBe(268);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        iv: 0,
        ev: 255,
        nature: 'hindering',
      }),
    ).toBe(241);
  });

  it('gets a Pokémon stat at level 100, MAX IVs and 0 EVs', () => {
    expect(
      getStatValue({
        isHp: true,
        base: 100,
        level: 100,
      }),
    ).toBe(341);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        nature: 'enhancing',
      }),
    ).toBe(259);
    expect(
      getStatValue({
        base: 100,
        level: 100,
        nature: 'neutral',
      }),
    ).toBe(236);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        nature: 'hindering',
      }),
    ).toBe(212);
  });

  it('gets a Pokémon stat at level 100, MAX IVs and MAX EVs', () => {
    expect(
      getStatValue({
        isHp: true,
        base: 100,
        level: 100,
        ev: 255,
      }),
    ).toBe(404);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        nature: 'enhancing',
        ev: 255,
      }),
    ).toBe(328);
    expect(
      getStatValue({
        base: 100,
        level: 100,
        nature: 'neutral',
        ev: 255,
      }),
    ).toBe(299);

    expect(
      getStatValue({
        base: 100,
        level: 100,
        nature: 'hindering',
        ev: 255,
      }),
    ).toBe(269);
  });

  it('gets all Garchomp stats', () => {
    expect(
      getStatValue({
        isHp: true,
        base: 108,
        level: 78,
        iv: 24,
        ev: 74,
      }),
    ).toBe(289);

    expect(
      getStatValue({
        base: 130,
        level: 78,
        iv: 12,
        ev: 190,
        nature: 'enhancing',
      }),
    ).toBe(278);

    expect(
      getStatValue({
        base: 95,
        level: 78,
        iv: 30,
        ev: 91,
        nature: 'neutral',
      }),
    ).toBe(193);

    expect(
      getStatValue({
        base: 80,
        level: 78,
        iv: 16,
        ev: 48,
        nature: 'hindering',
      }),
    ).toBe(135);

    expect(
      getStatValue({
        base: 85,
        ev: 84,
        iv: 23,
        nature: 'neutral',
        level: 78,
      }),
    ).toBe(171);

    expect(
      getStatValue({
        ev: 23,
        iv: 5,
        nature: 'neutral',
        base: 102,
        level: 78,
      }),
    ).toBe(171);
  });

  it('gets Shedinja HP stat', () => {
    expect(
      getStatValue({
        isShedinja: true,
        isHp: true,
        base: 1,
        level: 50,
        iv: 31,
        ev: 255,
      }),
    ).toBe(1);
  });

  it('gets any Shedinja stat but HP', () => {
    expect(
      getStatValue({
        isShedinja: true,
        isHp: false,
        base: 90,
        level: 100,
        iv: 20,
        ev: 78,
      }),
    ).toBe(224);

    expect(
      getStatValue({
        isShedinja: true,
        isHp: false,
        base: 90,
        level: 100,
        iv: 20,
        ev: 78,
        nature: 'enhancing',
      }),
    ).toBe(246);

    expect(
      getStatValue({
        isShedinja: true,
        isHp: false,
        base: 90,
        level: 100,
        iv: 20,
        ev: 78,
        nature: 'hindering',
      }),
    ).toBe(201);
  });

  it('throws InvalidParameterValue exception when using invalid EV values', () => {
    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MIN_EV_VALUE - 1,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MAX_EV_VALUE + 1,
      });
    }).toThrow(InvalidParameterValueError);
  });

  it('throws InvalidParameterValue exception when using invalid IV values', () => {
    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MIN_IV_VALUE - 1,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MAX_IV_VALUE + 1,
      });
    }).toThrow(InvalidParameterValueError);
  });
});

describe('when using math module for Maximum and Minimum possible stats', () => {
  it('gets Alakazam Sp.Atk at level 100, beneficial Nature, 252 EVs, 31 EVs', () => {
    expect(
      getMaxStatValue({
        base: 135,
        level: 100,
      }),
    ).toBe(405);
  });
  it('gets Alakazam Sp.Atk at level 100, hindering Nature, 0 EVs, 0 EVs', () => {
    expect(
      getMinStatValue({
        base: 135,
        level: 100,
      }),
    ).toBe(247);
  });

  it('gets Shedinja max Attack stat', () => {
    expect(
      getMaxStatValue({
        isShedinja: true,
        base: 90,
        level: 100,
      }),
    ).toBe(306);
  });

  it('gets Shedinja max HP stat', () => {
    expect(
      getMaxStatValue({
        isShedinja: true,
        isHp: true,
        base: 90,
        level: 100,
      }),
    ).toBe(1);
  });
});

describe('when using math module with prior Generation III stats formula', () => {
  it('gets prior Generation III stats values for Pikachu', () => {
    expect(
      getPriorGenIIIStatValue({
        isHp: true,
        level: 81,
        base: 35,
        iv: 7,
        ev: 22850,
      }),
    ).toBe(189);

    expect(
      getPriorGenIIIStatValue({
        level: 81,
        base: 50,
        iv: 9,
        ev: 19625,
      }),
    ).toBe(128);

    expect(
      getPriorGenIIIStatValue({
        level: 81,
        base: 40,
        iv: 9,
        ev: 19625,
      }),
    ).toBe(112);

    expect(
      getPriorGenIIIStatValue({
        level: 81,
        base: 90,
        iv: 5,
        ev: 24795,
      }),
    ).toBe(190);
  });

  it('throws InvalidParameterValue exception when invalid EV values', () => {
    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MIN_EV_VALUE_PRIOR_GEN3 - 1,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MAX_EV_VALUE_PRIOR_GEN3 + 1,
      });
    }).toThrow(InvalidParameterValueError);
  });

  it('throws InvalidParameterValue exception when invalid IV values', () => {
    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MIN_IV_VALUE_PRIOR_GEN3 - 1,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MAX_IV_VALUE_PRIOR_GEN3 + 1,
      });
    }).toThrow(InvalidParameterValueError);
  });
});

describe('when using math module from different games stats formula', () => {
  it('gets Pokémon Legends Arceus stats values for Arceus', () => {
    expect(
      getLegendsArceusStatValue({
        isHp: true,
        level: 100,
        base: 120,
        effortLevel: 10,
      }),
    ).toBe(490);

    expect(
      getLegendsArceusStatValue({
        level: 100,
        base: 120,
        effortLevel: 10,
      }),
    ).toBe(390);

    expect(
      getLegendsArceusStatValue({
        level: 100,
        base: 120,
        effortLevel: 10,
        nature: 'enhancing',
      }),
    ).toBe(414);

    expect(
      getLegendsArceusStatValue({
        level: 100,
        base: 120,
        effortLevel: 10,
        nature: 'hindering',
      }),
    ).toBe(366);
  });

  it('throws InvalidParameterValue exception when using invalid Effort Level values', () => {
    expect(() => {
      getLegendsArceusStatValue({
        base: 100,
        effortLevel: MIN_EFFORT_LEVEL_PLA - 1,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getLegendsArceusStatValue({
        base: 100,
        effortLevel: MAX_EFFORT_LEVEL_PLA + 1,
      });
    }).toThrow(InvalidParameterValueError);
  });

  it("gets Pokémon Let's Go Pikachu & Eeevee stats values for Mew", () => {
    expect(
      getLetsGoPikachuStatValue({
        isHp: true,
        level: 100,
        base: 100,
      }),
    ).toBe(341);

    expect(
      getLetsGoPikachuStatValue({
        level: 100,
        base: 100,
      }),
    ).toBe(236);

    expect(
      getLetsGoPikachuStatValue({
        level: 100,
        base: 100,
        nature: 'enhancing',
      }),
    ).toBe(259);

    expect(
      getLetsGoPikachuStatValue({
        level: 100,
        base: 100,
        nature: 'hindering',
      }),
    ).toBe(212);
  });
});
