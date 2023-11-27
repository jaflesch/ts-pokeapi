import { Name, NamedAPIResource } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/pokemon-color/1 https://pokeapi.co/api/v2/pokemon-color/[id or name]}
 *
 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property pokemon_species - A list of the Pokémon species that have this color.
 * */
export type PokemonColor = {
  id: number;
  name: string;
  names: Name[];
  pokemon_entries: NamedAPIResource[];
};
