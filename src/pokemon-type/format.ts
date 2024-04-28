import { PokemonTypeId } from '../core';
import { PokemonTypeName, PokemonTypesArrayIndex } from './constants';

export const formatTypeIdToTypeIndex = (
  typeId: PokemonTypeId,
): PokemonTypesArrayIndex => {
  const typeMap = {
    [PokemonTypeId.BUG]: PokemonTypesArrayIndex.BUG,
    [PokemonTypeId.DARK]: PokemonTypesArrayIndex.DARK,
    [PokemonTypeId.DRAGON]: PokemonTypesArrayIndex.DRAGON,
    [PokemonTypeId.ELECTRIC]: PokemonTypesArrayIndex.ELECTRIC,
    [PokemonTypeId.FAIRY]: PokemonTypesArrayIndex.FAIRY,
    [PokemonTypeId.FIGHTING]: PokemonTypesArrayIndex.FIGHTING,
    [PokemonTypeId.FIRE]: PokemonTypesArrayIndex.FIRE,
    [PokemonTypeId.FLYING]: PokemonTypesArrayIndex.FLYING,
    [PokemonTypeId.GHOST]: PokemonTypesArrayIndex.GHOST,
    [PokemonTypeId.GRASS]: PokemonTypesArrayIndex.GRASS,
    [PokemonTypeId.GROUND]: PokemonTypesArrayIndex.GROUND,
    [PokemonTypeId.ICE]: PokemonTypesArrayIndex.ICE,
    [PokemonTypeId.NORMAL]: PokemonTypesArrayIndex.NORMAL,
    [PokemonTypeId.POISON]: PokemonTypesArrayIndex.POISON,
    [PokemonTypeId.PSYCHIC]: PokemonTypesArrayIndex.PSYCHIC,
    [PokemonTypeId.ROCK]: PokemonTypesArrayIndex.ROCK,
    [PokemonTypeId.STEEL]: PokemonTypesArrayIndex.STEEL,
    [PokemonTypeId.WATER]: PokemonTypesArrayIndex.WATER,
    //
    [PokemonTypeId.SHADOW]: PokemonTypesArrayIndex.NORMAL,
    [PokemonTypeId.UNKNOWN]: PokemonTypesArrayIndex.NORMAL,
  };

  return typeMap[typeId];
};

export const formatTypeIndexToTypeId = (
  typeIndex: PokemonTypesArrayIndex,
): PokemonTypeId => {
  const typeMap = {
    [PokemonTypesArrayIndex.BUG]: PokemonTypeId.BUG,
    [PokemonTypesArrayIndex.DARK]: PokemonTypeId.DARK,
    [PokemonTypesArrayIndex.DRAGON]: PokemonTypeId.DRAGON,
    [PokemonTypesArrayIndex.ELECTRIC]: PokemonTypeId.ELECTRIC,
    [PokemonTypesArrayIndex.FAIRY]: PokemonTypeId.FAIRY,
    [PokemonTypesArrayIndex.FIGHTING]: PokemonTypeId.FIGHTING,
    [PokemonTypesArrayIndex.FIRE]: PokemonTypeId.FIRE,
    [PokemonTypesArrayIndex.FLYING]: PokemonTypeId.FLYING,
    [PokemonTypesArrayIndex.GHOST]: PokemonTypeId.GHOST,
    [PokemonTypesArrayIndex.GRASS]: PokemonTypeId.GRASS,
    [PokemonTypesArrayIndex.GROUND]: PokemonTypeId.GROUND,
    [PokemonTypesArrayIndex.ICE]: PokemonTypeId.ICE,
    [PokemonTypesArrayIndex.NORMAL]: PokemonTypeId.NORMAL,
    [PokemonTypesArrayIndex.POISON]: PokemonTypeId.POISON,
    [PokemonTypesArrayIndex.PSYCHIC]: PokemonTypeId.PSYCHIC,
    [PokemonTypesArrayIndex.ROCK]: PokemonTypeId.ROCK,
    [PokemonTypesArrayIndex.STEEL]: PokemonTypeId.STEEL,
    [PokemonTypesArrayIndex.WATER]: PokemonTypeId.WATER,
    //
    // [PokemonTypesArrayIndex.SHADOW]: PokemonTypeId.NORMAL,
    // [PokemonTypesArrayIndex.UNKNOWN]: PokemonTypeId.NORMAL,
  };

  return typeMap[typeIndex];
};

export const formatTypeIndexToName = (typeIndex: PokemonTypesArrayIndex) => {
  const typeMap = {
    [PokemonTypesArrayIndex.NORMAL]: PokemonTypeName.NORMAL,
    [PokemonTypesArrayIndex.FIRE]: PokemonTypeName.FIRE,
    [PokemonTypesArrayIndex.WATER]: PokemonTypeName.WATER,
    [PokemonTypesArrayIndex.ELECTRIC]: PokemonTypeName.ELECTRIC,
    [PokemonTypesArrayIndex.GRASS]: PokemonTypeName.GRASS,
    [PokemonTypesArrayIndex.ICE]: PokemonTypeName.ICE,
    [PokemonTypesArrayIndex.FIGHTING]: PokemonTypeName.FIGHTING,
    [PokemonTypesArrayIndex.POISON]: PokemonTypeName.POISON,
    [PokemonTypesArrayIndex.GROUND]: PokemonTypeName.GROUND,
    [PokemonTypesArrayIndex.FLYING]: PokemonTypeName.FLYING,
    [PokemonTypesArrayIndex.PSYCHIC]: PokemonTypeName.PSYCHIC,
    [PokemonTypesArrayIndex.BUG]: PokemonTypeName.BUG,
    [PokemonTypesArrayIndex.ROCK]: PokemonTypeName.ROCK,
    [PokemonTypesArrayIndex.GHOST]: PokemonTypeName.GHOST,
    [PokemonTypesArrayIndex.DRAGON]: PokemonTypeName.DRAGON,
    [PokemonTypesArrayIndex.DARK]: PokemonTypeName.DARK,
    [PokemonTypesArrayIndex.STEEL]: PokemonTypeName.STEEL,
    [PokemonTypesArrayIndex.FAIRY]: PokemonTypeName.FAIRY,
  };

  return typeMap[typeIndex];
};

export const formatTypeNameToIndex = (
  typeName: keyof typeof PokemonTypesArrayIndex,
) => {
  const typeMap = {
    NORMAL: PokemonTypesArrayIndex.NORMAL,
    FIRE: PokemonTypesArrayIndex.FIRE,
    WATER: PokemonTypesArrayIndex.WATER,
    ELECTRIC: PokemonTypesArrayIndex.ELECTRIC,
    GRASS: PokemonTypesArrayIndex.GRASS,
    ICE: PokemonTypesArrayIndex.ICE,
    FIGHTING: PokemonTypesArrayIndex.FIGHTING,
    POISON: PokemonTypesArrayIndex.POISON,
    GROUND: PokemonTypesArrayIndex.GROUND,
    FLYING: PokemonTypesArrayIndex.FLYING,
    PSYCHIC: PokemonTypesArrayIndex.PSYCHIC,
    BUG: PokemonTypesArrayIndex.BUG,
    ROCK: PokemonTypesArrayIndex.ROCK,
    GHOST: PokemonTypesArrayIndex.GHOST,
    DRAGON: PokemonTypesArrayIndex.DRAGON,
    DARK: PokemonTypesArrayIndex.DARK,
    STEEL: PokemonTypesArrayIndex.STEEL,
    FAIRY: PokemonTypesArrayIndex.FAIRY,
  };

  return typeMap[typeName];
};

export const formatTypeNameToId = (typeName: keyof typeof PokemonTypeId) => {
  const typeMap = {
    NORMAL: PokemonTypeId.NORMAL,
    FIRE: PokemonTypeId.FIRE,
    WATER: PokemonTypeId.WATER,
    ELECTRIC: PokemonTypeId.ELECTRIC,
    GRASS: PokemonTypeId.GRASS,
    ICE: PokemonTypeId.ICE,
    FIGHTING: PokemonTypeId.FIGHTING,
    POISON: PokemonTypeId.POISON,
    GROUND: PokemonTypeId.GROUND,
    FLYING: PokemonTypeId.FLYING,
    PSYCHIC: PokemonTypeId.PSYCHIC,
    BUG: PokemonTypeId.BUG,
    ROCK: PokemonTypeId.ROCK,
    GHOST: PokemonTypeId.GHOST,
    DRAGON: PokemonTypeId.DRAGON,
    DARK: PokemonTypeId.DARK,
    STEEL: PokemonTypeId.STEEL,
    FAIRY: PokemonTypeId.FAIRY,
    UNKNOWN: PokemonTypeId.UNKNOWN,
    SHADOW: PokemonTypeId.SHADOW,
  };

  return typeMap[typeName];
};

export const formatTypeIdToName = (typeId: PokemonTypeId) => {
  const typeMap = {
    [PokemonTypeId.NORMAL]: PokemonTypeName.NORMAL,
    [PokemonTypeId.FIRE]: PokemonTypeName.FIRE,
    [PokemonTypeId.WATER]: PokemonTypeName.WATER,
    [PokemonTypeId.ELECTRIC]: PokemonTypeName.ELECTRIC,
    [PokemonTypeId.GRASS]: PokemonTypeName.GRASS,
    [PokemonTypeId.ICE]: PokemonTypeName.ICE,
    [PokemonTypeId.FIGHTING]: PokemonTypeName.FIGHTING,
    [PokemonTypeId.POISON]: PokemonTypeName.POISON,
    [PokemonTypeId.GROUND]: PokemonTypeName.GROUND,
    [PokemonTypeId.FLYING]: PokemonTypeName.FLYING,
    [PokemonTypeId.PSYCHIC]: PokemonTypeName.PSYCHIC,
    [PokemonTypeId.BUG]: PokemonTypeName.BUG,
    [PokemonTypeId.ROCK]: PokemonTypeName.ROCK,
    [PokemonTypeId.GHOST]: PokemonTypeName.GHOST,
    [PokemonTypeId.DRAGON]: PokemonTypeName.DRAGON,
    [PokemonTypeId.DARK]: PokemonTypeName.DARK,
    [PokemonTypeId.STEEL]: PokemonTypeName.STEEL,
    [PokemonTypeId.FAIRY]: PokemonTypeName.FAIRY,
    [PokemonTypeId.UNKNOWN]: PokemonTypeName.UNKNOWN,
    [PokemonTypeId.SHADOW]: PokemonTypeName.SHADOW,
  };

  return typeMap[typeId];
};
