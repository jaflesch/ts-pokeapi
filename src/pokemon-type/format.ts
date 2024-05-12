import { PokemonTypeId } from '../core';
import { PokemonTypeName, PokemonTypesArrayIndex } from './constants';

/** Returns the `TYPES_CHART_MATRIX` index from given PokéAPI Pokémon Type resource id.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypeId} typeId - The PokéAPI Pokémon Type resource id.
 * @returns {PokemonTypesArrayIndex} An index from Pokémon types chart matrix.
 */
export const formatTypeIdToIndex = (
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

/** Returns the PokéAPI Pokémon Type resource id from given `TYPES_CHART_MATRIX` index.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} typeIndex - The index from Pokémon types chart matrix.
 * @returns {PokemonTypeId} A PokéAPI Pokémon Type resource id.
 */
export const formatTypeIndexToId = (
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

/** Returns the name of the Pokémon type from given `TYPES_CHART_MATRIX` index.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} typeIndex - The index of Pokémon types chart matrix from given Pokémon type.
 * @returns {PokemonTypeName} A name of Pokémon type.
 */
export const formatTypeIndexToName = (
  typeIndex: PokemonTypesArrayIndex,
): PokemonTypeName => {
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

/** Returns the `TYPES_CHART_MATRIX` index from given Pokémon type name.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypeName} typeName - The string containing the Pokémon type name.
 * @returns {PokemonTypesArrayIndex} An index from Pokémon types chart matrix.
 */
export const formatTypeNameToIndex = (
  typeName: PokemonTypeName,
): PokemonTypesArrayIndex => {
  const typeMap = {
    [PokemonTypeName.NORMAL]: PokemonTypesArrayIndex.NORMAL,
    [PokemonTypeName.FIRE]: PokemonTypesArrayIndex.FIRE,
    [PokemonTypeName.WATER]: PokemonTypesArrayIndex.WATER,
    [PokemonTypeName.ELECTRIC]: PokemonTypesArrayIndex.ELECTRIC,
    [PokemonTypeName.GRASS]: PokemonTypesArrayIndex.GRASS,
    [PokemonTypeName.ICE]: PokemonTypesArrayIndex.ICE,
    [PokemonTypeName.FIGHTING]: PokemonTypesArrayIndex.FIGHTING,
    [PokemonTypeName.POISON]: PokemonTypesArrayIndex.POISON,
    [PokemonTypeName.GROUND]: PokemonTypesArrayIndex.GROUND,
    [PokemonTypeName.FLYING]: PokemonTypesArrayIndex.FLYING,
    [PokemonTypeName.PSYCHIC]: PokemonTypesArrayIndex.PSYCHIC,
    [PokemonTypeName.BUG]: PokemonTypesArrayIndex.BUG,
    [PokemonTypeName.ROCK]: PokemonTypesArrayIndex.ROCK,
    [PokemonTypeName.GHOST]: PokemonTypesArrayIndex.GHOST,
    [PokemonTypeName.DRAGON]: PokemonTypesArrayIndex.DRAGON,
    [PokemonTypeName.DARK]: PokemonTypesArrayIndex.DARK,
    [PokemonTypeName.STEEL]: PokemonTypesArrayIndex.STEEL,
    [PokemonTypeName.FAIRY]: PokemonTypesArrayIndex.FAIRY,
    // to do:
    [PokemonTypeName.UNKNOWN]: PokemonTypesArrayIndex.FAIRY,
    [PokemonTypeName.SHADOW]: PokemonTypesArrayIndex.FAIRY,
  };

  return typeMap[typeName];
};

/** Returns the PokéAPI Pokémon Type resource id from given Pokémon type name.
 * @param {PokemonTypeName} typeName - The string containing the Pokémon type name.
 * @returns {PokemonTypeId} A PokéAPI Pokémon Type resource id.
 */
export const formatTypeNameToId = (
  typeName: PokemonTypeName,
): PokemonTypeId => {
  const typeMap = {
    [PokemonTypeName.NORMAL]: PokemonTypeId.NORMAL,
    [PokemonTypeName.FIRE]: PokemonTypeId.FIRE,
    [PokemonTypeName.WATER]: PokemonTypeId.WATER,
    [PokemonTypeName.ELECTRIC]: PokemonTypeId.ELECTRIC,
    [PokemonTypeName.GRASS]: PokemonTypeId.GRASS,
    [PokemonTypeName.ICE]: PokemonTypeId.ICE,
    [PokemonTypeName.FIGHTING]: PokemonTypeId.FIGHTING,
    [PokemonTypeName.POISON]: PokemonTypeId.POISON,
    [PokemonTypeName.GROUND]: PokemonTypeId.GROUND,
    [PokemonTypeName.FLYING]: PokemonTypeId.FLYING,
    [PokemonTypeName.PSYCHIC]: PokemonTypeId.PSYCHIC,
    [PokemonTypeName.BUG]: PokemonTypeId.BUG,
    [PokemonTypeName.ROCK]: PokemonTypeId.ROCK,
    [PokemonTypeName.GHOST]: PokemonTypeId.GHOST,
    [PokemonTypeName.DRAGON]: PokemonTypeId.DRAGON,
    [PokemonTypeName.DARK]: PokemonTypeId.DARK,
    [PokemonTypeName.STEEL]: PokemonTypeId.STEEL,
    [PokemonTypeName.FAIRY]: PokemonTypeId.FAIRY,
    [PokemonTypeName.UNKNOWN]: PokemonTypeId.UNKNOWN,
    [PokemonTypeName.SHADOW]: PokemonTypeId.SHADOW,
  };

  return typeMap[typeName];
};

/** Returns the name of the Pokémon type from given PokéAPI Pokémon Type resource id.
 * @param {PokemonTypeId} typeId - The PokéAPI Pokémon Type resource id.
 * @returns {PokemonTypeName} A name of the Pokémon type.
 */
export const formatTypeIdToName = (typeId: PokemonTypeId): PokemonTypeName => {
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

export const format = {
  id2name: formatTypeIdToName,
  id2index: formatTypeIdToIndex,
  index2id: formatTypeIndexToId,
  index2name: formatTypeIndexToName,
  name2id: formatTypeNameToId,
  name2index: formatTypeNameToIndex,
};
