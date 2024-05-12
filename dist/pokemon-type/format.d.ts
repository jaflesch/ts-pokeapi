import { PokemonTypeId } from '../core';
import { PokemonTypeName, PokemonTypesArrayIndex } from './constants';
/** Returns the `TYPES_CHART_MATRIX` index from given PokéAPI Pokémon Type resource id.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypeId} typeId - The PokéAPI Pokémon Type resource id.
 * @returns {PokemonTypesArrayIndex} An index from Pokémon types chart matrix.
 */
export declare const formatTypeIdToIndex: (typeId: PokemonTypeId) => PokemonTypesArrayIndex;
/** Returns the PokéAPI Pokémon Type resource id from given `TYPES_CHART_MATRIX` index.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} typeIndex - The index from Pokémon types chart matrix.
 * @returns {PokemonTypeId} A PokéAPI Pokémon Type resource id.
 */
export declare const formatTypeIndexToId: (typeIndex: PokemonTypesArrayIndex) => PokemonTypeId;
/** Returns the name of the Pokémon type from given `TYPES_CHART_MATRIX` index.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} typeIndex - The index of Pokémon types chart matrix from given Pokémon type.
 * @returns {PokemonTypeName} A name of Pokémon type.
 */
export declare const formatTypeIndexToName: (typeIndex: PokemonTypesArrayIndex) => PokemonTypeName;
/** Returns the `TYPES_CHART_MATRIX` index from given Pokémon type name.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypeName} typeName - The string containing the Pokémon type name.
 * @returns {PokemonTypesArrayIndex} An index from Pokémon types chart matrix.
 */
export declare const formatTypeNameToIndex: (typeName: PokemonTypeName) => PokemonTypesArrayIndex;
/** Returns the PokéAPI Pokémon Type resource id from given Pokémon type name.
 * @param {PokemonTypeName} typeName - The string containing the Pokémon type name.
 * @returns {PokemonTypeId} A PokéAPI Pokémon Type resource id.
 */
export declare const formatTypeNameToId: (typeName: PokemonTypeName) => PokemonTypeId;
/** Returns the name of the Pokémon type from given PokéAPI Pokémon Type resource id.
 * @param {PokemonTypeId} typeId - The PokéAPI Pokémon Type resource id.
 * @returns {PokemonTypeName} A name of the Pokémon type.
 */
export declare const formatTypeIdToName: (typeId: PokemonTypeId) => PokemonTypeName;
export declare const format: {
    id2name: (typeId: PokemonTypeId) => PokemonTypeName;
    id2index: (typeId: PokemonTypeId) => PokemonTypesArrayIndex;
    index2id: (typeIndex: PokemonTypesArrayIndex) => PokemonTypeId;
    index2name: (typeIndex: PokemonTypesArrayIndex) => PokemonTypeName;
    name2id: (typeName: PokemonTypeName) => PokemonTypeId;
    name2index: (typeName: PokemonTypeName) => PokemonTypesArrayIndex;
};
