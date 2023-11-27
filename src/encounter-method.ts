import { Name } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/encounter-method/1 https://pokeapi.co/api/v2/encounter-method/[id or name]}
 *
 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
 *
 * @property id - The identifier for this resource
 * @property name - The name for this resource
 * @property order - A good value for sorting
 * @property moves - The name of this resource listed in different languages
 * */
export type EncounterMethod = {
  id: number;
  name: number;
  order: number;
  names: Name[];
};
