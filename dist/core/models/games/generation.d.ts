import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/generation/1 https://pokeapi.co/api/v2/generation/[id or name]}
 *
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property main_region - The main region travelled in this generation.
 * @property abilities - A list of abilities that were introduced in this generation.
 * @property moves - A list of moves that were introduced in this generation.
 * @property types - A list of types that were introduced in this generation.
 * @property pokemon_species - A list of Pokémon species that were introduced in this generation.
 * @property version_groups - A list of version groups that were introduced in this generation.
 * */
export interface Generation {
    id: number;
    name: string;
    names: Name[];
    main_region: NamedAPIResource;
    abilities: NamedAPIResource[];
    moves: NamedAPIResource[];
    types: NamedAPIResource[];
    pokemon_species: NamedAPIResource[];
    version_groups: NamedAPIResource[];
}
