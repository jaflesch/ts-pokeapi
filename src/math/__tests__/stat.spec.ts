import { describe, expect, it } from '@jest/globals';
import {
  getCPValue,
  getStatValue,
  getMaxStatValue,
  getMinStatValue,
  getStatWithStage,
  getPriorGenIIIStatValue,
  getLegendsArceusStatValue,
  getLetsGoPikachuStatValue,
} from '../stat';
import {
  MIN_IV_VALUE,
  MAX_IV_VALUE,
  MIN_EV_VALUE,
  MAX_EV_VALUE,
  MIN_POKEMON_LEVEL,
  MAX_POKEMON_LEVEL,
  MIN_AWAKENING_VALUE,
  MAX_AWAKENING_VALUE,
  MIN_FRIENDSHIP_VALUE,
  MAX_FRIENDSHIP_VALUE,
  MIN_EFFORT_LEVEL_PLA,
  MAX_EFFORT_LEVEL_PLA,
  MIN_IV_VALUE_PRIOR_GEN3,
  MAX_IV_VALUE_PRIOR_GEN3,
  MIN_EV_VALUE_PRIOR_GEN3,
  MAX_EV_VALUE_PRIOR_GEN3,
} from '../constants';
import {
  InvalidParameterRangeError,
  InvalidParameterValueError,
} from '../../errors';

describe('when using math module for current stats formula', () => {
  it('gets a Pokémon stat with default parameters', () => {
    const stat = getStatValue({ base: 100 });
    expect(stat).toBeDefined();
  });

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

  it('throws InvalidParameterValueError exception when using invalid base stat value', () => {
    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 0,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getStatValue({
        isHp: false,
        level: 50,
        base: 0,
      });
    }).toThrow(InvalidParameterValueError);
  });

  it('throws InvalidParameterRangeError exception when using invalid Pokémon level values', () => {
    expect(() => {
      getStatValue({
        base: 100,
        level: MIN_POKEMON_LEVEL - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getStatValue({
        base: 100,
        level: MAX_POKEMON_LEVEL + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterRangeError exception when using invalid EV values', () => {
    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MIN_EV_VALUE - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MAX_EV_VALUE + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterRangeError exception when using invalid IV values', () => {
    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MIN_IV_VALUE - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MAX_IV_VALUE + 1,
      });
    }).toThrow(InvalidParameterRangeError);
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
  it('gets prior Generation III Pokémon stat value with default parameters', () => {
    expect(getPriorGenIIIStatValue({ base: 100 })).toBeDefined();
  });

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

  it('throws InvalidParameterValueError exception when using invalid base stat value', () => {
    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 0,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getPriorGenIIIStatValue({
        isHp: false,
        level: 50,
        base: 0,
      });
    }).toThrow(InvalidParameterValueError);
  });

  it('throws InvalidParameterRangeError exception when using invalid Pokémon level values', () => {
    expect(() => {
      getPriorGenIIIStatValue({
        base: 100,
        level: MIN_POKEMON_LEVEL - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getPriorGenIIIStatValue({
        base: 100,
        level: MAX_POKEMON_LEVEL + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterRangeError exception when invalid EV values', () => {
    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MIN_EV_VALUE_PRIOR_GEN3 - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        ev: MAX_EV_VALUE_PRIOR_GEN3 + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterRangeError exception when invalid IV values', () => {
    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MIN_IV_VALUE_PRIOR_GEN3 - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getPriorGenIIIStatValue({
        isHp: true,
        level: 50,
        base: 100,
        iv: MAX_IV_VALUE_PRIOR_GEN3 + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });
});

describe('when using math stats formula from Pokémon Legends Arceus game', () => {
  it('gets Pokémon Legends Arceus stat value with default parameters', () => {
    expect(getLegendsArceusStatValue({ base: 100 })).toBeDefined();
  });

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

  it('throws InvalidParameterRangeError exception when using invalid Pokémon level values', () => {
    expect(() => {
      getLegendsArceusStatValue({
        base: 100,
        level: MIN_POKEMON_LEVEL - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getLegendsArceusStatValue({
        base: 100,
        level: MAX_POKEMON_LEVEL + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterValueError exception when using invalid Effort Level values', () => {
    expect(() => {
      getLegendsArceusStatValue({
        base: 0,
        effortLevel: MIN_EFFORT_LEVEL_PLA,
      });
    }).toThrow(InvalidParameterValueError);
  });

  it('throws InvalidParameterRangeError exception when using invalid Effort Level values', () => {
    expect(() => {
      getLegendsArceusStatValue({
        base: 100,
        effortLevel: MIN_EFFORT_LEVEL_PLA - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getLegendsArceusStatValue({
        base: 100,
        effortLevel: MAX_EFFORT_LEVEL_PLA + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });
});

describe("when using math stats formulas from Pokémon Let's Go Pikachu & Eeevee games", () => {
  it("gets Pokémon Let's Go Pikachu & Eeevee stat value with default parameters", () => {
    expect(getLetsGoPikachuStatValue({ base: 100 })).toBeDefined();
  });

  it('gets stats values for Mew', () => {
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

  it('gets Combat Power value with default parameters', () => {
    expect(
      getCPValue({
        stat: {
          hp: 100,
          attack: 100,
          defense: 100,
          specialAttack: 100,
          specialDefense: 100,
          speed: 100,
        },
      }),
    ).toBeDefined();
  });

  it('gets Pikachu Combat Power', () => {
    expect(
      getCPValue({
        level: 50,
        totalAv: 0,
        stat: {
          hp: 110,
          attack: 75,
          defense: 60,
          specialAttack: 70,
          specialDefense: 70,
          speed: 110,
        },
      }),
    ).toBe(1485);
  });

  it('gets Pikachu MAX Combat Power', () => {
    expect(
      getCPValue({
        level: 100,
        totalAv: 1200,
        stat: {
          hp: 411,
          attack: 360,
          defense: 327,
          specialAttack: 349,
          specialDefense: 349,
          speed: 437,
        },
      }),
    ).toBe(10000);
  });

  it('gets Eevee Combat Power', () => {
    expect(
      getCPValue({
        level: 50,
        totalAv: 0,
        stat: {
          hp: 130,
          attack: 75,
          defense: 70,
          specialAttack: 65,
          specialDefense: 85,
          speed: 75,
        },
      }),
    ).toBe(1500);
  });

  it('gets Eevee MAX Combat Power', () => {
    expect(
      getCPValue({
        level: 100,
        totalAv: 1200,
        stat: {
          hp: 451,
          attack: 360,
          defense: 349,
          specialAttack: 338,
          specialDefense: 382,
          speed: 360,
        },
      }),
    ).toBe(10000);
  });

  /*
    - Reddit example https://www.reddit.com/r/PokemonLetsGo/comments/agkc5y/comment/ervlbix/
    - Credits to @gletschafloh 
  */
  it('gets Ditto Combat Power at lv43 with 200 total AVs', () => {
    expect(
      getCPValue({
        level: 43,
        totalAv: 200,
        stat: {
          hp: 107,
          attack: 59,
          defense: 59,
          specialAttack: 54,
          specialDefense: 59,
          speed: 64,
        },
      }),
    ).toBe(1458);
  });

  it('throws InvalidParameterRangeError exception when using invalid Pokémon level values', () => {
    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        level: MIN_POKEMON_LEVEL - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        level: MAX_POKEMON_LEVEL + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterValueError exception when using invalid Effort Level values', () => {
    expect(() => {
      getLetsGoPikachuStatValue({
        isHp: true,
        level: 100,
        base: 0,
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getLetsGoPikachuStatValue({
        isHp: false,
        level: 100,
        base: 0,
      });
    }).toThrow(InvalidParameterValueError);
  });

  it('throws InvalidParameterRangeError exception when using invalid AV values', () => {
    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        av: MIN_AWAKENING_VALUE - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        av: MAX_AWAKENING_VALUE + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterRangeError exception when using invalid IV values', () => {
    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        iv: MIN_IV_VALUE - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        iv: MAX_IV_VALUE + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterRangeError exception when using invalid friendship values', () => {
    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        friendship: MIN_FRIENDSHIP_VALUE - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getLetsGoPikachuStatValue({
        base: 100,
        friendship: MAX_FRIENDSHIP_VALUE + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterValueError when using invalid Pokémon level values', () => {
    const stat = {
      hp: 100,
      attack: 100,
      defense: 100,
      specialAttack: 100,
      specialDefense: 100,
      speed: 100,
    };
    expect(() => {
      getCPValue({
        stat,
        level: MIN_POKEMON_LEVEL - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getCPValue({
        stat,
        level: MAX_POKEMON_LEVEL + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterValueError when using invalid Max Total AVs value', () => {
    const stat = {
      hp: 100,
      attack: 100,
      defense: 100,
      specialAttack: 100,
      specialDefense: 100,
      speed: 100,
    };

    expect(() => {
      getCPValue({
        stat,
        totalAv: MIN_AWAKENING_VALUE - 1,
      });
    }).toThrow(InvalidParameterRangeError);

    expect(() => {
      getCPValue({
        stat,
        totalAv: MAX_AWAKENING_VALUE * 6 + 1,
      });
    }).toThrow(InvalidParameterRangeError);
  });

  it('throws InvalidParameterValueError when usind when using invalid stats', () => {
    const params = {
      level: 100,
      totalAv: 1200,
      stat: {
        hp: 451,
        attack: 320,
        defense: 349,
        specialAttack: 338,
        specialDefense: 382,
        speed: 360,
      },
    };

    expect(() => {
      getCPValue({
        ...params,
        stat: {
          ...params.stat,
          hp: 0,
        },
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getCPValue({
        ...params,
        stat: {
          ...params.stat,
          attack: 0,
        },
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getCPValue({
        ...params,
        stat: {
          ...params.stat,
          defense: 0,
        },
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getCPValue({
        ...params,
        stat: {
          ...params.stat,
          specialAttack: 0,
        },
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getCPValue({
        ...params,
        stat: {
          ...params.stat,
          specialDefense: 0,
        },
      });
    }).toThrow(InvalidParameterValueError);

    expect(() => {
      getCPValue({
        ...params,
        stat: {
          ...params.stat,
          speed: 0,
        },
      });
    }).toThrow(InvalidParameterValueError);
  });
});

describe("when calculing Pokémon's final stat value after stage multipliers boost", () => {
  it('returns stat value with +1 stage multiplier (Stat rose)', () => {
    const stat = getStatValue({
      base: 100,
      level: 100,
      nature: 'enhancing',
      ev: 255,
    });

    expect(getStatWithStage(stat, 1)).toBe(492);
  });

  it('returns stat value with +2 stage multiplier (Stat rose sharply)', () => {
    const stat = getStatValue({
      base: 100,
      level: 100,
      nature: 'enhancing',
      ev: 255,
    });

    expect(getStatWithStage(stat, 2)).toBe(656);
  });

  it('returns stat value with +3 stage multiplier (Stat rose drastically)', () => {
    const stat = getStatValue({
      base: 100,
      level: 100,
      nature: 'enhancing',
      ev: 255,
    });

    expect(getStatWithStage(stat, 3)).toBe(820);
  });

  it('returns Attack with maxed stages multiplier after Belly Drum move (+6)', () => {
    const stat = getStatValue({
      base: 100,
      level: 100,
      nature: 'enhancing',
      ev: 255,
    });

    expect(getStatWithStage(stat, 6)).toBe(1312);
  });

  it('returns Attack stat value fell after Intimidate ability (-1)', () => {
    const stat = getStatValue({
      base: 100,
      level: 100,
      nature: 'enhancing',
      ev: 255,
    });

    expect(getStatWithStage(stat, -1)).toBe(164);
  });
});
