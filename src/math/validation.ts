import {
  MIN_EV_VALUE,
  MAX_EV_VALUE,
  MIN_IV_VALUE,
  MAX_IV_VALUE,
  MIN_POKEMON_LEVEL,
  MAX_POKEMON_LEVEL,
  MAX_TOTAL_EVS_VALUE,
  MIN_AWAKENING_VALUE,
  MAX_AWAKENING_VALUE,
  MIN_EFFORT_LEVEL_PLA,
  MAX_EFFORT_LEVEL_PLA,
  MIN_FRIENDSHIP_VALUE,
  MAX_FRIENDSHIP_VALUE,
  MIN_IV_VALUE_PRIOR_GEN3,
  MAX_IV_VALUE_PRIOR_GEN3,
  MIN_EV_VALUE_PRIOR_GEN3,
  MAX_EV_VALUE_PRIOR_GEN3,
} from './constants';

/**
 * Returns true if given value is a valid Pokémon level.
 * @param {number} level {number} - Pokémon level.
 * @returns {boolean}
 */
export const isValidPokemonLevel = (level: number): boolean => {
  if (level >= MIN_POKEMON_LEVEL && level <= MAX_POKEMON_LEVEL) {
    return true;
  }

  return false;
};

/**
 * Returns true if given value is a valid Pokémon base stat.
 * @param {number} baseStat - Base stat of Pokémon.
 * @returns {boolean}
 */
export const isValidBaseStat = (baseStat: number): boolean => {
  return baseStat > 0;
};

/**
 * Returns true if given value is a valid Pokémon individual value (IV).
 * @param {number} iv - The Pokémon's IV.
 * @returns {boolean}
 */
export const isValidIV = (iv: number): boolean => {
  if (iv >= MIN_IV_VALUE && iv <= MAX_IV_VALUE) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid Pokémon effort value (EV).
 * @param {number} ev - The Pokémon's EV.
 * @returns {boolean}
 */
export const isValidEV = (ev: number): boolean => {
  if (ev >= MIN_EV_VALUE && ev <= MAX_EV_VALUE) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid sum of all Pokémon effort values (EV).
 * @param {number} totalEvs - The sum of all Pokémon's EVs.
 * @returns {boolean}
 */
export const isValidTotalEVs = (totalEvs: number): boolean => {
  if (totalEvs <= MAX_TOTAL_EVS_VALUE) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid Pokémon individual value (IV) prior Generation III games.
 * @param {number} iv - The Pokémon's IV.
 * @returns {boolean}
 */
export const isValidIVPriorGen3 = (iv: number): boolean => {
  if (iv >= MIN_IV_VALUE_PRIOR_GEN3 && iv <= MAX_IV_VALUE_PRIOR_GEN3) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid Pokémon effort value (EV) prior Generation III games.
 * @param {number} ev - The Pokémon's EV.
 * @returns {boolean}
 */
export const isValidEVPriorGen3 = (ev: number): boolean => {
  if (ev >= MIN_EV_VALUE_PRIOR_GEN3 && ev <= MAX_EV_VALUE_PRIOR_GEN3) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid Effort Level on Pokémon Legends Arceus game.
 * @param {number} effortLevel - The Pokémon's Effort Level.
 * @returns {boolean}
 */
export const isValidEffortLevel = (effortLevel: number): boolean => {
  if (
    effortLevel >= MIN_EFFORT_LEVEL_PLA &&
    effortLevel <= MAX_EFFORT_LEVEL_PLA
  ) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid Pokémon Awakening Value (AV).
 * @param {number} av - The Pokémon's AV.
 * @returns {boolean}
 */
export const isValidAV = (av: number): boolean => {
  if (av >= MIN_AWAKENING_VALUE && av <= MAX_AWAKENING_VALUE) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid sum of all Pokémon Awakening Values (AV).
 * @param {number} totalAvs - The sum of all Pokémon's AVs.
 * @returns {boolean}
 */
export const isValidTotalAVs = (totalAvs: number): boolean => {
  if (totalAvs >= 0 && totalAvs <= MAX_AWAKENING_VALUE * 6) {
    return true;
  }
  return false;
};

/**
 * Returns true if given value is a valid friendship value
 * @param {number} friendship - The Pokémon's friendship value
 * @returns {boolean}
 */
export const isValidFrienshipValue = (friendship: number): boolean => {
  if (
    friendship >= MIN_FRIENDSHIP_VALUE &&
    friendship <= MAX_FRIENDSHIP_VALUE
  ) {
    return true;
  }
  return false;
};
