import { NatureName, PokemonSpecie } from '../core';
import { PokemonTypeName } from '../pokemon-type';

interface FormatParams {
  pokemon: string | PokemonSpecie;
  level?: number;
  gender?: 'male' | 'female' | 'genderless';
  happiness?: number;
  shiny?: boolean;
  tera?: PokemonTypeName;
  nickname?: string;
  item?: string;
  ability?: string;
  moves: [string, string?, string?, string?];
  nature?: NatureName;
  ivs?: {
    hp?: number;
    attack?: number;
    defense?: number;
    specialAttack?: number;
    specialDefense?: number;
    speed?: number;
  };
  evs?: {
    hp?: number;
    attack?: number;
    defense?: number;
    specialAttack?: number;
    specialDefense?: number;
    speed?: number;
  };
}

export const format = ({
  pokemon,
  level = 100,
  shiny,
  gender,
  ivs,
  evs,
  tera,
  item,
  moves,
  nature,
  ability,
  nickname,
  happiness,
}: FormatParams) => {
  let formatedText = '';
  let pokemonName = '';
  if (typeof pokemon === 'object') {
    pokemonName =
      pokemon.names.find((n) => n.language.name === 'en')?.name ??
      pokemon.names[0].name;
  } else {
    pokemonName = pokemon;
  }

  if (nickname) {
    formatedText += `${nickname} (${pokemonName})`;
  } else {
    formatedText += pokemonName;
  }

  if (gender && gender !== 'genderless') {
    formatedText += ` (${gender === 'male' ? 'M' : 'F'})`;
  }
  if (item) {
    formatedText += ` @ ${item}`;
  }

  if (ability) {
    formatedText += `\nAbility: ${ability}`;
  }

  if (level) {
    formatedText += `\nLevel: ${level}`;
  }

  if (shiny !== undefined) {
    formatedText += `\nShiny: ${shiny === true ? 'Yes' : 'No'}`;
  }
  if (happiness) {
    formatedText += `\nHappiness: ${happiness}`;
  }
  if (tera) {
    formatedText += `\nTera Type: ${tera}`;
  }

  const formatedEvs: string[] = [];
  if (evs) {
    if (evs.hp !== undefined) {
      formatedEvs.push(`${evs.hp} HP`);
    }
    if (evs.attack !== undefined) {
      formatedEvs.push(`${evs.attack} Atk`);
    }
    if (evs.defense !== undefined) {
      formatedEvs.push(`${evs.defense} Def`);
    }
    if (evs.specialAttack !== undefined) {
      formatedEvs.push(`${evs.specialAttack} SpA`);
    }
    if (evs.specialDefense !== undefined) {
      formatedEvs.push(`${evs.specialDefense} SpD`);
    }
    if (evs.speed !== undefined) {
      formatedEvs.push(`${evs.speed} Spe`);
    }
  }
  if (formatedEvs.length > 0) {
    formatedText += `\nEVs: ${formatedEvs.join(' / ')}`;
  }

  if (nature) {
    formatedText = `\n${nature} Nature`;
  }

  const formatedIvs: string[] = [];
  if (ivs) {
    if (ivs.hp !== undefined) {
      formatedIvs.push(`${ivs.hp} HP`);
    }
    if (ivs.attack !== undefined) {
      formatedIvs.push(`${ivs.attack} Atk`);
    }
    if (ivs.defense !== undefined) {
      formatedIvs.push(`${ivs.defense} Def`);
    }
    if (ivs.specialAttack !== undefined) {
      formatedIvs.push(`${ivs.specialAttack} SpA`);
    }
    if (ivs.specialDefense !== undefined) {
      formatedIvs.push(`${ivs.specialDefense} SpD`);
    }
    if (ivs.speed !== undefined) {
      formatedIvs.push(`${ivs.speed} Spe`);
    }
  }
  if (formatedIvs.length > 0) {
    formatedText += `\nIVs: ${formatedIvs.join(' / ')}`;
  }

  formatedText += `\n${moves.map((move) => `- ${move}`).join('\n')}`;

  return formatedText;
};
