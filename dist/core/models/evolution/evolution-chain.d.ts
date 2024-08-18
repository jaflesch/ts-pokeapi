import { GenderId, TimeOfDay, RelativePhysicalStatEvolution } from '../../constants';
import { NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/evolution-chain/1 https://pokeapi.co/api/v2/evolution-chain/[id]}
 *
 * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
 *
 * @property id - The identifier for this resource.
 * @property chain - The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order.
 * @property baby_trigger_item - The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon.
 * */
export interface EvolutionChain {
    id: number;
    chain: ChainLink;
    baby_trigger_item: NamedAPIResource;
}
/**
 * @property is_baby - Whether or not this link is for a baby Pokémon. This would only ever be true on the base link.
 * @property species - The Pokémon species at this point in the evolution chain.
 * @property evolution_details - All details regarding the specific details of the referenced Pokémon species evolution.
 * @property evolves_to - A List of chain objects.
 * */
export interface ChainLink {
    is_baby: boolean;
    species: NamedAPIResource;
    evolution_details: EvolutionDetail[];
    evolves_to: ChainLink[];
}
/**
 * The detailed Pokémon species evolution.
 * @property item - The item required to cause evolution this into Pokémon species.
 * @property trigger - The type of event that triggers evolution into this Pokémon species.
 * @property gender - The id of the gender of the evolving Pokémon species must be in order to evolve into this Pokémon species.
 * @property held_item - The item the evolving Pokémon species must be holding during the evolution trigger event to evolve into this Pokémon species.
 * @property known_move - The move that must be known by the evolving Pokémon species during the evolution trigger event in order to evolve into this Pokémon species.
 * @property known_move_type - The evolving Pokémon species must know a move with this type during the evolution trigger event in order to evolve into this Pokémon species.
 * @property location - The location the evolution must be triggered at.
 * @property min_level - The minimum required level of the evolving Pokémon species to evolve into this Pokémon species.
 * @property min_happiness - The minimum required level of happiness the evolving Pokémon species to evolve into this Pokémon species.
 * @property min_beauty - The minimum required level of beauty the evolving Pokémon species to evolve into this Pokémon species.
 * @property min_affection - The minimum required level of affection the evolving Pokémon species to evolve into this Pokémon species.
 * @property needs_overworld_rain	- Whether or not it must be raining in the overworld to cause evolution this Pokémon species.
 * @property party_species - The Pokémon species that must be in the players party in order for the evolving Pokémon species to evolve into this Pokémon species.
 * @property party_type - The player must have a Pokémon of this type in their party during the evolution trigger event in order for the evolving Pokémon species to evolve into this Pokémon species.
 * @property relative_physical_stats - The required relation between the Pokémon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense.
 * @property time_of_day - The required time of day. Day or night.
 * @property trade_species - Pokémon species for which this one must be traded.
 * @property turn_upside_down - Whether or not the 3DS needs to be turned upside-down as this Pokémon levels up.
 * */
export interface EvolutionDetail {
    item: NamedAPIResource;
    trigger: NamedAPIResource;
    gender: GenderId;
    held_item: NamedAPIResource;
    known_move: NamedAPIResource;
    known_move_type: NamedAPIResource;
    location: NamedAPIResource;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: NamedAPIResource;
    party_type: NamedAPIResource;
    relative_physical_stats: RelativePhysicalStatEvolution;
    time_of_day: TimeOfDay;
    trade_species: NamedAPIResource;
    turn_upside_down: boolean;
}
