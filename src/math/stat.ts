import {
  InvalidParameterValueError,
  InvalidParameterRangeError,
} from '../errors';
import {
  MIN_EV_VALUE,
  MAX_EV_VALUE,
  MIN_IV_VALUE,
  MAX_IV_VALUE,
  MIN_POKEMON_LEVEL,
  MAX_POKEMON_LEVEL,
  MIN_AWAKENING_VALUE,
  MAX_AWAKENING_VALUE,
  MIN_EFFORT_LEVEL_PLA,
  MAX_EFFORT_LEVEL_PLA,
  MIN_FRIENDSHIP_VALUE,
  MAX_FRIENDSHIP_VALUE,
  MAX_COMBAT_POWER_VALUE,
  MIN_IV_VALUE_PRIOR_GEN3,
  MAX_IV_VALUE_PRIOR_GEN3,
  MIN_EV_VALUE_PRIOR_GEN3,
  MAX_EV_VALUE_PRIOR_GEN3,
} from './constants';
import {
  isValidAV,
  isValidEV,
  isValidIV,
  isValidBaseStat,
  isValidTotalAVs,
  isValidEffortLevel,
  isValidIVPriorGen3,
  isValidEVPriorGen3,
  isValidPokemonLevel,
  isValidFrienshipValue,
} from './validation';

type NatureStatType = 'enhancing' | 'hindering' | 'neutral';

type GetStatValueParams = {
  base: number;
  iv?: number;
  ev?: number;
  isHp?: boolean;
  level?: number;
  nature?: NatureStatType;
  isShedinja?: boolean;
};

/**
 * Returns the Pokémon's final stat value regarding parameters sent
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {number} [params.ev = 0] - The Pokémon's Effort Value (EV) for given stat.
 * @param {number} [params.iv = MAX_IV_VALUE] - The Pokémon's Individual Value (IV) for given stat.
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {NatureStatType} [params.nature = neutral] - If the Pokémon has a hindering, neutral, or enhancing nature.
 * @param {boolean} [params.isShedinja = false] - True if evaluating a stat for {@link https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon) Shedinja}.
 * @returns {number}
 */
export const getStatValue = ({
  base,
  ev = 0,
  iv = MAX_IV_VALUE,
  isHp = false,
  level = 100,
  nature = 'neutral',
  isShedinja = false,
}: GetStatValueParams): number => {
  if (!isValidPokemonLevel(level)) {
    throw new InvalidParameterRangeError(
      'Pokémon level',
      MIN_POKEMON_LEVEL,
      MAX_POKEMON_LEVEL,
    );
  }
  if (!isValidBaseStat(base)) {
    throw new InvalidParameterValueError(
      'Base parameter should be a positive value',
    );
  }

  if (!isValidIV(iv)) {
    throw new InvalidParameterRangeError('IV', MIN_IV_VALUE, MAX_IV_VALUE);
  }

  const evValue = ev / 4;
  if (!isValidEV(ev)) {
    throw new InvalidParameterRangeError('EV', MIN_EV_VALUE, MAX_EV_VALUE);
  }

  const natureValue =
    nature === 'enhancing' ? 1.1 : nature === 'hindering' ? 0.9 : 1;

  const result = ((2 * base + iv + Math.floor(evValue)) * level) / 100;

  if (isHp) {
    if (isShedinja) {
      return 1;
    }
    return Math.floor(result) + level + 10;
  }

  return Math.floor((Math.floor(result) + 5) * natureValue);
};

/**
 * Returns the Pokémon's final maximum possible stat value regarding parameters sent
 * @param {Object} params - The general parameters used for Pokémon's maximum possible stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {boolean} [params.isShedinja = false] - True if evaluating a stat for {@link https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon) Shedinja}.
 * @returns {number}
 */
export const getMaxStatValue = (
  params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>,
): number => {
  return getStatValue({
    ...params,
    iv: MAX_IV_VALUE,
    ev: MAX_EV_VALUE,
    nature: 'enhancing',
  });
};

/**
 * Returns the Pokémon's final minimum possible stat value regarding parameters sent
 * @param {Object} params - The general parameters used for Pokémon's minimum possible stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {boolean} [params.isShedinja = false] - True if evaluating a stat for {@link https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon) Shedinja}.
 * @returns {number}
 */
export const getMinStatValue = (
  params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>,
): number => {
  return getStatValue({
    ...params,
    iv: MIN_IV_VALUE,
    ev: MIN_EV_VALUE,
    nature: 'hindering',
  });
};

/**
 * Returns the Pokémon's final stat value regarding parameters sent for Pokémon Red, Blue, Yellow, Gold, Silver, and Crystal games.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {number} [params.ev = 0] - The Pokémon's Effort Value (EV) for given stat.
 * @param {number} [params.iv = MAX_IV_VALUE_PRIOR_GEN3] - The Pokémon's Individual Value (IV) for given stat.
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @returns {number}
 */
export const getPriorGenIIIStatValue = ({
  base,
  isHp,
  ev = 0,
  iv = MAX_IV_VALUE_PRIOR_GEN3,
  level = 100,
}: Omit<GetStatValueParams, 'nature' | 'isShedinja'>) => {
  if (!isValidBaseStat(base)) {
    throw new InvalidParameterValueError(
      'Base parameter should be a positive value',
    );
  }

  if (!isValidPokemonLevel(level)) {
    throw new InvalidParameterRangeError(
      'Pokémon level',
      MIN_POKEMON_LEVEL,
      MAX_POKEMON_LEVEL,
    );
  }

  if (!isValidIVPriorGen3(iv)) {
    throw new InvalidParameterRangeError(
      'IV',
      MIN_IV_VALUE_PRIOR_GEN3,
      MAX_IV_VALUE_PRIOR_GEN3,
    );
  }

  if (!isValidEVPriorGen3(ev)) {
    throw new InvalidParameterRangeError(
      'EV',
      MIN_EV_VALUE_PRIOR_GEN3,
      MAX_EV_VALUE_PRIOR_GEN3,
    );
  }

  const baseIv = (base + iv) * 2;
  const evSqrt = Math.floor(Math.ceil(Math.sqrt(ev)) / 4);
  const result = Math.floor(((baseIv + evSqrt) * level) / 100);

  if (isHp) {
    return result + level + 10;
  } else {
    return result + 5;
  }
};

type GetLegendsArceusStatValueParams = {
  base: number;
  isHp?: boolean;
  level?: number;
  effortLevel?: number;
  nature?: NatureStatType;
};

/**
 * Returns the Pokémon's final stat value regarding parameters sent for Pokémon Legends Arceus game.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {number} [params.effortLevel = 0] - The Pokémon's Effort Level for given stat.
 * @param {NatureStatType} [params.nature = neutral] - If the Pokémon has a hindering, neutral, or enhancing nature.
 * @returns {number}
 */
export const getLegendsArceusStatValue = ({
  base,
  isHp,
  level = 100,
  nature = 'neutral',
  effortLevel = 0,
}: GetLegendsArceusStatValueParams): number => {
  if (!isValidBaseStat(base)) {
    throw new InvalidParameterValueError(
      'Base parameter should be a positive value',
    );
  }

  if (!isValidPokemonLevel(level)) {
    throw new InvalidParameterRangeError(
      'Pokémon level',
      MIN_POKEMON_LEVEL,
      MAX_POKEMON_LEVEL,
    );
  }

  const effortLevelBonus = Math.round(
    (Math.sqrt(base) * getPLAEfforLevelMultiplier(effortLevel) + level) / 2.5,
  );

  const natureValue =
    nature === 'enhancing' ? 1.1 : nature === 'hindering' ? 0.9 : 1;

  if (isHp) {
    const result = (level / 100 + 1) * base + level;
    return Math.floor(result) + effortLevelBonus;
  }

  const result = Math.floor(
    Math.floor(((level / 50 + 1) * base) / 1.5) * natureValue,
  );

  return result + effortLevelBonus;
};

/**
 * Returns the Pokémon's Effort Level Multiplier for Pokémon Legends Arceus game.
 * @param {number} effortLevel - The Pokémon's Effort Level.
 * @returns {number}
 */
export const getPLAEfforLevelMultiplier = (effortLevel: number): number => {
  if (!isValidEffortLevel(effortLevel)) {
    throw new InvalidParameterRangeError(
      'Effort level',
      MIN_EFFORT_LEVEL_PLA,
      MAX_EFFORT_LEVEL_PLA,
    );
  }
  const multiplier = [0, 2, 3, 4, 7, 8, 9, 14, 15, 16, 25];
  return multiplier[effortLevel];
};

type GetLetsGoPikachuStatValueParams = {
  base: number;
  isHp?: boolean;
  level?: number;
  iv?: number;
  av?: number;
  nature?: NatureStatType;
  friendship?: number;
};

/**
 * Returns the Pokémon's final stat value regarding parameters sent for Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.av = 0] - The Pokémon's Awakening Value (AV), also known as Go Power bonus, for given stat.
 * @param {number} [params.iv = MAX_IV_VALUE] - The Pokémon's Individual Vale (IV) for given stat.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {number} [params.friendship = 0] - The Pokémon's friendship level.
 * @param {NatureStatType} [params.nature = neutral] - If the Pokémon has a hindering, neutral, or enhancing nature.
 * @returns {number}
 */
export const getLetsGoPikachuStatValue = ({
  base,
  isHp,
  av = 0,
  iv = MAX_IV_VALUE,
  level = 100,
  nature = 'neutral',
  friendship = 0,
}: GetLetsGoPikachuStatValueParams): number => {
  if (!isValidPokemonLevel(level)) {
    throw new InvalidParameterRangeError(
      'Pokémon level',
      MIN_POKEMON_LEVEL,
      MAX_POKEMON_LEVEL,
    );
  }

  if (!isValidBaseStat(base)) {
    throw new InvalidParameterValueError(
      'Base parameter should be a positive value',
    );
  }

  if (!isValidAV(av)) {
    throw new InvalidParameterRangeError(
      'AV',
      MIN_AWAKENING_VALUE,
      MAX_AWAKENING_VALUE,
    );
  }

  if (!isValidIV(iv)) {
    throw new InvalidParameterRangeError('IV', MIN_IV_VALUE, MAX_IV_VALUE);
  }

  const natureValue =
    nature === 'enhancing' ? 1.1 : nature === 'hindering' ? 0.9 : 1;

  const result = Math.floor(((2 * base + iv) * level) / 100);

  if (isHp) {
    return result + level + 10 + av;
  }

  return (
    Math.floor(
      (result + 5) * natureValue * getLGPFriendshipMultiplier(friendship),
    ) + av
  );
};

/**
 * Returns the Pokémon's Effort Level Multiplier in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.
 * @param {number} friendship - The Pokémon's friendship Level.
 * @returns {number}
 */
export const getLGPFriendshipMultiplier = (friendship: number): number => {
  if (!isValidFrienshipValue(friendship)) {
    throw new InvalidParameterRangeError(
      'Friendship',
      MIN_FRIENDSHIP_VALUE,
      MAX_FRIENDSHIP_VALUE,
    );
  }
  return 1 + Math.floor((10 * friendship) / 255) / 100;
};

type GetCPValueParams = {
  stat: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  level?: number;
  totalAv?: number;
};

/**
 * Returns the Pokémon's Combat Power in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.stat - The Pokémon's base stats
 * @param {number} params.stat.hp - The Pokémon's HP stat value
 * @param {number} params.stat.attack - The Pokémon's Attack stat value
 * @param {number} params.stat.defense - The Pokémon's Defense stat value
 * @param {number} params.stat.specialAttack - The Pokémon's Special Attack stat value
 * @param {number} params.stat.specialDefense - The Pokémon's Special Defense stat value
 * @param {number} params.stat.speed - The Pokémon's Speed stat value
 * @param {number} [params.totalAv = 0] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @returns {number}
 */
export const getCPValue = ({
  stat,
  totalAv = 0,
  level = 100,
}: GetCPValueParams) => {
  if (!isValidPokemonLevel(level)) {
    throw new InvalidParameterRangeError(
      'Pokémon level',
      MIN_POKEMON_LEVEL,
      MAX_POKEMON_LEVEL,
    );
  }

  if (!isValidTotalAVs(totalAv)) {
    throw new InvalidParameterRangeError(
      'totalAv',
      MIN_AWAKENING_VALUE,
      MAX_AWAKENING_VALUE * 6,
    );
  }

  let totalStats = 0;
  const statsValue = Object.values(stat);
  for (let i = 0; i < statsValue.length; i++) {
    if (!isValidBaseStat(statsValue[i])) {
      throw new InvalidParameterValueError(
        `Any stat parameter must be a value bigger than 0`,
      );
    }
    totalStats += statsValue[i];
  }

  const result = Math.floor(
    (totalStats * level * 6) / 100 + totalAv * (level / 4 / 100 + 2),
  );

  return Math.min(result, MAX_COMBAT_POWER_VALUE);
};

type StageMultiplier = -6 | -5 | -4 | -3 | -2 | -1 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Returns the final Pokémon's stat value after applying a scale of stage multipliers.
 * See more on {@link https://bulbapedia.bulbagarden.net/wiki/Stat_modifier Bulbapedia}.
 * @param {number} statValue - the Pokémon stat to apply stage multiplier.
 * @param {StageMultiplier} multiplier - the stage multiplier to apply on Pokémon stat.
 * @returns {number} The Pokémon stat value after stage multiplier.
 */
export const getStatWithStage = (
  statValue: number,
  multiplier: StageMultiplier,
): number => {
  return statValue * (0.5 * multiplier + 1);
};
