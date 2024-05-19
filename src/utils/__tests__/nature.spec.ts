import { describe, expect, it } from '@jest/globals';
import { PokemonStatId, PokemonStatName } from '../../core';
import { NatureName } from '../../core/constants/nature-name.enum';
import { GetNatureNameParam, getNatureName } from '../nature';

describe('When using getNatureName()', () => {
  it('returns the nature name by PokemonStatId params', () => {
    expect(getNatureName(PokemonStatId.ATTACK, PokemonStatId.ATTACK)).toBe(
      NatureName.HARDY,
    );
    expect(getNatureName(PokemonStatId.ATTACK, PokemonStatId.DEFENSE)).toBe(
      NatureName.LONELY,
    );
    expect(
      getNatureName(PokemonStatId.ATTACK, PokemonStatId.SPECIAL_ATTACK),
    ).toBe(NatureName.ADAMANT);
    expect(
      getNatureName(PokemonStatId.ATTACK, PokemonStatId.SPECIAL_DEFENSE),
    ).toBe(NatureName.NAUGHTY);
    expect(getNatureName(PokemonStatId.ATTACK, PokemonStatId.SPEED)).toBe(
      NatureName.BRAVE,
    );

    expect(getNatureName(PokemonStatId.DEFENSE, PokemonStatId.ATTACK)).toBe(
      NatureName.BOLD,
    );
    expect(getNatureName(PokemonStatId.DEFENSE, PokemonStatId.DEFENSE)).toBe(
      NatureName.DOCILE,
    );
    expect(
      getNatureName(PokemonStatId.DEFENSE, PokemonStatId.SPECIAL_ATTACK),
    ).toBe(NatureName.IMPISH);
    expect(
      getNatureName(PokemonStatId.DEFENSE, PokemonStatId.SPECIAL_DEFENSE),
    ).toBe(NatureName.LAX);
    expect(getNatureName(PokemonStatId.DEFENSE, PokemonStatId.SPEED)).toBe(
      NatureName.RELAXED,
    );

    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.ATTACK),
    ).toBe(NatureName.MODEST);
    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.DEFENSE),
    ).toBe(NatureName.MILD);
    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.SPECIAL_ATTACK),
    ).toBe(NatureName.BASHFUL);
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_ATTACK,
        PokemonStatId.SPECIAL_DEFENSE,
      ),
    ).toBe(NatureName.RASH);
    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.SPEED),
    ).toBe(NatureName.QUIET);

    expect(
      getNatureName(PokemonStatId.SPECIAL_DEFENSE, PokemonStatId.ATTACK),
    ).toBe(NatureName.CALM);
    expect(
      getNatureName(PokemonStatId.SPECIAL_DEFENSE, PokemonStatId.DEFENSE),
    ).toBe(NatureName.GENTLE);
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_DEFENSE,
        PokemonStatId.SPECIAL_ATTACK,
      ),
    ).toBe(NatureName.CAREFUL);
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_DEFENSE,
        PokemonStatId.SPECIAL_DEFENSE,
      ),
    ).toBe(NatureName.QUIRKY);
    expect(
      getNatureName(PokemonStatId.SPECIAL_DEFENSE, PokemonStatId.SPEED),
    ).toBe(NatureName.SASSY);

    expect(getNatureName(PokemonStatId.SPEED, PokemonStatId.ATTACK)).toBe(
      NatureName.TIMID,
    );
    expect(getNatureName(PokemonStatId.SPEED, PokemonStatId.DEFENSE)).toBe(
      NatureName.HASTY,
    );
    expect(
      getNatureName(PokemonStatId.SPEED, PokemonStatId.SPECIAL_ATTACK),
    ).toBe(NatureName.JOLLY);
    expect(
      getNatureName(PokemonStatId.SPEED, PokemonStatId.SPECIAL_DEFENSE),
    ).toBe(NatureName.NAIVE);
    expect(getNatureName(PokemonStatId.SPEED, PokemonStatId.SPEED)).toBe(
      NatureName.SERIOUS,
    );
  });

  it('returns the nature name by PokemonStatName params', () => {
    expect(getNatureName(PokemonStatName.ATTACK, PokemonStatName.ATTACK)).toBe(
      NatureName.HARDY,
    );
    expect(getNatureName(PokemonStatName.ATTACK, PokemonStatName.DEFENSE)).toBe(
      NatureName.LONELY,
    );
    expect(
      getNatureName(PokemonStatName.ATTACK, PokemonStatName.SPECIAL_ATTACK),
    ).toBe(NatureName.ADAMANT);
    expect(
      getNatureName(PokemonStatName.ATTACK, PokemonStatName.SPECIAL_DEFENSE),
    ).toBe(NatureName.NAUGHTY);
    expect(getNatureName(PokemonStatName.ATTACK, PokemonStatName.SPEED)).toBe(
      NatureName.BRAVE,
    );

    expect(getNatureName(PokemonStatName.DEFENSE, PokemonStatName.ATTACK)).toBe(
      NatureName.BOLD,
    );
    expect(
      getNatureName(PokemonStatName.DEFENSE, PokemonStatName.DEFENSE),
    ).toBe(NatureName.DOCILE);
    expect(
      getNatureName(PokemonStatName.DEFENSE, PokemonStatName.SPECIAL_ATTACK),
    ).toBe(NatureName.IMPISH);
    expect(
      getNatureName(PokemonStatName.DEFENSE, PokemonStatName.SPECIAL_DEFENSE),
    ).toBe(NatureName.LAX);
    expect(getNatureName(PokemonStatName.DEFENSE, PokemonStatName.SPEED)).toBe(
      NatureName.RELAXED,
    );

    expect(
      getNatureName(PokemonStatName.SPECIAL_ATTACK, PokemonStatName.ATTACK),
    ).toBe(NatureName.MODEST);
    expect(
      getNatureName(PokemonStatName.SPECIAL_ATTACK, PokemonStatName.DEFENSE),
    ).toBe(NatureName.MILD);
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_ATTACK,
        PokemonStatName.SPECIAL_ATTACK,
      ),
    ).toBe(NatureName.BASHFUL);
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_ATTACK,
        PokemonStatName.SPECIAL_DEFENSE,
      ),
    ).toBe(NatureName.RASH);
    expect(
      getNatureName(PokemonStatName.SPECIAL_ATTACK, PokemonStatName.SPEED),
    ).toBe(NatureName.QUIET);

    expect(
      getNatureName(PokemonStatName.SPECIAL_DEFENSE, PokemonStatName.ATTACK),
    ).toBe(NatureName.CALM);
    expect(
      getNatureName(PokemonStatName.SPECIAL_DEFENSE, PokemonStatName.DEFENSE),
    ).toBe(NatureName.GENTLE);
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_DEFENSE,
        PokemonStatName.SPECIAL_ATTACK,
      ),
    ).toBe(NatureName.CAREFUL);
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_DEFENSE,
        PokemonStatName.SPECIAL_DEFENSE,
      ),
    ).toBe(NatureName.QUIRKY);
    expect(
      getNatureName(PokemonStatName.SPECIAL_DEFENSE, PokemonStatName.SPEED),
    ).toBe(NatureName.SASSY);

    expect(getNatureName(PokemonStatName.SPEED, PokemonStatName.ATTACK)).toBe(
      NatureName.TIMID,
    );
    expect(getNatureName(PokemonStatName.SPEED, PokemonStatName.DEFENSE)).toBe(
      NatureName.HASTY,
    );
    expect(
      getNatureName(PokemonStatName.SPEED, PokemonStatName.SPECIAL_ATTACK),
    ).toBe(NatureName.JOLLY);
    expect(
      getNatureName(PokemonStatName.SPEED, PokemonStatName.SPECIAL_DEFENSE),
    ).toBe(NatureName.NAIVE);
    expect(getNatureName(PokemonStatName.SPEED, PokemonStatName.SPEED)).toBe(
      NatureName.SERIOUS,
    );
  });

  it("returns null when params aren't correct PokemonStatId enum values", () => {
    expect(
      getNatureName(
        PokemonStatId.ATTACK,
        PokemonStatId.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatId.DEFENSE,
        PokemonStatId.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_ATTACK,
        PokemonStatId.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_DEFENSE,
        PokemonStatId.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatId.SPEED,
        PokemonStatId.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatId.HP as GetNatureNameParam,
        PokemonStatId.HP as GetNatureNameParam,
      ),
    ).toBe(null);
  });

  it("returns null when params aren't correct PokemonStatName enum values", () => {
    expect(
      getNatureName(
        PokemonStatName.ATTACK,
        PokemonStatName.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatName.DEFENSE,
        PokemonStatName.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_ATTACK,
        PokemonStatName.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_DEFENSE,
        PokemonStatName.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatName.SPEED,
        PokemonStatName.HP as GetNatureNameParam,
      ),
    ).toBe(null);
    expect(
      getNatureName(
        PokemonStatName.HP as GetNatureNameParam,
        PokemonStatName.HP as GetNatureNameParam,
      ),
    ).toBe(null);
  });
});
