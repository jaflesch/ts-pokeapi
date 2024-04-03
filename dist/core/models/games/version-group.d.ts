import { NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/version-group/1 https://pokeapi.co/api/v2/version-group/[id or name]}
 *
 * Version groups categorize highly similar versions of the games.
 *
 * @property id - The identifier for this resource
 * @property name - The name for this resource
 * @property order - Order for sorting. Almost by date of release, except similar versions are grouped together
 * @property generation - The generation this version was introduced in
 * @property move_learn_methods - A list of methods in which Pokémon can learn moves in this version group
 * @property pokedexes	- A list of Pokédexes introduces in this version group
 * @property regions - A list of regions that can be visited in this version group
 * @property versions - The versions this version group owns
 * */
export interface VersionGroup {
    id: number;
    name: string;
    order: number;
    generation: NamedAPIResource;
    move_learn_methods: NamedAPIResource[];
    pokedexes: NamedAPIResource[];
    regions: NamedAPIResource[];
    versions: NamedAPIResource[];
}
