import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/encounter-condition-value/1 https://pokeapi.co/api/v2/encounter-condition-value/[id or name]}
 *
 * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property condition - The condition this encounter condition value pertains to.
 * */
export interface EncounterConditionValue {
    id: number;
    name: string;
    names: Name[];
    condition: NamedAPIResource[];
}
