"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.damageAlterAbilities = exports.TYPES_MATCHUP_MATRIX = exports.PokemonTypeName = exports.PokemonTypesArrayIndex = void 0;
var PokemonTypesArrayIndex;
(function (PokemonTypesArrayIndex) {
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["NORMAL"] = 0] = "NORMAL";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["FIRE"] = 1] = "FIRE";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["WATER"] = 2] = "WATER";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["ELECTRIC"] = 3] = "ELECTRIC";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["GRASS"] = 4] = "GRASS";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["ICE"] = 5] = "ICE";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["FIGHTING"] = 6] = "FIGHTING";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["POISON"] = 7] = "POISON";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["GROUND"] = 8] = "GROUND";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["FLYING"] = 9] = "FLYING";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["PSYCHIC"] = 10] = "PSYCHIC";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["BUG"] = 11] = "BUG";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["ROCK"] = 12] = "ROCK";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["GHOST"] = 13] = "GHOST";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["DRAGON"] = 14] = "DRAGON";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["DARK"] = 15] = "DARK";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["STEEL"] = 16] = "STEEL";
    PokemonTypesArrayIndex[PokemonTypesArrayIndex["FAIRY"] = 17] = "FAIRY";
})(PokemonTypesArrayIndex || (exports.PokemonTypesArrayIndex = PokemonTypesArrayIndex = {}));
var PokemonTypeName;
(function (PokemonTypeName) {
    PokemonTypeName["NORMAL"] = "NORMAL";
    PokemonTypeName["FIRE"] = "FIRE";
    PokemonTypeName["WATER"] = "WATER";
    PokemonTypeName["ELECTRIC"] = "ELECTRIC";
    PokemonTypeName["GRASS"] = "GRASS";
    PokemonTypeName["ICE"] = "ICE";
    PokemonTypeName["FIGHTING"] = "FIGHTING";
    PokemonTypeName["POISON"] = "POISON";
    PokemonTypeName["GROUND"] = "GROUND";
    PokemonTypeName["FLYING"] = "FLYING";
    PokemonTypeName["PSYCHIC"] = "PSYCHIC";
    PokemonTypeName["BUG"] = "BUG";
    PokemonTypeName["ROCK"] = "ROCK";
    PokemonTypeName["GHOST"] = "GHOST";
    PokemonTypeName["DRAGON"] = "DRAGON";
    PokemonTypeName["DARK"] = "DARK";
    PokemonTypeName["STEEL"] = "STEEL";
    PokemonTypeName["FAIRY"] = "FAIRY";
    PokemonTypeName["UNKNOWN"] = "UNKNOWN";
    PokemonTypeName["SHADOW"] = "SHADOW";
})(PokemonTypeName || (exports.PokemonTypeName = PokemonTypeName = {}));
exports.TYPES_MATCHUP_MATRIX = [
    // Normal
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1],
    // Fire
    [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1],
    // Water
    [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1],
    // Electric
    [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1],
    // Grass
    [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1],
    // Ice
    [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1],
    // Fighting
    [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5],
    // Poison
    [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
    // Ground
    [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1],
    // Flying
    [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1],
    // Psychic
    [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1],
    // Bug
    [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5],
    // Rock
    [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1],
    // Ghost
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1],
    // Dragon
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
    // Dark
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5],
    // Steel
    [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2],
    // Fairy
    [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1],
];
exports.damageAlterAbilities = [
    'dry-skin',
    'earth-eater',
    'filter',
    'flash-fire',
    'fluffy',
    'heatproof',
    'levitate',
    'lightning-rod',
    'motor-drive',
    'prism-armor',
    'purifying-salt',
    'sap-sipper',
    'solid-rock',
    'storm-drain',
    'thick-fat',
    'volt-absorb',
    'water-absorb',
    'water-bubble',
    'well-baked-body',
    'wind-rider',
    'wonder-guard',
];
//# sourceMappingURL=constants.js.map