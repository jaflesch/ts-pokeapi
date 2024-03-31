export type URLString = string;
/**
 * @property url - The URL of the referenced resource.
 * */
export type APIResource = {
    url: URLString;
};
/**
 * @property description - The localized description for an API resource in a specific language.
 * @property language - The language thes name is in.
 */
export type Description = {
    description: string;
    language: NamedAPIResource;
};
/**
 * @property effect - The localized effect text for an API resource in a specific language
 * @property language - The language this effect is in.
 * */
export type Effect = {
    effect: string;
    language: NamedAPIResource;
};
/**
 * @property min_level - The lowest level the Pokémon could be encountered at.
 * @property max_level - The highest level the Pokémon could be encountered at.
 * @property condition_values - A list of condition values that must be in effect for this encounter to occur.
 * @property chance - Percent chance that this encounter will occur.
 * @property method - The method by which this encounter happens.
 */
export type Encounter = {
    min_level: number;
    max_level: number;
    condition_values: NamedAPIResource[];
    chance: number;
    method: NamedAPIResource;
};
/**
 * @property flavor_text - The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version.
 * @property language - The language this name is in.
 * @property version - The game version this flavor text is extracted from.
 * */
export type FlavorText = {
    flavor_text: string;
    language: NamedAPIResource;
    version: NamedAPIResource;
};
/**
 * @property game_index - The internal id of an API resource within game data.
 * @property generation - The generation relevent to this game index.
 *
 */
export type GenerationGameIndex = {
    game_index: number;
    generation: NamedAPIResource;
};
/**
 * @property machine - The machine that teaches a move from an item.
 * @property version_group - The version group of this specific machine.
 *
 */
export type MachineVersionDetail = {
    machine: APIResource;
    version_group: NamedAPIResource;
};
/**
 * @property name - The localized name for an API resource in a specific language.
 * @property name - The language this name is in.
 * */
export type Name = {
    name: string;
    language: NamedAPIResource;
};
/**
 * @property name - The name of the referenced resource.
 * */
export type NamedAPIResource<T = string> = APIResource & {
    name: T;
};
/**
 * @property effect - The localized effect text for an API resource in a specific language.
 * @property short_effect - The localized effect text in brief.
 * @property language - The language this effect is in.
 */
export type VerboseEffect = {
    effect: string;
    short_effect: string;
    language: NamedAPIResource;
};
/**
 * @property version - The game version this encounter happens in.
 * @property max_chance - The total percentage of all encounter potential.
 * @property encounter_details - A list of encounters and their specifics.
 */
export type VersionEncounterDetail = {
    version: NamedAPIResource;
    max_chance: number;
    encounter_details: Encounter[];
};
/**
 * @property game_index - The internal id of an API resource within game data.
 * @property version - The version relevent to this game index.
 */
export type VersionGameIndex = {
    game_index: number;
    version: NamedAPIResource;
};
/**
 * @property text - The localized name for an API resource in a specific language.
 * @property language - The language this name is in.
 * @property version_group - The version group which uses this flavor text.
 *
 */
export type VersionGroupFlavorText = {
    text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
};
export declare enum PokemonTypeIdEnum {
    NORMAL = 1,
    FIGHTING = 2,
    FLYING = 3,
    POISON = 4,
    GROUND = 5,
    ROCK = 6,
    BUG = 7,
    GHOST = 8,
    STEEL = 9,
    FIRE = 10,
    WATER = 11,
    GRASS = 12,
    ELECTRIC = 13,
    PSYCHIC = 14,
    ICE = 15,
    DRAGON = 16,
    DARK = 17,
    FAIRY = 18
}
export type PaginatedResult<T> = {
    count: number;
    next: number | null;
    previous: number | null;
    results: T[];
};
export declare enum DamageClassEnum {
    PHYSICAL = "physical",
    STATUS = "status",
    SPECIAL = "special"
}
export declare enum GenderEnum {
    FEMALE = 1,
    MALE = 2,
    GENDERLESS = 3
}
export declare enum RelativePhysicalStatEvolution {
    ATK_GT_DEF = 1,
    ATK_EQ_DEF = 0,
    ATK_LT_DEF = -1
}
export declare enum TimeOfDay {
    DAY = "day",
    NIGHT = "night",
    DUSK = "dusk"
}
