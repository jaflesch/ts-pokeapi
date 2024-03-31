import { Description, Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokedex/1 https://pokeapi.co/api/v2/pokedex/[id or name]}
 *
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See {@link https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property is_main_series - Whether or not this Pokédex originated in the main series of the video games.
 * @property descriptions - The description of this resource listed in different languages.
 * @property names - The name of this resource listed in different languages.
 * @property pokemon_entries - A list of Pokémon catalogued in this Pokédex and their indexes.
 * @property region - The region this Pokédex catalogues Pokémon for.
 * @property version_groups - A list of version groups this Pokédex is relevant to.
 * */
export interface Pokedex {
    id: number;
    name: string;
    names: Name[];
    region: NamedAPIResource;
    is_main_series: boolean;
    descriptions: Description[];
    pokemon_entries: PokemonEntry[];
    version_groups: NamedAPIResource[];
}
/**
 * @property entry_number - The index of this Pokémon species entry within the Pokédex.
 * @property pokemon_species - The Pokémon species being encountered.
 * */
export interface PokemonEntry {
    entry_number: number;
    pokemon_species: NamedAPIResource;
}
