import { describe, expect, it } from '@jest/globals';
import {
  MIN_IV_VALUE,
  MAX_IV_VALUE,
  MIN_EV_VALUE,
  MAX_EV_VALUE,
  MIN_POKEMON_LEVEL,
  MAX_POKEMON_LEVEL,
  MAX_TOTAL_EVS_VALUE,
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
  isValidAV,
  isValidEV,
  isValidIV,
  isValidTotalAVs,
  isValidTotalEVs,
  isValidBaseStat,
  isValidEffortLevel,
  isValidEVPriorGen3,
  isValidIVPriorGen3,
  isValidPokemonLevel,
  isValidFrienshipValue,
} from '../validation';

describe('when validating Pokémon level', () => {
  it('returns true when using valid value', () => {
    expect(isValidPokemonLevel(MIN_POKEMON_LEVEL)).toBe(true);
    expect(isValidPokemonLevel(50)).toBe(true);
    expect(isValidPokemonLevel(MAX_POKEMON_LEVEL)).toBe(true);
  });

  it('returns false when using invalid value', () => {
    expect(isValidPokemonLevel(MIN_POKEMON_LEVEL - 1)).toBe(false);
    expect(isValidPokemonLevel(MAX_POKEMON_LEVEL + 1)).toBe(false);
  });
});

describe('when validating Pokémon base stats', () => {
  it('returns true when using valid value', () => {
    expect(isValidBaseStat(1)).toBe(true);
    expect(isValidBaseStat(100)).toBe(true);
    expect(isValidBaseStat(200)).toBe(true);
  });

  it('returns false when using invalid value', () => {
    expect(isValidBaseStat(0)).toBe(false);
    expect(isValidPokemonLevel(-1)).toBe(false);
  });
});

describe('when validating Pokémon EV values', () => {
  it('returns true when using valid EV values', () => {
    expect(isValidEV(126)).toBe(true);
    expect(isValidEV(252)).toBe(true);
    expect(isValidEV(MIN_EV_VALUE)).toBe(true);
    expect(isValidEV(MAX_EV_VALUE)).toBe(true);
  });

  it('returns false when using invalid EV values', () => {
    expect(isValidEV(MIN_EV_VALUE - 1)).toBe(false);
    expect(isValidEV(MAX_EV_VALUE + 1)).toBe(false);
  });

  it('returns true when using prior Generation III valid EV values', () => {
    expect(isValidEVPriorGen3(12677)).toBe(true);
    expect(isValidEVPriorGen3(34782)).toBe(true);
    expect(isValidEVPriorGen3(MIN_EV_VALUE_PRIOR_GEN3)).toBe(true);
    expect(isValidEVPriorGen3(MAX_EV_VALUE_PRIOR_GEN3)).toBe(true);
  });

  it('returns false when using prior Generation III invalid EV values', () => {
    expect(isValidEVPriorGen3(MIN_EV_VALUE_PRIOR_GEN3 - 1)).toBe(false);
    expect(isValidEVPriorGen3(MAX_EV_VALUE_PRIOR_GEN3 + 1)).toBe(false);
  });

  it('returns true when using valid total EV values', () => {
    expect(isValidTotalEVs(MAX_EV_VALUE)).toBe(true);
    expect(isValidTotalEVs(252)).toBe(true);
    expect(isValidTotalEVs(252 * 2)).toBe(true);
    expect(isValidTotalEVs(252 * 2 + 4)).toBe(true);
    expect(isValidTotalEVs(MAX_TOTAL_EVS_VALUE)).toBe(true);
  });
  it('returns false when using invalid total EV values', () => {
    expect(isValidTotalEVs(MAX_TOTAL_EVS_VALUE + 1)).toBe(false);
  });
});

describe('when validating Pokémon IV values', () => {
  it('returns true when using valid IV values', () => {
    expect(isValidIV(16)).toBe(true);
    expect(isValidIV(MIN_IV_VALUE)).toBe(true);
    expect(isValidIV(MAX_IV_VALUE)).toBe(true);
  });

  it('returns false when using invalid IV values', () => {
    expect(isValidIV(MIN_IV_VALUE - 1)).toBe(false);
    expect(isValidIV(MAX_IV_VALUE + 1)).toBe(false);
  });

  it('returns true when using prior Generation III valid IV values', () => {
    expect(isValidIVPriorGen3(MIN_IV_VALUE_PRIOR_GEN3)).toBe(true);
    expect(isValidIVPriorGen3(11)).toBe(true);
    expect(isValidIVPriorGen3(MAX_IV_VALUE_PRIOR_GEN3)).toBe(true);
  });

  it('returns false when using prior Generation III invalid IV values ', () => {
    expect(isValidIVPriorGen3(MIN_IV_VALUE_PRIOR_GEN3 - 1)).toBe(false);
    expect(isValidIVPriorGen3(MAX_IV_VALUE_PRIOR_GEN3 + 1)).toBe(false);
  });
});

describe('when validating PLA Effort level', () => {
  it('returns true when using valid value', () => {
    expect(isValidEffortLevel(MIN_EFFORT_LEVEL_PLA)).toBe(true);
    expect(isValidEffortLevel(5)).toBe(true);
    expect(isValidEffortLevel(MAX_EFFORT_LEVEL_PLA)).toBe(true);
  });

  it('returns false when using invalid value', () => {
    expect(isValidEffortLevel(MIN_EFFORT_LEVEL_PLA - 1)).toBe(false);
    expect(isValidEffortLevel(MAX_EFFORT_LEVEL_PLA + 1)).toBe(false);
  });
});

describe("when validating Pokémon Let's Go Pikachu/Eevee formulas", () => {
  it('returns true when using valid total AV values', () => {
    expect(isValidTotalAVs(MIN_AWAKENING_VALUE)).toBe(true);
    expect(isValidTotalAVs(MAX_AWAKENING_VALUE)).toBe(true);
    expect(isValidTotalAVs(MAX_AWAKENING_VALUE * 6)).toBe(true);
  });

  it('returns false when using invalid total AV values', () => {
    expect(isValidTotalAVs(-1)).toBe(false);
    expect(isValidTotalAVs(MAX_AWAKENING_VALUE * 6 + 1)).toBe(false);
  });

  it('returns true when using valid friendship values', () => {
    expect(isValidAV(MIN_AWAKENING_VALUE)).toBe(true);
    expect(isValidAV(MIN_AWAKENING_VALUE + 1)).toBe(true);
    expect(isValidAV(MAX_AWAKENING_VALUE - 1)).toBe(true);
    expect(isValidAV(MAX_AWAKENING_VALUE)).toBe(true);
  });

  it('returns false when using invalid friendship values', () => {
    expect(isValidAV(MIN_AWAKENING_VALUE - 1)).toBe(false);
    expect(isValidAV(MAX_AWAKENING_VALUE + 1)).toBe(false);
  });
});

describe('when validating Pokémon Friendship formula', () => {
  it('returns true when using valid friendship values', () => {
    expect(isValidFrienshipValue(MIN_FRIENDSHIP_VALUE)).toBe(true);
    expect(isValidFrienshipValue(MIN_FRIENDSHIP_VALUE + 1)).toBe(true);
    expect(isValidFrienshipValue(MAX_FRIENDSHIP_VALUE - 1)).toBe(true);
    expect(isValidFrienshipValue(MAX_FRIENDSHIP_VALUE)).toBe(true);
  });

  it('returns false when using invalid friendship values', () => {
    expect(isValidFrienshipValue(MIN_FRIENDSHIP_VALUE - 1)).toBe(false);
    expect(isValidFrienshipValue(MAX_FRIENDSHIP_VALUE + 1)).toBe(false);
  });
});
