import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/evolution-trigger/1 https://pokeapi.co/api/v2/evolution-trigger/[id or name]}
 *
 * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out Bulbapedia for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property pokemon_species - A list of pokemon species that result from this evolution trigger.
 * */
export interface EvolutionTrigger {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource[];
}
