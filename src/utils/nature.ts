import { NatureName, PokemonStatId, PokemonStatName } from '../core';

export type GetNatureNameParam =
  | PokemonStatId.ATTACK
  | PokemonStatId.DEFENSE
  | PokemonStatId.SPECIAL_ATTACK
  | PokemonStatId.SPECIAL_DEFENSE
  | PokemonStatId.SPEED
  | PokemonStatName.ATTACK
  | PokemonStatName.DEFENSE
  | PokemonStatName.SPECIAL_ATTACK
  | PokemonStatName.SPECIAL_DEFENSE
  | PokemonStatName.SPEED;

/**
 * Returns Pokémon Nature regarding increased and decreased stats. Valid stats are only Attack, Defense, Special Attack, Special Defense, and Speed.
 * @param { PokemonStatId | PokemonStatName} increase - Increased stat of nature.
 * @param { PokemonStatId | PokemonStatName} decrease - Decreased stat of nature.
 * @returns {NatureName} Nature name.
 */
export const getNatureName = (
  increase: GetNatureNameParam,
  decrease: GetNatureNameParam,
) => {
  if (
    increase === PokemonStatId.ATTACK ||
    increase === PokemonStatName.ATTACK
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return NatureName.HARDY;
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return NatureName.LONELY;
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return NatureName.ADAMANT;
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return NatureName.NAUGHTY;
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return NatureName.BRAVE;
    } else return null;
  } else if (
    increase === PokemonStatId.DEFENSE ||
    increase === PokemonStatName.DEFENSE
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return NatureName.BOLD;
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return NatureName.DOCILE;
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return NatureName.IMPISH;
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return NatureName.LAX;
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return NatureName.RELAXED;
    } else return null;
  } else if (
    increase === PokemonStatId.SPECIAL_ATTACK ||
    increase === PokemonStatName.SPECIAL_ATTACK
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return NatureName.MODEST;
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return NatureName.MILD;
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return NatureName.BASHFUL;
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return NatureName.RASH;
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return NatureName.QUIET;
    } else return null;
  } else if (
    increase === PokemonStatId.SPECIAL_DEFENSE ||
    increase === PokemonStatName.SPECIAL_DEFENSE
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return NatureName.CALM;
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return NatureName.GENTLE;
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return NatureName.CAREFUL;
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return NatureName.QUIRKY;
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return NatureName.SASSY;
    } else return null;
  } else if (
    increase === PokemonStatId.SPEED ||
    increase === PokemonStatName.SPEED
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return NatureName.TIMID;
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return NatureName.HASTY;
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return NatureName.JOLLY;
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return NatureName.NAIVE;
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return NatureName.SERIOUS;
    } else return null;
  } else return null;
};
