import { GenerationGameIndex, Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/location/1 https://pokeapi.co/api/v2/location/[id or name]}
 *
 * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this item listed in different languages.
 * @property region - The region this location can be found in.
 * @property areas - Areas that can be found within this location.
 * @property game_indices - A list of game indices relevent to this location by generation.
 * */
export interface Location {
  id: number;
  name: string;
  names: Name[];
  region: NamedAPIResource | null;
  areas: NamedAPIResource[];
  game_indices: GenerationGameIndex[];
}
