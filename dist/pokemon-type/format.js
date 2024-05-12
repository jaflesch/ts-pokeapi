"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.formatTypeIdToName = exports.formatTypeNameToId = exports.formatTypeNameToIndex = exports.formatTypeIndexToName = exports.formatTypeIndexToId = exports.formatTypeIdToIndex = void 0;
const core_1 = require("../core");
const constants_1 = require("./constants");
/** Returns the `TYPES_CHART_MATRIX` index from given PokéAPI Pokémon Type resource id.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypeId} typeId - The PokéAPI Pokémon Type resource id.
 * @returns {PokemonTypesArrayIndex} An index from Pokémon types chart matrix.
 */
const formatTypeIdToIndex = (typeId) => {
    const typeMap = {
        [core_1.PokemonTypeId.BUG]: constants_1.PokemonTypesArrayIndex.BUG,
        [core_1.PokemonTypeId.DARK]: constants_1.PokemonTypesArrayIndex.DARK,
        [core_1.PokemonTypeId.DRAGON]: constants_1.PokemonTypesArrayIndex.DRAGON,
        [core_1.PokemonTypeId.ELECTRIC]: constants_1.PokemonTypesArrayIndex.ELECTRIC,
        [core_1.PokemonTypeId.FAIRY]: constants_1.PokemonTypesArrayIndex.FAIRY,
        [core_1.PokemonTypeId.FIGHTING]: constants_1.PokemonTypesArrayIndex.FIGHTING,
        [core_1.PokemonTypeId.FIRE]: constants_1.PokemonTypesArrayIndex.FIRE,
        [core_1.PokemonTypeId.FLYING]: constants_1.PokemonTypesArrayIndex.FLYING,
        [core_1.PokemonTypeId.GHOST]: constants_1.PokemonTypesArrayIndex.GHOST,
        [core_1.PokemonTypeId.GRASS]: constants_1.PokemonTypesArrayIndex.GRASS,
        [core_1.PokemonTypeId.GROUND]: constants_1.PokemonTypesArrayIndex.GROUND,
        [core_1.PokemonTypeId.ICE]: constants_1.PokemonTypesArrayIndex.ICE,
        [core_1.PokemonTypeId.NORMAL]: constants_1.PokemonTypesArrayIndex.NORMAL,
        [core_1.PokemonTypeId.POISON]: constants_1.PokemonTypesArrayIndex.POISON,
        [core_1.PokemonTypeId.PSYCHIC]: constants_1.PokemonTypesArrayIndex.PSYCHIC,
        [core_1.PokemonTypeId.ROCK]: constants_1.PokemonTypesArrayIndex.ROCK,
        [core_1.PokemonTypeId.STEEL]: constants_1.PokemonTypesArrayIndex.STEEL,
        [core_1.PokemonTypeId.WATER]: constants_1.PokemonTypesArrayIndex.WATER,
        //
        [core_1.PokemonTypeId.SHADOW]: constants_1.PokemonTypesArrayIndex.NORMAL,
        [core_1.PokemonTypeId.UNKNOWN]: constants_1.PokemonTypesArrayIndex.NORMAL,
    };
    return typeMap[typeId];
};
exports.formatTypeIdToIndex = formatTypeIdToIndex;
/** Returns the PokéAPI Pokémon Type resource id from given `TYPES_CHART_MATRIX` index.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} typeIndex - The index from Pokémon types chart matrix.
 * @returns {PokemonTypeId} A PokéAPI Pokémon Type resource id.
 */
const formatTypeIndexToId = (typeIndex) => {
    const typeMap = {
        [constants_1.PokemonTypesArrayIndex.BUG]: core_1.PokemonTypeId.BUG,
        [constants_1.PokemonTypesArrayIndex.DARK]: core_1.PokemonTypeId.DARK,
        [constants_1.PokemonTypesArrayIndex.DRAGON]: core_1.PokemonTypeId.DRAGON,
        [constants_1.PokemonTypesArrayIndex.ELECTRIC]: core_1.PokemonTypeId.ELECTRIC,
        [constants_1.PokemonTypesArrayIndex.FAIRY]: core_1.PokemonTypeId.FAIRY,
        [constants_1.PokemonTypesArrayIndex.FIGHTING]: core_1.PokemonTypeId.FIGHTING,
        [constants_1.PokemonTypesArrayIndex.FIRE]: core_1.PokemonTypeId.FIRE,
        [constants_1.PokemonTypesArrayIndex.FLYING]: core_1.PokemonTypeId.FLYING,
        [constants_1.PokemonTypesArrayIndex.GHOST]: core_1.PokemonTypeId.GHOST,
        [constants_1.PokemonTypesArrayIndex.GRASS]: core_1.PokemonTypeId.GRASS,
        [constants_1.PokemonTypesArrayIndex.GROUND]: core_1.PokemonTypeId.GROUND,
        [constants_1.PokemonTypesArrayIndex.ICE]: core_1.PokemonTypeId.ICE,
        [constants_1.PokemonTypesArrayIndex.NORMAL]: core_1.PokemonTypeId.NORMAL,
        [constants_1.PokemonTypesArrayIndex.POISON]: core_1.PokemonTypeId.POISON,
        [constants_1.PokemonTypesArrayIndex.PSYCHIC]: core_1.PokemonTypeId.PSYCHIC,
        [constants_1.PokemonTypesArrayIndex.ROCK]: core_1.PokemonTypeId.ROCK,
        [constants_1.PokemonTypesArrayIndex.STEEL]: core_1.PokemonTypeId.STEEL,
        [constants_1.PokemonTypesArrayIndex.WATER]: core_1.PokemonTypeId.WATER,
        //
        // [PokemonTypesArrayIndex.SHADOW]: PokemonTypeId.NORMAL,
        // [PokemonTypesArrayIndex.UNKNOWN]: PokemonTypeId.NORMAL,
    };
    return typeMap[typeIndex];
};
exports.formatTypeIndexToId = formatTypeIndexToId;
/** Returns the name of the Pokémon type from given `TYPES_CHART_MATRIX` index.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} typeIndex - The index of Pokémon types chart matrix from given Pokémon type.
 * @returns {PokemonTypeName} A name of Pokémon type.
 */
const formatTypeIndexToName = (typeIndex) => {
    const typeMap = {
        [constants_1.PokemonTypesArrayIndex.NORMAL]: constants_1.PokemonTypeName.NORMAL,
        [constants_1.PokemonTypesArrayIndex.FIRE]: constants_1.PokemonTypeName.FIRE,
        [constants_1.PokemonTypesArrayIndex.WATER]: constants_1.PokemonTypeName.WATER,
        [constants_1.PokemonTypesArrayIndex.ELECTRIC]: constants_1.PokemonTypeName.ELECTRIC,
        [constants_1.PokemonTypesArrayIndex.GRASS]: constants_1.PokemonTypeName.GRASS,
        [constants_1.PokemonTypesArrayIndex.ICE]: constants_1.PokemonTypeName.ICE,
        [constants_1.PokemonTypesArrayIndex.FIGHTING]: constants_1.PokemonTypeName.FIGHTING,
        [constants_1.PokemonTypesArrayIndex.POISON]: constants_1.PokemonTypeName.POISON,
        [constants_1.PokemonTypesArrayIndex.GROUND]: constants_1.PokemonTypeName.GROUND,
        [constants_1.PokemonTypesArrayIndex.FLYING]: constants_1.PokemonTypeName.FLYING,
        [constants_1.PokemonTypesArrayIndex.PSYCHIC]: constants_1.PokemonTypeName.PSYCHIC,
        [constants_1.PokemonTypesArrayIndex.BUG]: constants_1.PokemonTypeName.BUG,
        [constants_1.PokemonTypesArrayIndex.ROCK]: constants_1.PokemonTypeName.ROCK,
        [constants_1.PokemonTypesArrayIndex.GHOST]: constants_1.PokemonTypeName.GHOST,
        [constants_1.PokemonTypesArrayIndex.DRAGON]: constants_1.PokemonTypeName.DRAGON,
        [constants_1.PokemonTypesArrayIndex.DARK]: constants_1.PokemonTypeName.DARK,
        [constants_1.PokemonTypesArrayIndex.STEEL]: constants_1.PokemonTypeName.STEEL,
        [constants_1.PokemonTypesArrayIndex.FAIRY]: constants_1.PokemonTypeName.FAIRY,
    };
    return typeMap[typeIndex];
};
exports.formatTypeIndexToName = formatTypeIndexToName;
/** Returns the `TYPES_CHART_MATRIX` index from given Pokémon type name.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypeName} typeName - The string containing the Pokémon type name.
 * @returns {PokemonTypesArrayIndex} An index from Pokémon types chart matrix.
 */
const formatTypeNameToIndex = (typeName) => {
    const typeMap = {
        [constants_1.PokemonTypeName.NORMAL]: constants_1.PokemonTypesArrayIndex.NORMAL,
        [constants_1.PokemonTypeName.FIRE]: constants_1.PokemonTypesArrayIndex.FIRE,
        [constants_1.PokemonTypeName.WATER]: constants_1.PokemonTypesArrayIndex.WATER,
        [constants_1.PokemonTypeName.ELECTRIC]: constants_1.PokemonTypesArrayIndex.ELECTRIC,
        [constants_1.PokemonTypeName.GRASS]: constants_1.PokemonTypesArrayIndex.GRASS,
        [constants_1.PokemonTypeName.ICE]: constants_1.PokemonTypesArrayIndex.ICE,
        [constants_1.PokemonTypeName.FIGHTING]: constants_1.PokemonTypesArrayIndex.FIGHTING,
        [constants_1.PokemonTypeName.POISON]: constants_1.PokemonTypesArrayIndex.POISON,
        [constants_1.PokemonTypeName.GROUND]: constants_1.PokemonTypesArrayIndex.GROUND,
        [constants_1.PokemonTypeName.FLYING]: constants_1.PokemonTypesArrayIndex.FLYING,
        [constants_1.PokemonTypeName.PSYCHIC]: constants_1.PokemonTypesArrayIndex.PSYCHIC,
        [constants_1.PokemonTypeName.BUG]: constants_1.PokemonTypesArrayIndex.BUG,
        [constants_1.PokemonTypeName.ROCK]: constants_1.PokemonTypesArrayIndex.ROCK,
        [constants_1.PokemonTypeName.GHOST]: constants_1.PokemonTypesArrayIndex.GHOST,
        [constants_1.PokemonTypeName.DRAGON]: constants_1.PokemonTypesArrayIndex.DRAGON,
        [constants_1.PokemonTypeName.DARK]: constants_1.PokemonTypesArrayIndex.DARK,
        [constants_1.PokemonTypeName.STEEL]: constants_1.PokemonTypesArrayIndex.STEEL,
        [constants_1.PokemonTypeName.FAIRY]: constants_1.PokemonTypesArrayIndex.FAIRY,
        // to do:
        [constants_1.PokemonTypeName.UNKNOWN]: constants_1.PokemonTypesArrayIndex.FAIRY,
        [constants_1.PokemonTypeName.SHADOW]: constants_1.PokemonTypesArrayIndex.FAIRY,
    };
    return typeMap[typeName];
};
exports.formatTypeNameToIndex = formatTypeNameToIndex;
/** Returns the PokéAPI Pokémon Type resource id from given Pokémon type name.
 * @param {PokemonTypeName} typeName - The string containing the Pokémon type name.
 * @returns {PokemonTypeId} A PokéAPI Pokémon Type resource id.
 */
const formatTypeNameToId = (typeName) => {
    const typeMap = {
        [constants_1.PokemonTypeName.NORMAL]: core_1.PokemonTypeId.NORMAL,
        [constants_1.PokemonTypeName.FIRE]: core_1.PokemonTypeId.FIRE,
        [constants_1.PokemonTypeName.WATER]: core_1.PokemonTypeId.WATER,
        [constants_1.PokemonTypeName.ELECTRIC]: core_1.PokemonTypeId.ELECTRIC,
        [constants_1.PokemonTypeName.GRASS]: core_1.PokemonTypeId.GRASS,
        [constants_1.PokemonTypeName.ICE]: core_1.PokemonTypeId.ICE,
        [constants_1.PokemonTypeName.FIGHTING]: core_1.PokemonTypeId.FIGHTING,
        [constants_1.PokemonTypeName.POISON]: core_1.PokemonTypeId.POISON,
        [constants_1.PokemonTypeName.GROUND]: core_1.PokemonTypeId.GROUND,
        [constants_1.PokemonTypeName.FLYING]: core_1.PokemonTypeId.FLYING,
        [constants_1.PokemonTypeName.PSYCHIC]: core_1.PokemonTypeId.PSYCHIC,
        [constants_1.PokemonTypeName.BUG]: core_1.PokemonTypeId.BUG,
        [constants_1.PokemonTypeName.ROCK]: core_1.PokemonTypeId.ROCK,
        [constants_1.PokemonTypeName.GHOST]: core_1.PokemonTypeId.GHOST,
        [constants_1.PokemonTypeName.DRAGON]: core_1.PokemonTypeId.DRAGON,
        [constants_1.PokemonTypeName.DARK]: core_1.PokemonTypeId.DARK,
        [constants_1.PokemonTypeName.STEEL]: core_1.PokemonTypeId.STEEL,
        [constants_1.PokemonTypeName.FAIRY]: core_1.PokemonTypeId.FAIRY,
        [constants_1.PokemonTypeName.UNKNOWN]: core_1.PokemonTypeId.UNKNOWN,
        [constants_1.PokemonTypeName.SHADOW]: core_1.PokemonTypeId.SHADOW,
    };
    return typeMap[typeName];
};
exports.formatTypeNameToId = formatTypeNameToId;
/** Returns the name of the Pokémon type from given PokéAPI Pokémon Type resource id.
 * @param {PokemonTypeId} typeId - The PokéAPI Pokémon Type resource id.
 * @returns {PokemonTypeName} A name of the Pokémon type.
 */
const formatTypeIdToName = (typeId) => {
    const typeMap = {
        [core_1.PokemonTypeId.NORMAL]: constants_1.PokemonTypeName.NORMAL,
        [core_1.PokemonTypeId.FIRE]: constants_1.PokemonTypeName.FIRE,
        [core_1.PokemonTypeId.WATER]: constants_1.PokemonTypeName.WATER,
        [core_1.PokemonTypeId.ELECTRIC]: constants_1.PokemonTypeName.ELECTRIC,
        [core_1.PokemonTypeId.GRASS]: constants_1.PokemonTypeName.GRASS,
        [core_1.PokemonTypeId.ICE]: constants_1.PokemonTypeName.ICE,
        [core_1.PokemonTypeId.FIGHTING]: constants_1.PokemonTypeName.FIGHTING,
        [core_1.PokemonTypeId.POISON]: constants_1.PokemonTypeName.POISON,
        [core_1.PokemonTypeId.GROUND]: constants_1.PokemonTypeName.GROUND,
        [core_1.PokemonTypeId.FLYING]: constants_1.PokemonTypeName.FLYING,
        [core_1.PokemonTypeId.PSYCHIC]: constants_1.PokemonTypeName.PSYCHIC,
        [core_1.PokemonTypeId.BUG]: constants_1.PokemonTypeName.BUG,
        [core_1.PokemonTypeId.ROCK]: constants_1.PokemonTypeName.ROCK,
        [core_1.PokemonTypeId.GHOST]: constants_1.PokemonTypeName.GHOST,
        [core_1.PokemonTypeId.DRAGON]: constants_1.PokemonTypeName.DRAGON,
        [core_1.PokemonTypeId.DARK]: constants_1.PokemonTypeName.DARK,
        [core_1.PokemonTypeId.STEEL]: constants_1.PokemonTypeName.STEEL,
        [core_1.PokemonTypeId.FAIRY]: constants_1.PokemonTypeName.FAIRY,
        [core_1.PokemonTypeId.UNKNOWN]: constants_1.PokemonTypeName.UNKNOWN,
        [core_1.PokemonTypeId.SHADOW]: constants_1.PokemonTypeName.SHADOW,
    };
    return typeMap[typeId];
};
exports.formatTypeIdToName = formatTypeIdToName;
exports.format = {
    id2name: exports.formatTypeIdToName,
    id2index: exports.formatTypeIdToIndex,
    index2id: exports.formatTypeIndexToId,
    index2name: exports.formatTypeIndexToName,
    name2id: exports.formatTypeNameToId,
    name2index: exports.formatTypeNameToIndex,
};
//# sourceMappingURL=format.js.map