"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidFrienshipValue = exports.isValidTotalAVs = exports.isValidAV = exports.isValidEffortLevel = exports.isValidEVPriorGen3 = exports.isValidIVPriorGen3 = exports.isValidTotalEVs = exports.isValidEV = exports.isValidIV = exports.isValidBaseStat = exports.isValidPokemonLevel = void 0;
const constants_1 = require("./constants");
/**
 * Returns true if given value is a valid Pokémon level.
 * @param {number} level {number} - Pokémon level.
 * @returns {boolean}
 */
const isValidPokemonLevel = (level) => {
    if (level >= constants_1.MIN_POKEMON_LEVEL && level <= constants_1.MAX_POKEMON_LEVEL) {
        return true;
    }
    return false;
};
exports.isValidPokemonLevel = isValidPokemonLevel;
/**
 * Returns true if given value is a valid Pokémon base stat.
 * @param {number} baseStat - Base stat of Pokémon.
 * @returns {boolean}
 */
const isValidBaseStat = (baseStat) => {
    return baseStat > 0;
};
exports.isValidBaseStat = isValidBaseStat;
/**
 * Returns true if given value is a valid Pokémon individual value (IV).
 * @param {number} iv - The Pokémon IV.
 * @returns {boolean}
 */
const isValidIV = (iv) => {
    if (iv >= constants_1.MIN_IV_VALUE && iv <= constants_1.MAX_IV_VALUE) {
        return true;
    }
    return false;
};
exports.isValidIV = isValidIV;
/**
 * Returns true if given value is a valid Pokémon effort value (EV).
 * @param {number} ev - The Pokémon EV.
 * @returns {boolean}
 */
const isValidEV = (ev) => {
    if (ev >= constants_1.MIN_EV_VALUE && ev <= constants_1.MAX_EV_VALUE) {
        return true;
    }
    return false;
};
exports.isValidEV = isValidEV;
/**
 * Returns true if given value is a valid sum of all Pokémon effort values (EV).
 * @param {number} totalEvs - The sum of all Pokémon's EVs.
 * @returns {boolean}
 */
const isValidTotalEVs = (totalEvs) => {
    if (totalEvs <= constants_1.MAX_TOTAL_EVS_VALUE) {
        return true;
    }
    return false;
};
exports.isValidTotalEVs = isValidTotalEVs;
/**
 * Returns true if given value is a valid Pokémon individual value (IV) prior Generation III games.
 * @param {number} iv - The Pokémon IV.
 * @returns {boolean}
 */
const isValidIVPriorGen3 = (iv) => {
    if (iv >= constants_1.MIN_IV_VALUE_PRIOR_GEN3 && iv <= constants_1.MAX_IV_VALUE_PRIOR_GEN3) {
        return true;
    }
    return false;
};
exports.isValidIVPriorGen3 = isValidIVPriorGen3;
/**
 * Returns true if given value is a valid Pokémon effort value (EV) prior Generation III games.
 * @param {number} ev - The Pokémon EV.
 * @returns {boolean}
 */
const isValidEVPriorGen3 = (ev) => {
    if (ev >= constants_1.MIN_EV_VALUE_PRIOR_GEN3 && ev <= constants_1.MAX_EV_VALUE_PRIOR_GEN3) {
        return true;
    }
    return false;
};
exports.isValidEVPriorGen3 = isValidEVPriorGen3;
/**
 * Returns true if given value is a valid Effort Level on Pokémon Legends Arceus game.
 * @param {number} effortLevel - The Pokémon Effort Level.
 * @returns {boolean}
 */
const isValidEffortLevel = (effortLevel) => {
    if (effortLevel >= constants_1.MIN_EFFORT_LEVEL_PLA &&
        effortLevel <= constants_1.MAX_EFFORT_LEVEL_PLA) {
        return true;
    }
    return false;
};
exports.isValidEffortLevel = isValidEffortLevel;
/**
 * Returns true if given value is a valid Pokémon Awakening Value (AV).
 * @param {number} av - The Pokémon AV.
 * @returns {boolean}
 */
const isValidAV = (av) => {
    if (av >= constants_1.MIN_AWAKENING_VALUE && av <= constants_1.MAX_AWAKENING_VALUE) {
        return true;
    }
    return false;
};
exports.isValidAV = isValidAV;
/**
 * Returns true if given value is a valid sum of all Pokémon Awakening Values (AV).
 * @param {number} totalAvs - The sum of all Pokémon's AVs.
 * @returns {boolean}
 */
const isValidTotalAVs = (totalAvs) => {
    if (totalAvs >= 0 && totalAvs <= constants_1.MAX_AWAKENING_VALUE * 6) {
        return true;
    }
    return false;
};
exports.isValidTotalAVs = isValidTotalAVs;
/**
 * Returns true if given value is a valid friendship value
 * @param {number} friendship - The Pokémon friendship value
 * @returns {boolean}
 */
const isValidFrienshipValue = (friendship) => {
    if (friendship >= constants_1.MIN_FRIENDSHIP_VALUE &&
        friendship <= constants_1.MAX_FRIENDSHIP_VALUE) {
        return true;
    }
    return false;
};
exports.isValidFrienshipValue = isValidFrienshipValue;
//# sourceMappingURL=validation.js.map