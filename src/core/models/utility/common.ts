export type URLString = string;

/**
 * @property url - The URL of the referenced resource.
 * */
export interface APIResource {
  url: URLString;
}

/**
 * @property description - The localized description for an API resource in a specific language.
 * @property language - The language thes name is in.
 */
export interface Description {
  description: string;
  language: NamedAPIResource;
}

/**
 * @property effect - The localized effect text for an API resource in a specific language
 * @property language - The language this effect is in.
 * */
export interface Effect {
  effect: string;
  language: NamedAPIResource;
}

/**
 * @property min_level - The lowest level the Pokémon could be encountered at.
 * @property max_level - The highest level the Pokémon could be encountered at.
 * @property condition_values - A list of condition values that must be in effect for this encounter to occur.
 * @property chance - Percent chance that this encounter will occur.
 * @property method - The method by which this encounter happens.
 */
export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: NamedAPIResource[];
  chance: number;
  method: NamedAPIResource;
}

/**
 * @property flavor_text - The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version.
 * @property language - The language this name is in.
 * @property version - The game version this flavor text is extracted from.
 * */
export interface FlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version: NamedAPIResource;
}

/**
 * @property game_index - The internal id of an API resource within game data.
 * @property generation - The generation relevent to this game index.
 *
 */
export interface GenerationGameIndex {
  game_index: number;
  generation: NamedAPIResource;
}

/**
 * @property machine - The machine that teaches a move from an item.
 * @property version_group - The version group of this specific machine.
 *
 */
export interface MachineVersionDetail {
  machine: APIResource;
  version_group: NamedAPIResource;
}

/**
 * @property name - The localized name for an API resource in a specific language.
 * @property name - The language this name is in.
 * */
export interface Name {
  name: string;
  language: NamedAPIResource;
}

/**
 * @property name - The name of the referenced resource.
 * */
export interface NamedAPIResource<T = string> extends APIResource {
  name: T;
}
/**
 * @property effect - The localized effect text for an API resource in a specific language.
 * @property short_effect - The localized effect text in brief.
 * @property language - The language this effect is in.
 */
export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}

/**
 * @property version - The game version this encounter happens in.
 * @property max_chance - The total percentage of all encounter potential.
 * @property encounter_details - A list of encounters and their specifics.
 */
export interface VersionEncounterDetail {
  version: NamedAPIResource;
  max_chance: number;
  encounter_details: Encounter[];
}

/**
 * @property game_index - The internal id of an API resource within game data.
 * @property version - The version relevent to this game index.
 */
export interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

/**
 * @property text - The localized name for an API resource in a specific language.
 * @property language - The language this name is in.
 * @property version_group - The version group which uses this flavor text.
 *
 */
export interface VersionGroupFlavorText {
  text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}

export interface PaginatedResult {
  count: number;
  next: number | null;
  previous: number | null;
  results: NamedAPIResource[];
}
