import { Name, NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokemon-shape/1 https://pokeapi.co/api/v2/pokemon-shape/[id or name]}
 *
 * Shapes used for sorting Pokémon in a Pokédex.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property awesome_names - The "scientific" name of this Pokémon shape listed in different languages.
 * @property pokemon_species - A list of the Pokémon species that have this shape.
 * */
export type PokemonShape = {
    id: number;
    name: string;
    names: Name[];
    awesome_names: AwesomeName[];
    pokemon_species: NamedAPIResource[];
};
/**
 * @property awesome_name - The localized "scientific" name for an API resource in a specific language.
 * @property language - The language this "scientific" name is in.
 * */
export type AwesomeName = {
    awesome_name: string;
    language: NamedAPIResource;
};
