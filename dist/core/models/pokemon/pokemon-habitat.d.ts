import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokemon-habitat/1 https://pokeapi.co/api/v2/pokemon-habitat/[id or name]}
 *
 * Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property pokemon_species - A list of the Pokémon species that can be found in this habitat.
 * */
export interface PokemonHabitat {
    id: number;
    name: string;
    names: Name[];
    pokemon_entries: NamedAPIResource[];
}
