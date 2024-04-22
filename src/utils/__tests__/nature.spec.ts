import { describe, expect, it } from '@jest/globals';
import { PokemonStatId, PokemonStatName } from '../../core';
import { getNatureName } from '../nature';

describe('When using getNatureName()', () => {
  it('returns the nature name by PokemonStatId params', () => {
    expect(getNatureName(PokemonStatId.ATTACK, PokemonStatId.ATTACK)).toBe(
      'Hardy',
    );
    expect(getNatureName(PokemonStatId.ATTACK, PokemonStatId.DEFENSE)).toBe(
      'Lonely',
    );
    expect(
      getNatureName(PokemonStatId.ATTACK, PokemonStatId.SPECIAL_ATTACK),
    ).toBe('Adamant');
    expect(
      getNatureName(PokemonStatId.ATTACK, PokemonStatId.SPECIAL_DEFENSE),
    ).toBe('Naughty');
    expect(getNatureName(PokemonStatId.ATTACK, PokemonStatId.SPEED)).toBe(
      'Brave',
    );

    expect(getNatureName(PokemonStatId.DEFENSE, PokemonStatId.ATTACK)).toBe(
      'Bold',
    );
    expect(getNatureName(PokemonStatId.DEFENSE, PokemonStatId.DEFENSE)).toBe(
      'Docile',
    );
    expect(
      getNatureName(PokemonStatId.DEFENSE, PokemonStatId.SPECIAL_ATTACK),
    ).toBe('Impish');
    expect(
      getNatureName(PokemonStatId.DEFENSE, PokemonStatId.SPECIAL_DEFENSE),
    ).toBe('Lax');
    expect(getNatureName(PokemonStatId.DEFENSE, PokemonStatId.SPEED)).toBe(
      'Relaxed',
    );

    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.ATTACK),
    ).toBe('Modest');
    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.DEFENSE),
    ).toBe('Mild');
    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.SPECIAL_ATTACK),
    ).toBe('Bashful');
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_ATTACK,
        PokemonStatId.SPECIAL_DEFENSE,
      ),
    ).toBe('Rash');
    expect(
      getNatureName(PokemonStatId.SPECIAL_ATTACK, PokemonStatId.SPEED),
    ).toBe('Quiet');

    expect(
      getNatureName(PokemonStatId.SPECIAL_DEFENSE, PokemonStatId.ATTACK),
    ).toBe('Calm');
    expect(
      getNatureName(PokemonStatId.SPECIAL_DEFENSE, PokemonStatId.DEFENSE),
    ).toBe('Gentle');
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_DEFENSE,
        PokemonStatId.SPECIAL_ATTACK,
      ),
    ).toBe('Careful');
    expect(
      getNatureName(
        PokemonStatId.SPECIAL_DEFENSE,
        PokemonStatId.SPECIAL_DEFENSE,
      ),
    ).toBe('Quirky');
    expect(
      getNatureName(PokemonStatId.SPECIAL_DEFENSE, PokemonStatId.SPEED),
    ).toBe('Sassy');

    expect(getNatureName(PokemonStatId.SPEED, PokemonStatId.ATTACK)).toBe(
      'Timid',
    );
    expect(getNatureName(PokemonStatId.SPEED, PokemonStatId.DEFENSE)).toBe(
      'Hasty',
    );
    expect(
      getNatureName(PokemonStatId.SPEED, PokemonStatId.SPECIAL_ATTACK),
    ).toBe('Jolly');
    expect(
      getNatureName(PokemonStatId.SPEED, PokemonStatId.SPECIAL_DEFENSE),
    ).toBe('Naive');
    expect(getNatureName(PokemonStatId.SPEED, PokemonStatId.SPEED)).toBe(
      'Serious',
    );
  });

  it('returns the nature name by PokemonStatName params', () => {
    expect(getNatureName(PokemonStatName.ATTACK, PokemonStatName.ATTACK)).toBe(
      'Hardy',
    );
    expect(getNatureName(PokemonStatName.ATTACK, PokemonStatName.DEFENSE)).toBe(
      'Lonely',
    );
    expect(
      getNatureName(PokemonStatName.ATTACK, PokemonStatName.SPECIAL_ATTACK),
    ).toBe('Adamant');
    expect(
      getNatureName(PokemonStatName.ATTACK, PokemonStatName.SPECIAL_DEFENSE),
    ).toBe('Naughty');
    expect(getNatureName(PokemonStatName.ATTACK, PokemonStatName.SPEED)).toBe(
      'Brave',
    );

    expect(getNatureName(PokemonStatName.DEFENSE, PokemonStatName.ATTACK)).toBe(
      'Bold',
    );
    expect(
      getNatureName(PokemonStatName.DEFENSE, PokemonStatName.DEFENSE),
    ).toBe('Docile');
    expect(
      getNatureName(PokemonStatName.DEFENSE, PokemonStatName.SPECIAL_ATTACK),
    ).toBe('Impish');
    expect(
      getNatureName(PokemonStatName.DEFENSE, PokemonStatName.SPECIAL_DEFENSE),
    ).toBe('Lax');
    expect(getNatureName(PokemonStatName.DEFENSE, PokemonStatName.SPEED)).toBe(
      'Relaxed',
    );

    expect(
      getNatureName(PokemonStatName.SPECIAL_ATTACK, PokemonStatName.ATTACK),
    ).toBe('Modest');
    expect(
      getNatureName(PokemonStatName.SPECIAL_ATTACK, PokemonStatName.DEFENSE),
    ).toBe('Mild');
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_ATTACK,
        PokemonStatName.SPECIAL_ATTACK,
      ),
    ).toBe('Bashful');
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_ATTACK,
        PokemonStatName.SPECIAL_DEFENSE,
      ),
    ).toBe('Rash');
    expect(
      getNatureName(PokemonStatName.SPECIAL_ATTACK, PokemonStatName.SPEED),
    ).toBe('Quiet');

    expect(
      getNatureName(PokemonStatName.SPECIAL_DEFENSE, PokemonStatName.ATTACK),
    ).toBe('Calm');
    expect(
      getNatureName(PokemonStatName.SPECIAL_DEFENSE, PokemonStatName.DEFENSE),
    ).toBe('Gentle');
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_DEFENSE,
        PokemonStatName.SPECIAL_ATTACK,
      ),
    ).toBe('Careful');
    expect(
      getNatureName(
        PokemonStatName.SPECIAL_DEFENSE,
        PokemonStatName.SPECIAL_DEFENSE,
      ),
    ).toBe('Quirky');
    expect(
      getNatureName(PokemonStatName.SPECIAL_DEFENSE, PokemonStatName.SPEED),
    ).toBe('Sassy');

    expect(getNatureName(PokemonStatName.SPEED, PokemonStatName.ATTACK)).toBe(
      'Timid',
    );
    expect(getNatureName(PokemonStatName.SPEED, PokemonStatName.DEFENSE)).toBe(
      'Hasty',
    );
    expect(
      getNatureName(PokemonStatName.SPEED, PokemonStatName.SPECIAL_ATTACK),
    ).toBe('Jolly');
    expect(
      getNatureName(PokemonStatName.SPEED, PokemonStatName.SPECIAL_DEFENSE),
    ).toBe('Naive');
    expect(getNatureName(PokemonStatName.SPEED, PokemonStatName.SPEED)).toBe(
      'Serious',
    );
  });
});
