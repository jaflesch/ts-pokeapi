import { NamedAPIResource, VersionEncounterDetail } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokemon/1/encounters https://pokeapi.co/api/v2/pokemon/[id or name]/encounters}
 *
 * Pokémon Location Areas are ares where Pokémon can be found.
 *
 * @property location_area - The location area the referenced Pokémon can be encountered in.
 * @property version_details - A list of versions and encounters with the referenced Pokémon that might happen.
 * */
export interface PokemonLocationArea {
    location_area: NamedAPIResource;
    version_details: VersionEncounterDetail[];
}
