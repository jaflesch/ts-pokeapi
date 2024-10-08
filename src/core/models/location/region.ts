import { Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/region/1 https://pokeapi.co/api/v2/region/[id or name]}
 *
 * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property locations - A list of locations that can be found in this region.
 * @property pokedexes - A list of pokédexes that catalogue Pokémon in this region.
 * @property version_goups - A list of version groups where this region can be visited.
 * @property main_generation - The generation this region was introduced in.
 * */
export interface Region {
  id: number;
  name: string;
  names: Name[];
  locations: NamedAPIResource[];
  pokedexes: NamedAPIResource[];
  version_goups: NamedAPIResource[];
  main_generation: NamedAPIResource;
}
