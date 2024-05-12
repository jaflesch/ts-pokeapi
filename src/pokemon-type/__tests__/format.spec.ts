import { describe, expect, it, beforeAll } from '@jest/globals';
import { Pokemon, getResourceIdFromURL } from '../../core';
import { PokemonTypeName, PokemonTypesArrayIndex } from '../constants';
import {
  format,
  formatTypeNameToId,
  formatTypeIdToName,
  formatTypeIdToIndex,
  formatTypeIndexToId,
  formatTypeIndexToName,
  formatTypeNameToIndex,
} from '../format';

describe('when formatting PokéAPI Pokémon Type resource id', () => {
  let typeId = 0;
  beforeAll(async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const pokemon: Pokemon = await resp.json();
    const type = pokemon.types[0].type.url;
    typeId = getResourceIdFromURL(type);
  });

  it('returns the Pokémon type name from given id', () => {
    expect(format.id2name(typeId)).toBe(PokemonTypeName.ELECTRIC);
    expect(formatTypeIdToName(typeId)).toBe(PokemonTypeName.ELECTRIC);
  });

  it('returns the Pokémon Type Chart Matrix index from given id', () => {
    expect(format.id2index(typeId)).toBe(PokemonTypesArrayIndex.ELECTRIC);
    expect(formatTypeIdToIndex(typeId)).toBe(PokemonTypesArrayIndex.ELECTRIC);
  });
});

describe('when formatting Pokémon Type name', () => {
  let typeId = 0;
  beforeAll(async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/psyduck');
    const pokemon: Pokemon = await resp.json();
    const type = pokemon.types[0].type.url;
    typeId = getResourceIdFromURL(type);
  });

  it('returns the PokéAPI Pokémon Type resource id from given name', () => {
    expect(format.name2id(PokemonTypeName.WATER)).toBe(typeId);
    expect(formatTypeNameToId(PokemonTypeName.WATER)).toBe(typeId);
  });

  it('returns the Pokémon Type Chart Matrix index from given name', () => {
    expect(format.name2index(PokemonTypeName.WATER)).toBe(
      PokemonTypesArrayIndex.WATER,
    );
    expect(formatTypeNameToIndex(PokemonTypeName.WATER)).toBe(
      PokemonTypesArrayIndex.WATER,
    );
  });
});

describe('when formatting Pokémon Type Chart Matrix index', () => {
  let typeId = 0;
  beforeAll(async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/togepi');
    const pokemon: Pokemon = await resp.json();
    const type = pokemon.types[0].type.url;
    typeId = getResourceIdFromURL(type);
  });

  it('returns the PokéAPI Pokémon Type resource id from given index', () => {
    expect(format.index2id(PokemonTypesArrayIndex.FAIRY)).toBe(typeId);
    expect(formatTypeIndexToId(PokemonTypesArrayIndex.FAIRY)).toBe(typeId);
  });

  it('returns the Pokémon Type name from given index', () => {
    expect(format.index2name(PokemonTypesArrayIndex.FAIRY)).toBe(
      PokemonTypeName.FAIRY,
    );
    expect(formatTypeIndexToName(PokemonTypesArrayIndex.FAIRY)).toBe(
      PokemonTypeName.FAIRY,
    );
  });
});
