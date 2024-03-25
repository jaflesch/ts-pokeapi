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
} from '../utils';
import {
  InvalidParameterValueError,
  InvalidParameterRangeError,
} from '../errors';
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
} from '../validation';

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

export const getLetsGoPikachuStatValue = ({
  base,
  isHp,
  av = 0,
  iv = 31,
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
