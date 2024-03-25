"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCPValue = exports.getLGPFriendshipMultiplier = exports.getLetsGoPikachuStatValue = exports.getPLAEfforLevelMultiplier = exports.getLegendsArceusStatValue = exports.getPriorGenIIIStatValue = exports.getMinStatValue = exports.getMaxStatValue = exports.getStatValue = void 0;
const utils_1 = require("../utils");
const errors_1 = require("../errors");
const validation_1 = require("../validation");
const getStatValue = ({ base, ev = 0, iv = utils_1.MAX_IV_VALUE, isHp = false, level = 100, nature = 'neutral', isShedinja = false, }) => {
    if (!(0, validation_1.isValidPokemonLevel)(level)) {
        throw new errors_1.InvalidParameterRangeError('Pokémon level', utils_1.MIN_POKEMON_LEVEL, utils_1.MAX_POKEMON_LEVEL);
    }
    if (!(0, validation_1.isValidBaseStat)(base)) {
        throw new errors_1.InvalidParameterValueError('Base parameter should be a positive value');
    }
    if (!(0, validation_1.isValidIV)(iv)) {
        throw new errors_1.InvalidParameterRangeError('IV', utils_1.MIN_IV_VALUE, utils_1.MAX_IV_VALUE);
    }
    const evValue = ev / 4;
    if (!(0, validation_1.isValidEV)(ev)) {
        throw new errors_1.InvalidParameterRangeError('EV', utils_1.MIN_EV_VALUE, utils_1.MAX_EV_VALUE);
    }
    const natureValue = nature === 'enhancing' ? 1.1 : nature === 'hindering' ? 0.9 : 1;
    const result = ((2 * base + iv + Math.floor(evValue)) * level) / 100;
    if (isHp) {
        if (isShedinja) {
            return 1;
        }
        return Math.floor(result) + level + 10;
    }
    return Math.floor((Math.floor(result) + 5) * natureValue);
};
exports.getStatValue = getStatValue;
const getMaxStatValue = (params) => {
    return (0, exports.getStatValue)(Object.assign(Object.assign({}, params), { iv: utils_1.MAX_IV_VALUE, ev: utils_1.MAX_EV_VALUE, nature: 'enhancing' }));
};
exports.getMaxStatValue = getMaxStatValue;
const getMinStatValue = (params) => {
    return (0, exports.getStatValue)(Object.assign(Object.assign({}, params), { iv: utils_1.MIN_IV_VALUE, ev: utils_1.MIN_EV_VALUE, nature: 'hindering' }));
};
exports.getMinStatValue = getMinStatValue;
const getPriorGenIIIStatValue = ({ base, isHp, ev = 0, iv = utils_1.MAX_IV_VALUE_PRIOR_GEN3, level = 100, }) => {
    if (!(0, validation_1.isValidBaseStat)(base)) {
        throw new errors_1.InvalidParameterValueError('Base parameter should be a positive value');
    }
    if (!(0, validation_1.isValidPokemonLevel)(level)) {
        throw new errors_1.InvalidParameterRangeError('Pokémon level', utils_1.MIN_POKEMON_LEVEL, utils_1.MAX_POKEMON_LEVEL);
    }
    if (!(0, validation_1.isValidIVPriorGen3)(iv)) {
        throw new errors_1.InvalidParameterRangeError('IV', utils_1.MIN_IV_VALUE_PRIOR_GEN3, utils_1.MAX_IV_VALUE_PRIOR_GEN3);
    }
    if (!(0, validation_1.isValidEVPriorGen3)(ev)) {
        throw new errors_1.InvalidParameterRangeError('EV', utils_1.MIN_EV_VALUE_PRIOR_GEN3, utils_1.MAX_EV_VALUE_PRIOR_GEN3);
    }
    const baseIv = (base + iv) * 2;
    const evSqrt = Math.floor(Math.ceil(Math.sqrt(ev)) / 4);
    const result = Math.floor(((baseIv + evSqrt) * level) / 100);
    if (isHp) {
        return result + level + 10;
    }
    else {
        return result + 5;
    }
};
exports.getPriorGenIIIStatValue = getPriorGenIIIStatValue;
const getLegendsArceusStatValue = ({ base, isHp, level = 100, nature = 'neutral', effortLevel = 0, }) => {
    if (!(0, validation_1.isValidBaseStat)(base)) {
        throw new errors_1.InvalidParameterValueError('Base parameter should be a positive value');
    }
    if (!(0, validation_1.isValidPokemonLevel)(level)) {
        throw new errors_1.InvalidParameterRangeError('Pokémon level', utils_1.MIN_POKEMON_LEVEL, utils_1.MAX_POKEMON_LEVEL);
    }
    const effortLevelBonus = Math.round((Math.sqrt(base) * (0, exports.getPLAEfforLevelMultiplier)(effortLevel) + level) / 2.5);
    const natureValue = nature === 'enhancing' ? 1.1 : nature === 'hindering' ? 0.9 : 1;
    if (isHp) {
        const result = (level / 100 + 1) * base + level;
        return Math.floor(result) + effortLevelBonus;
    }
    const result = Math.floor(Math.floor(((level / 50 + 1) * base) / 1.5) * natureValue);
    return result + effortLevelBonus;
};
exports.getLegendsArceusStatValue = getLegendsArceusStatValue;
const getPLAEfforLevelMultiplier = (effortLevel) => {
    if (!(0, validation_1.isValidEffortLevel)(effortLevel)) {
        throw new errors_1.InvalidParameterRangeError('Effort level', utils_1.MIN_EFFORT_LEVEL_PLA, utils_1.MAX_EFFORT_LEVEL_PLA);
    }
    const multiplier = [0, 2, 3, 4, 7, 8, 9, 14, 15, 16, 25];
    return multiplier[effortLevel];
};
exports.getPLAEfforLevelMultiplier = getPLAEfforLevelMultiplier;
const getLetsGoPikachuStatValue = ({ base, isHp, av = 0, iv = 31, level = 100, nature = 'neutral', friendship = 0, }) => {
    if (!(0, validation_1.isValidPokemonLevel)(level)) {
        throw new errors_1.InvalidParameterRangeError('Pokémon level', utils_1.MIN_POKEMON_LEVEL, utils_1.MAX_POKEMON_LEVEL);
    }
    if (!(0, validation_1.isValidBaseStat)(base)) {
        throw new errors_1.InvalidParameterValueError('Base parameter should be a positive value');
    }
    if (!(0, validation_1.isValidAV)(av)) {
        throw new errors_1.InvalidParameterRangeError('AV', utils_1.MIN_AWAKENING_VALUE, utils_1.MAX_AWAKENING_VALUE);
    }
    if (!(0, validation_1.isValidIV)(iv)) {
        throw new errors_1.InvalidParameterRangeError('IV', utils_1.MIN_IV_VALUE, utils_1.MAX_IV_VALUE);
    }
    const natureValue = nature === 'enhancing' ? 1.1 : nature === 'hindering' ? 0.9 : 1;
    const result = Math.floor(((2 * base + iv) * level) / 100);
    if (isHp) {
        return result + level + 10 + av;
    }
    return (Math.floor((result + 5) * natureValue * (0, exports.getLGPFriendshipMultiplier)(friendship)) + av);
};
exports.getLetsGoPikachuStatValue = getLetsGoPikachuStatValue;
const getLGPFriendshipMultiplier = (friendship) => {
    if (!(0, validation_1.isValidFrienshipValue)(friendship)) {
        throw new errors_1.InvalidParameterRangeError('Friendship', utils_1.MIN_FRIENDSHIP_VALUE, utils_1.MAX_FRIENDSHIP_VALUE);
    }
    return 1 + Math.floor((10 * friendship) / 255) / 100;
};
exports.getLGPFriendshipMultiplier = getLGPFriendshipMultiplier;
const getCPValue = ({ stat, totalAv = 0, level = 100, }) => {
    if (!(0, validation_1.isValidPokemonLevel)(level)) {
        throw new errors_1.InvalidParameterRangeError('Pokémon level', utils_1.MIN_POKEMON_LEVEL, utils_1.MAX_POKEMON_LEVEL);
    }
    if (!(0, validation_1.isValidTotalAVs)(totalAv)) {
        throw new errors_1.InvalidParameterRangeError('totalAv', utils_1.MIN_AWAKENING_VALUE, utils_1.MAX_AWAKENING_VALUE * 6);
    }
    let totalStats = 0;
    const statsValue = Object.values(stat);
    for (let i = 0; i < statsValue.length; i++) {
        if (!(0, validation_1.isValidBaseStat)(statsValue[i])) {
            throw new errors_1.InvalidParameterValueError(`Any stat parameter must be a value bigger than 0`);
        }
        totalStats += statsValue[i];
    }
    const result = Math.floor((totalStats * level * 6) / 100 + totalAv * (level / 4 / 100 + 2));
    return Math.min(result, utils_1.MAX_COMBAT_POWER_VALUE);
};
exports.getCPValue = getCPValue;
//# sourceMappingURL=stat.js.map