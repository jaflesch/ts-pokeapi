import { Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/egg-group/1/ https://pokeapi.co/api/v2/egg-group/[id or name]}
 *
 * Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out {@link https://bulbapedia.bulbagarden.net/wiki/Egg_Group Bulbapedia} for greater detail.
 *
 * @property id: The identifier for this resource
 * @property name: The name for this resource
 * @property names: The name of this resource listed in different languages
 * @property pokemon_species: A list of all Pokémon species that are members of this egg group
 */
export interface EggGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}
