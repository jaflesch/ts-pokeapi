"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const math_1 = require("../math");
const InvalidParameterValueError_1 = require("../errors/InvalidParameterValueError");
const constants_1 = require("../constants");
(0, globals_1.describe)('when using math module for current stats formula', () => {
    (0, globals_1.it)('gets a Pokémon stat at level 100, 0 IVs and 0 EVs', () => {
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isHp: true,
            base: 100,
            level: 100,
            iv: 0,
        })).toBe(310);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            iv: 0,
            nature: 'enhancing',
        })).toBe(225);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            iv: 0,
            nature: 'neutral',
        })).toBe(205);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            iv: 0,
            nature: 'hindering',
        })).toBe(184);
    });
    (0, globals_1.it)('gets a Pokémon stat at level 100, 0 IVs and MAX EVs', () => {
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isHp: true,
            base: 100,
            level: 100,
            iv: 0,
            ev: 255,
        })).toBe(373);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            iv: 0,
            ev: 255,
            nature: 'enhancing',
        })).toBe(294);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            iv: 0,
            ev: 255,
            nature: 'neutral',
        })).toBe(268);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            iv: 0,
            ev: 255,
            nature: 'hindering',
        })).toBe(241);
    });
    (0, globals_1.it)('gets a Pokémon stat at level 100, MAX IVs and 0 EVs', () => {
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isHp: true,
            base: 100,
            level: 100,
        })).toBe(341);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            nature: 'enhancing',
        })).toBe(259);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            nature: 'neutral',
        })).toBe(236);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            nature: 'hindering',
        })).toBe(212);
    });
    (0, globals_1.it)('gets a Pokémon stat at level 100, MAX IVs and MAX EVs', () => {
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isHp: true,
            base: 100,
            level: 100,
            ev: 255,
        })).toBe(404);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            nature: 'enhancing',
            ev: 255,
        })).toBe(328);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            nature: 'neutral',
            ev: 255,
        })).toBe(299);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 100,
            level: 100,
            nature: 'hindering',
            ev: 255,
        })).toBe(269);
    });
    (0, globals_1.it)('gets all Garchomp stats', () => {
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isHp: true,
            base: 108,
            level: 78,
            iv: 24,
            ev: 74,
        })).toBe(289);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 130,
            level: 78,
            iv: 12,
            ev: 190,
            nature: 'enhancing',
        })).toBe(278);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 95,
            level: 78,
            iv: 30,
            ev: 91,
            nature: 'neutral',
        })).toBe(193);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 80,
            level: 78,
            iv: 16,
            ev: 48,
            nature: 'hindering',
        })).toBe(135);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            base: 85,
            ev: 84,
            iv: 23,
            nature: 'neutral',
            level: 78,
        })).toBe(171);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            ev: 23,
            iv: 5,
            nature: 'neutral',
            base: 102,
            level: 78,
        })).toBe(171);
    });
    (0, globals_1.it)('gets Shedinja HP stat', () => {
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isShedinja: true,
            isHp: true,
            base: 1,
            level: 50,
            iv: 31,
            ev: 255,
        })).toBe(1);
    });
    (0, globals_1.it)('gets any Shedinja stat but HP', () => {
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isShedinja: true,
            isHp: false,
            base: 90,
            level: 100,
            iv: 20,
            ev: 78,
        })).toBe(224);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isShedinja: true,
            isHp: false,
            base: 90,
            level: 100,
            iv: 20,
            ev: 78,
            nature: 'enhancing',
        })).toBe(246);
        (0, globals_1.expect)((0, math_1.getStatValue)({
            isShedinja: true,
            isHp: false,
            base: 90,
            level: 100,
            iv: 20,
            ev: 78,
            nature: 'hindering',
        })).toBe(201);
    });
    (0, globals_1.it)('throws InvalidParameterValue exception when using invalid EV values', () => {
        (0, globals_1.expect)(() => {
            (0, math_1.getStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                ev: constants_1.MIN_EV_VALUE - 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
        (0, globals_1.expect)(() => {
            (0, math_1.getStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                ev: constants_1.MAX_EV_VALUE + 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
    });
    (0, globals_1.it)('throws InvalidParameterValue exception when using invalid IV values', () => {
        (0, globals_1.expect)(() => {
            (0, math_1.getStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                iv: constants_1.MIN_IV_VALUE - 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
        (0, globals_1.expect)(() => {
            (0, math_1.getStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                iv: constants_1.MAX_IV_VALUE + 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
    });
});
(0, globals_1.describe)('when using math module for Maximum and Minimum possible stats', () => {
    (0, globals_1.it)('gets Alakazam Sp.Atk at level 100, beneficial Nature, 252 EVs, 31 EVs', () => {
        (0, globals_1.expect)((0, math_1.getMaxStatValue)({
            base: 135,
            level: 100,
        })).toBe(405);
    });
    (0, globals_1.it)('gets Alakazam Sp.Atk at level 100, hindering Nature, 0 EVs, 0 EVs', () => {
        (0, globals_1.expect)((0, math_1.getMinStatValue)({
            base: 135,
            level: 100,
        })).toBe(247);
    });
    (0, globals_1.it)('gets Shedinja max Attack stat', () => {
        (0, globals_1.expect)((0, math_1.getMaxStatValue)({
            isShedinja: true,
            base: 90,
            level: 100,
        })).toBe(306);
    });
    (0, globals_1.it)('gets Shedinja max HP stat', () => {
        (0, globals_1.expect)((0, math_1.getMaxStatValue)({
            isShedinja: true,
            isHp: true,
            base: 90,
            level: 100,
        })).toBe(1);
    });
});
(0, globals_1.describe)('when using math module with prior Generation III stats formula', () => {
    (0, globals_1.it)('gets prior Generation III stats values for Pikachu', () => {
        (0, globals_1.expect)((0, math_1.getPriorGenIIIStatValue)({
            isHp: true,
            level: 81,
            base: 35,
            iv: 7,
            ev: 22850,
        })).toBe(189);
        (0, globals_1.expect)((0, math_1.getPriorGenIIIStatValue)({
            level: 81,
            base: 50,
            iv: 9,
            ev: 19625,
        })).toBe(128);
        (0, globals_1.expect)((0, math_1.getPriorGenIIIStatValue)({
            level: 81,
            base: 40,
            iv: 9,
            ev: 19625,
        })).toBe(112);
        (0, globals_1.expect)((0, math_1.getPriorGenIIIStatValue)({
            level: 81,
            base: 90,
            iv: 5,
            ev: 24795,
        })).toBe(190);
    });
    (0, globals_1.it)('throws InvalidParameterValue exception when invalid EV values', () => {
        (0, globals_1.expect)(() => {
            (0, math_1.getPriorGenIIIStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                ev: constants_1.MIN_EV_VALUE_PRIOR_GEN3 - 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
        (0, globals_1.expect)(() => {
            (0, math_1.getPriorGenIIIStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                ev: constants_1.MAX_EV_VALUE_PRIOR_GEN3 + 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
    });
    (0, globals_1.it)('throws InvalidParameterValue exception when invalid IV values', () => {
        (0, globals_1.expect)(() => {
            (0, math_1.getPriorGenIIIStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                iv: constants_1.MIN_IV_VALUE_PRIOR_GEN3 - 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
        (0, globals_1.expect)(() => {
            (0, math_1.getPriorGenIIIStatValue)({
                isHp: true,
                level: 50,
                base: 100,
                iv: constants_1.MAX_IV_VALUE_PRIOR_GEN3 + 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
    });
});
(0, globals_1.describe)('when using math module from different games stats formula', () => {
    (0, globals_1.it)('gets Pokémon Legends Arceus stats values for Arceus', () => {
        (0, globals_1.expect)((0, math_1.getLegendsArceusStatValue)({
            isHp: true,
            level: 100,
            base: 120,
            effortLevel: 10,
        })).toBe(490);
        (0, globals_1.expect)((0, math_1.getLegendsArceusStatValue)({
            level: 100,
            base: 120,
            effortLevel: 10,
        })).toBe(390);
        (0, globals_1.expect)((0, math_1.getLegendsArceusStatValue)({
            level: 100,
            base: 120,
            effortLevel: 10,
            nature: 'enhancing',
        })).toBe(414);
        (0, globals_1.expect)((0, math_1.getLegendsArceusStatValue)({
            level: 100,
            base: 120,
            effortLevel: 10,
            nature: 'hindering',
        })).toBe(366);
    });
    (0, globals_1.it)('throws InvalidParameterValue exception when using invalid Effort Level values', () => {
        (0, globals_1.expect)(() => {
            (0, math_1.getLegendsArceusStatValue)({
                base: 100,
                effortLevel: constants_1.MIN_EFFORT_LEVEL_PLA - 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
        (0, globals_1.expect)(() => {
            (0, math_1.getLegendsArceusStatValue)({
                base: 100,
                effortLevel: constants_1.MAX_EFFORT_LEVEL_PLA + 1,
            });
        }).toThrow(InvalidParameterValueError_1.InvalidParameterValueError);
    });
    (0, globals_1.it)("gets Pokémon Let's Go Pikachu & Eeevee stats values for Mew", () => {
        (0, globals_1.expect)((0, math_1.getLetsGoPikachuStatValue)({
            isHp: true,
            level: 100,
            base: 100,
        })).toBe(341);
        (0, globals_1.expect)((0, math_1.getLetsGoPikachuStatValue)({
            level: 100,
            base: 100,
        })).toBe(236);
        (0, globals_1.expect)((0, math_1.getLetsGoPikachuStatValue)({
            level: 100,
            base: 100,
            nature: 'enhancing',
        })).toBe(259);
        (0, globals_1.expect)((0, math_1.getLetsGoPikachuStatValue)({
            level: 100,
            base: 100,
            nature: 'hindering',
        })).toBe(212);
    });
});
//# sourceMappingURL=math.spec.js.map