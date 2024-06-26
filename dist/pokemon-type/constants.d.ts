export declare enum PokemonTypesArrayIndex {
    NORMAL = 0,
    FIRE = 1,
    WATER = 2,
    ELECTRIC = 3,
    GRASS = 4,
    ICE = 5,
    FIGHTING = 6,
    POISON = 7,
    GROUND = 8,
    FLYING = 9,
    PSYCHIC = 10,
    BUG = 11,
    ROCK = 12,
    GHOST = 13,
    DRAGON = 14,
    DARK = 15,
    STEEL = 16,
    FAIRY = 17
}
export declare enum PokemonTypeName {
    NORMAL = "NORMAL",
    FIRE = "FIRE",
    WATER = "WATER",
    ELECTRIC = "ELECTRIC",
    GRASS = "GRASS",
    ICE = "ICE",
    FIGHTING = "FIGHTING",
    POISON = "POISON",
    GROUND = "GROUND",
    FLYING = "FLYING",
    PSYCHIC = "PSYCHIC",
    BUG = "BUG",
    ROCK = "ROCK",
    GHOST = "GHOST",
    DRAGON = "DRAGON",
    DARK = "DARK",
    STEEL = "STEEL",
    FAIRY = "FAIRY",
    UNKNOWN = "UNKNOWN",
    SHADOW = "SHADOW"
}
export declare const TYPES_CHART_MATRIX: number[][];
export type AlterDamageAbility = AlterSuperEffectiveDamageAbility | 'dry-skin' | 'earth-eater' | 'flash-fire' | 'fluffy' | 'heatproof' | 'levitate' | 'lightning-rod' | 'motor-drive' | 'purifying-salt' | 'sap-sipper' | 'storm-drain' | 'thick-fat' | 'volt-absorb' | 'water-absorb' | 'water-bubble' | 'well-baked-body' | 'wind-rider';
export type AlterSuperEffectiveDamageAbility = 'filter' | 'prism-armor' | 'solid-rock' | 'wonder-guard';
export declare const damageAlterAbilities: AlterDamageAbility[];
