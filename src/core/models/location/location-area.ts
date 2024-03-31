import {
  Name,
  NamedAPIResource,
  VersionEncounterDetail,
} from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/location-area/1 https://pokeapi.co/api/v2/location-area/[id or name]}
 *
 * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property game_index - The internal id of an API resource within game data.
 * @property encounter_method_rates - A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game.
 * @property location - The region this location area can be found in.
 * @property names - The name of this resource listed in different languages.
 * @property pokemon_encounters - A list of Pokémon that can be encountered in this area along with version specific details about the encounter.
 * */
export interface LocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: NamedAPIResource;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

/**
 * @property encounter_method - The method in which Pokémon may be encountered in an area.
 * @property version_details - The chance of the encounter to occur on a version of the game.
 * */
export interface EncounterMethodRate {
  encounter_method: NamedAPIResource;
  version_details: EncounterVersionDetail[];
}

/**
 * @property rate - The chance of an encounter to occur.
 * @property version - The version of the game in which the encounter can occur with the given chance.
 */
export interface EncounterVersionDetail {
  rate: number;
  version: NamedAPIResource;
}

/**
 * @property pokemon - The Pokémon being encountered.
 * @property version_details - A list of versions and encounters with Pokémon that might happen in the referenced location area.
 * */
export interface PokemonEncounter {
  pokemon: NamedAPIResource;
  version_details: VersionEncounterDetail[];
}
