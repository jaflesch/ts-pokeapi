import {
  MIN_EV_VALUE,
  MAX_EV_VALUE,
  MIN_IV_VALUE,
  MAX_IV_VALUE,
  MIN_EFFORT_LEVEL_PLA,
  MAX_EFFORT_LEVEL_PLA,
  MIN_IV_VALUE_PRIOR_GEN3,
  MAX_IV_VALUE_PRIOR_GEN3,
  MIN_EV_VALUE_PRIOR_GEN3,
  MAX_EV_VALUE_PRIOR_GEN3,
  MIN_AWAKENING_VALUE,
  MAX_AWAKENING_VALUE,
  MIN_FRIENDSHIP_VALUE,
  MAX_FRIENDSHIP_VALUE,
} from './constants';
import { InvalidParameterValueError } from './errors/InvalidParameterValueError';

type NatureStatType = 'enhancing' | 'hindering' | 'neutral';

type GetStatValueParams = {
  base: number;
  level: number;
  iv?: number;
  ev?: number;
  isHp?: boolean;
  nature?: NatureStatType;
  isShedinja?: boolean;
};

export const getStatValue = (params: GetStatValueParams): number => {
  const iv = params.iv ?? MAX_IV_VALUE;
  if (iv < MIN_IV_VALUE || iv > MAX_IV_VALUE) {
    throw new InvalidParameterValueError(
      `IV parameter must be a value between ${MIN_IV_VALUE} and ${MAX_IV_VALUE}`,
    );
  }

  const evValue = (params.ev ?? 0) / 4;
  if (evValue < MIN_EV_VALUE || evValue > MAX_EV_VALUE / 4) {
    throw new InvalidParameterValueError(
      `EV parameter must be a value between ${MIN_EV_VALUE} and ${MAX_EV_VALUE}`,
    );
  }

  const natureCoeficient =
    params.nature === 'enhancing'
      ? 1.1
      : params.nature === 'hindering'
        ? 0.9
        : 1;

  const result =
    ((2 * params.base + iv + Math.floor(evValue)) * params.level) / 100;

  if (params.isHp) {
    if (params.isShedinja) {
      return 1;
    }
    return Math.floor(result) + params.level + 10;
  }

  return Math.floor((Math.floor(result) + 5) * natureCoeficient);
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

export const getPriorGenIIIStatValue = (
  params: Omit<GetStatValueParams, 'nature' | 'isShedinja'>,
) => {
  const iv = params.iv ?? MAX_IV_VALUE_PRIOR_GEN3;
  if (iv < MIN_IV_VALUE_PRIOR_GEN3 || iv > MAX_IV_VALUE_PRIOR_GEN3) {
    throw new InvalidParameterValueError(
      `IV parameter must be a value between 0 and ${MAX_IV_VALUE_PRIOR_GEN3}`,
    );
  }

  const evValue = params.ev ?? 0;
  if (evValue < MIN_EV_VALUE_PRIOR_GEN3 || evValue > MAX_EV_VALUE_PRIOR_GEN3) {
    throw new InvalidParameterValueError(
      `EV parameter must be a value between 0 and ${MAX_EV_VALUE_PRIOR_GEN3}`,
    );
  }

  const baseIv = (params.base + iv) * 2;
  const evSqrt = Math.floor(Math.ceil(Math.sqrt(evValue)) / 4);
  const result = Math.floor(((baseIv + evSqrt) * params.level) / 100);

  if (params.isHp) {
    return result + params.level + 10;
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

export const getLegendsArceusStatValue = (
  params: GetLegendsArceusStatValueParams,
): number => {
  const level = params.level ?? 100;
  const effortLevel = params.effortLevel ?? 0;
  const effortLevelBonus = Math.round(
    (Math.sqrt(params.base) * getPLAEfforLevelMultiplier(effortLevel) + level) /
      2.5,
  );

  const nature =
    params.nature === 'enhancing'
      ? 1.1
      : params.nature === 'hindering'
        ? 0.9
        : 1;

  if (params.isHp) {
    const base = (level / 100 + 1) * params.base + level;
    return Math.floor(base) + effortLevelBonus;
  }

  const base = Math.floor(
    Math.floor(((level / 50 + 1) * params.base) / 1.5) * nature,
  );

  return base + effortLevelBonus;
};

export const getPLAEfforLevelMultiplier = (effortLevel: number): number => {
  if (effortLevel < 0 || effortLevel > 10) {
    throw new InvalidParameterValueError(
      `Effort level parameter must be a value between ${MIN_EFFORT_LEVEL_PLA} and ${MAX_EFFORT_LEVEL_PLA}`,
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
  av?: number; // awakening
  nature?: NatureStatType;
  friendship?: number;
};

export const getLetsGoPikachuStatValue = (
  params: GetLetsGoPikachuStatValueParams,
): number => {
  const av = params.av ?? 0;
  if (av < MIN_AWAKENING_VALUE || av > MAX_AWAKENING_VALUE) {
    throw new InvalidParameterValueError(
      `AV parameter must be a value between ${MIN_AWAKENING_VALUE} and ${MAX_AWAKENING_VALUE}`,
    );
  }

  const iv = params.iv ?? 31;
  if (iv < MIN_AWAKENING_VALUE || iv > MAX_AWAKENING_VALUE) {
    throw new InvalidParameterValueError(
      `IV parameter must be a value between ${MIN_IV_VALUE} and ${MAX_IV_VALUE}`,
    );
  }

  const friendship = params.friendship ?? 0;
  if (friendship < MIN_FRIENDSHIP_VALUE || friendship > MAX_FRIENDSHIP_VALUE) {
    throw new InvalidParameterValueError(
      `IV parameter must be a value between ${MIN_FRIENDSHIP_VALUE} and ${MAX_FRIENDSHIP_VALUE}`,
    );
  }

  const level = params.level ?? 100;
  const nature =
    params.nature === 'enhancing'
      ? 1.1
      : params.nature === 'hindering'
        ? 0.9
        : 1;

  const base = Math.floor(((2 * params.base + iv) * level) / 100);

  if (params.isHp) {
    return base + level + 10 + av;
  }

  return (
    Math.floor((base + 5) * nature * getLGPFriendshipMultiplier(friendship)) +
    av
  );
};

export const getLGPFriendshipMultiplier = (friendship: number): number => {
  return 1 + Math.floor((10 * friendship) / 255) / 100;
};

export const getCombatPowerValue = () => {
  // to do
  return false;
};
