"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTypeIdToName = exports.formatTypeNameToId = exports.formatTypeNameToIndex = exports.formatTypeIndexToName = exports.formatTypeIndexToTypeId = exports.formatTypeIdToTypeIndex = void 0;
const core_1 = require("../core");
const constants_1 = require("./constants");
const formatTypeIdToTypeIndex = (typeId) => {
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
exports.formatTypeIdToTypeIndex = formatTypeIdToTypeIndex;
const formatTypeIndexToTypeId = (typeIndex) => {
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
exports.formatTypeIndexToTypeId = formatTypeIndexToTypeId;
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
const formatTypeNameToIndex = (typeName) => {
    const typeMap = {
        NORMAL: constants_1.PokemonTypesArrayIndex.NORMAL,
        FIRE: constants_1.PokemonTypesArrayIndex.FIRE,
        WATER: constants_1.PokemonTypesArrayIndex.WATER,
        ELECTRIC: constants_1.PokemonTypesArrayIndex.ELECTRIC,
        GRASS: constants_1.PokemonTypesArrayIndex.GRASS,
        ICE: constants_1.PokemonTypesArrayIndex.ICE,
        FIGHTING: constants_1.PokemonTypesArrayIndex.FIGHTING,
        POISON: constants_1.PokemonTypesArrayIndex.POISON,
        GROUND: constants_1.PokemonTypesArrayIndex.GROUND,
        FLYING: constants_1.PokemonTypesArrayIndex.FLYING,
        PSYCHIC: constants_1.PokemonTypesArrayIndex.PSYCHIC,
        BUG: constants_1.PokemonTypesArrayIndex.BUG,
        ROCK: constants_1.PokemonTypesArrayIndex.ROCK,
        GHOST: constants_1.PokemonTypesArrayIndex.GHOST,
        DRAGON: constants_1.PokemonTypesArrayIndex.DRAGON,
        DARK: constants_1.PokemonTypesArrayIndex.DARK,
        STEEL: constants_1.PokemonTypesArrayIndex.STEEL,
        FAIRY: constants_1.PokemonTypesArrayIndex.FAIRY,
    };
    return typeMap[typeName];
};
exports.formatTypeNameToIndex = formatTypeNameToIndex;
const formatTypeNameToId = (typeName) => {
    const typeMap = {
        NORMAL: core_1.PokemonTypeId.NORMAL,
        FIRE: core_1.PokemonTypeId.FIRE,
        WATER: core_1.PokemonTypeId.WATER,
        ELECTRIC: core_1.PokemonTypeId.ELECTRIC,
        GRASS: core_1.PokemonTypeId.GRASS,
        ICE: core_1.PokemonTypeId.ICE,
        FIGHTING: core_1.PokemonTypeId.FIGHTING,
        POISON: core_1.PokemonTypeId.POISON,
        GROUND: core_1.PokemonTypeId.GROUND,
        FLYING: core_1.PokemonTypeId.FLYING,
        PSYCHIC: core_1.PokemonTypeId.PSYCHIC,
        BUG: core_1.PokemonTypeId.BUG,
        ROCK: core_1.PokemonTypeId.ROCK,
        GHOST: core_1.PokemonTypeId.GHOST,
        DRAGON: core_1.PokemonTypeId.DRAGON,
        DARK: core_1.PokemonTypeId.DARK,
        STEEL: core_1.PokemonTypeId.STEEL,
        FAIRY: core_1.PokemonTypeId.FAIRY,
        UNKNOWN: core_1.PokemonTypeId.UNKNOWN,
        SHADOW: core_1.PokemonTypeId.SHADOW,
    };
    return typeMap[typeName];
};
exports.formatTypeNameToId = formatTypeNameToId;
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
//# sourceMappingURL=format.js.map