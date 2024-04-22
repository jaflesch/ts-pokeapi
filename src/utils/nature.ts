import { PokemonStatId, PokemonStatName } from '../core';

type GetNatureNameParam =
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
      return 'Hardy';
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return 'Lonely';
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return 'Adamant';
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return 'Naughty';
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return 'Brave';
    }
  } else if (
    increase === PokemonStatId.DEFENSE ||
    increase === PokemonStatName.DEFENSE
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return 'Bold';
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return 'Docile';
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return 'Impish';
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return 'Lax';
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return 'Relaxed';
    }
  } else if (
    increase === PokemonStatId.SPECIAL_ATTACK ||
    increase === PokemonStatName.SPECIAL_ATTACK
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return 'Modest';
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return 'Mild';
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return 'Bashful';
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return 'Rash';
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return 'Quiet';
    }
  } else if (
    increase === PokemonStatId.SPECIAL_DEFENSE ||
    increase === PokemonStatName.SPECIAL_DEFENSE
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return 'Calm';
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return 'Gentle';
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return 'Careful';
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return 'Quirky';
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return 'Sassy';
    }
  } else if (
    increase === PokemonStatId.SPEED ||
    increase === PokemonStatName.SPEED
  ) {
    if (
      decrease === PokemonStatId.ATTACK ||
      decrease === PokemonStatName.ATTACK
    ) {
      return 'Timid';
    } else if (
      decrease === PokemonStatId.DEFENSE ||
      decrease === PokemonStatName.DEFENSE
    ) {
      return 'Hasty';
    } else if (
      decrease === PokemonStatId.SPECIAL_ATTACK ||
      decrease === PokemonStatName.SPECIAL_ATTACK
    ) {
      return 'Jolly';
    } else if (
      decrease === PokemonStatId.SPECIAL_DEFENSE ||
      decrease === PokemonStatName.SPECIAL_DEFENSE
    ) {
      return 'Naive';
    } else if (
      decrease === PokemonStatId.SPEED ||
      decrease === PokemonStatName.SPEED
    ) {
      return 'Serious';
    }
  }
};
