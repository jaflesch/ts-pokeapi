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

export const isValidPokemonLevel = (level: number) => {
  if (level >= MIN_POKEMON_LEVEL && level <= MAX_POKEMON_LEVEL) {
    return true;
  }

  return false;
};

export const isValidBaseStat = (baseStat: number) => {
  return baseStat > 0;
};

export const isValidIV = (av: number) => {
  if (av >= MIN_IV_VALUE && av <= MAX_IV_VALUE) {
    return true;
  }
  return false;
};

export const isValidEV = (ev: number) => {
  if (ev >= MIN_EV_VALUE && ev <= MAX_EV_VALUE) {
    return true;
  }
  return false;
};

export const isValidTotalEVs = (ev: number) => {
  if (ev <= MAX_TOTAL_EVS_VALUE) {
    return true;
  }
  return false;
};

export const isValidIVPriorGen3 = (av: number) => {
  if (av >= MIN_IV_VALUE_PRIOR_GEN3 && av <= MAX_IV_VALUE_PRIOR_GEN3) {
    return true;
  }
  return false;
};

export const isValidEVPriorGen3 = (av: number) => {
  if (av >= MIN_EV_VALUE_PRIOR_GEN3 && av <= MAX_EV_VALUE_PRIOR_GEN3) {
    return true;
  }
  return false;
};

export const isValidEffortLevel = (effortLevel: number) => {
  if (
    effortLevel >= MIN_EFFORT_LEVEL_PLA &&
    effortLevel <= MAX_EFFORT_LEVEL_PLA
  ) {
    return true;
  }
  return false;
};

export const isValidAwakeningValue = (av: number) => {
  if (av >= MIN_AWAKENING_VALUE && av <= MAX_AWAKENING_VALUE) {
    return true;
  }
  return false;
};

export const isValidTotalAwakeningValue = (av: number) => {
  if (av >= 0 && av <= MAX_AWAKENING_VALUE * 6) {
    return true;
  }
  return false;
};

export const isValidFrienshipValue = (friendship: number) => {
  if (
    friendship >= MIN_FRIENDSHIP_VALUE &&
    friendship <= MAX_FRIENDSHIP_VALUE
  ) {
    return true;
  }
  return false;
};
