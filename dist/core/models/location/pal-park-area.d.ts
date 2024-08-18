import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pal-park-area/1 https://pokeapi.co/api/v2/pal-park-area/[id or name]}
 *
 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to {@link https://bulbapedia.bulbagarden.net/wiki/Pal_Park Pal Park}.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property pokemon_encounters - A list of Pokémon encountered in this pal park area along with details.
 * */
export interface PalParkArea {
    id: number;
    name: string;
    names: Name[];
    pokemon_encounters: PalParkEncounterSpecie[];
}
/**
 * @property rate - The base rate for encountering this Pokémon in this pal park area.
 * @property base_score - The base score given to the player when this Pokémon is caught during a pal park run.
 * @property pokemon_species - The Pokémon species being encountered.
 * */
export interface PalParkEncounterSpecie {
    rate: number;
    base_score: number;
    pokemon_species: NamedAPIResource;
}
