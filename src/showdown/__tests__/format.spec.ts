import { describe, expect, it } from '@jest/globals';
import { NatureName, pokeapi } from '../../core';
import { PokemonTypeName } from '../../pokemon-type';
import { format } from '../format';

describe('when using showdown format() for Name', () => {
  const pokemon = format({
    pokemon: 'Pikachu',
    moves: ['Thunderbolt'],
  });

  it('should return a string with Pikachu as Pokémon name', () => {
    expect(pokemon).toContain('Pikachu');
  });

  it('should return a string with Pikachu as Pokémon name', async () => {
    const pokemon = await pokeapi('pokemon-species').get('pikachu');
    const text = format({
      pokemon,
      moves: ['Thunderbolt'],
    });
    expect(text).toContain('Pikachu');
  });
});

describe('when using showdown format() for Moves', () => {
  it('should return only one move', async () => {
    const pokemon = await pokeapi('pokemon-species').get('pikachu');
    const text = format({
      pokemon,
      moves: ['Thunderbolt'],
    });
    const split = text.split('-').length - 1;
    expect(split).toBe(1);
  });

  it('should return four moves', async () => {
    const pokemon = await pokeapi('pokemon-species').get('pikachu');
    const text = format({
      pokemon,
      moves: ['Thunderbolt', 'Thunder Wave', 'Nasty Plot', 'Charm'],
    });
    const split = text.split('-').length - 1;
    expect(split).toBe(4);
  });
});

describe('when using showdown format() for Nickname', () => {
  it('should countain the chosen Pokémon nickname', async () => {
    const pokemon = await pokeapi('pokemon-species').get('pikachu');
    const text = format({
      pokemon,
      nickname: 'Foo',
      moves: ['Thunder'],
    });
    expect(text).toContain('Foo');
    expect(text).toContain('(Pikachu)');
  });
});

describe('when using showdown format() for Gender', () => {
  const request = pokeapi('pokemon-species').get('pikachu');
  it('should countain the male symbol', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      gender: 'male',
      moves: ['Thunder'],
    });
    expect(text).toContain('(M)');
  });

  it('should countain the female symbol', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      gender: 'female',
      moves: ['Thunder'],
    });
    expect(text).toContain('(F)');
  });

  it('should not countain the any gender symbol if genderless', async () => {
    const pokemon = await pokeapi('pokemon-species').get('mewtwo');
    const text = format({
      pokemon,
      gender: 'genderless',
      moves: ['Psytrike'],
    });
    expect(text).not.toContain('(M)');
    expect(text).not.toContain('(F)');
  });

  it('should not countain the any gender symbol if not data provided', async () => {
    const pokemon = await pokeapi('pokemon-species').get('pikachu');
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('(M)');
    expect(text).not.toContain('(F)');
  });
});

describe('when using showdown format() for Items', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the chosen item if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
      item: 'Light Ball',
    });
    expect(text).toContain('@ Light Ball');
  });
  it('should not countain any item if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('@');
  });
});

describe('when using showdown format() for Abilities', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the chosen ability if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
      ability: 'Static',
    });
    expect(text).toContain('Ability: Static');
  });
  it('should not countain any ability if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('Ability: Static');
  });
});

describe('when using showdown format() for Levels', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the chosen level if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      level: 15,
      moves: ['Thunder'],
    });
    expect(text).toContain('Level: 15');
  });
  it('should default to fallback level value if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).toContain('Level: 100');
  });
});

describe('when using showdown format() for Shiny Pokémon', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the shiny information if data provided', async () => {
    const pokemon = await request;
    const textShiny = format({
      pokemon,
      shiny: true,
      moves: ['Thunder'],
    });
    expect(textShiny).toContain('Shiny: Yes');

    const textNoShiny = format({
      pokemon,
      shiny: false,
      moves: ['Thunder'],
    });
    expect(textNoShiny).toContain('Shiny: No');
  });
  it('should not countain any shiny information if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('Shiny');
  });
});

describe('when using showdown format() for Happiness', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the happiness information if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      happiness: 128,
      moves: ['Thunder'],
    });
    expect(text).toContain('Happiness: 128');
  });

  it('should not countain any happiness information if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('Happiness');
  });
});

describe('when using showdown format() for Tera type', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the tera type information if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      happiness: 128,
      tera: PokemonTypeName.WATER,
      moves: ['Thunder'],
    });
    expect(text).toContain(`Tera Type: ${PokemonTypeName.WATER}`);
  });

  it('should not countain any tera type information if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('Tera Type:');
  });
});

describe('when using showdown format() for Nature', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the nature information if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      nature: NatureName.TIMID,
      moves: ['Thunder'],
    });
    expect(text).toContain(`${NatureName.TIMID} Nature`);
  });

  it('should not countain any nature information if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('Nature');
  });
});

describe('when using showdown format() for EVs', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the EVs information for HP if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      evs: {
        hp: 4,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`4 HP`);
  });

  it('should countain the EVs information for Attack if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      evs: {
        attack: 120,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`120 Atk`);
  });

  it('should countain the EVs information for Defense if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      evs: {
        defense: 16,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`16 Def`);
  });

  it('should countain the EVs information for Special Attack if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      evs: {
        specialAttack: 200,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`200 SpA`);
  });

  it('should countain the EVs information for Special Defense if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      evs: {
        specialDefense: 8,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`8 SpD`);
  });

  it('should countain the EVs information for Speed if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      evs: {
        speed: 252,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`252 Spe`);
  });

  it('should countain the EVs spread if multiple data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      evs: {
        hp: 4,
        specialAttack: 252,
        speed: 252,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`EVs: 4 HP / 252 SpA / 252 Spe`);
  });

  it('should not countain any EVs information if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('EVs:');
  });
});

describe('when using showdown format() for EVs', () => {
  const request = pokeapi('pokemon-species').get('pikachu');

  it('should countain the IVs information for HP if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      ivs: {
        hp: 3,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`3 HP`);
  });

  it('should countain the IVs information for Attack if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      ivs: {
        attack: 10,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`10 Atk`);
  });

  it('should countain the IVs information for Defense if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      ivs: {
        defense: 16,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`16 Def`);
  });

  it('should countain the IVs information for Special Attack if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      ivs: {
        specialAttack: 30,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`30 SpA`);
  });

  it('should countain the IVs information for Special Defense if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      ivs: {
        specialDefense: 4,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`4 SpD`);
  });

  it('should countain the IVs information for Speed if data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      ivs: {
        speed: 0,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`0 Spe`);
  });

  it('should countain the EVs spread if multiple data provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      ivs: {
        hp: 0,
        defense: 0,
        specialDefense: 0,
      },
      moves: ['Thunder'],
    });
    expect(text).toContain(`IVs: 0 HP / 0 Def / 0 SpD`);
  });

  it('should not countain any IVs information if data not provided', async () => {
    const pokemon = await request;
    const text = format({
      pokemon,
      moves: ['Thunder'],
    });
    expect(text).not.toContain('IVs:');
  });
});
