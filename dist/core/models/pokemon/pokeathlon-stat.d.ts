import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokeathlon-stat/1 https://pokeapi.co/api/v2/pokeathlon-stat/[id or name]}
 *
 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property affecting_natures - A detail of natures which affect this Pokéathlon stat positively or negatively.
 * */
export interface PokeathlonStat {
    id: number;
    name: string;
    names: Name[];
    pokemon_entries: NaturePokeathlonStatAffectSet[];
}
/**
 * @property increase - A list of natures and how they change the referenced Pokéathlon stat.
 * @property decrease - A list of natures and how they change the referenced Pokéathlon stat.
 * */
export interface NaturePokeathlonStatAffectSet {
    increase: NaturePokeathlonStatAffect[];
    decrease: NaturePokeathlonStatAffect[];
}
/**
 * @property max_change - The maximum amount of change to the referenced Pokéathlon stat.
 * @property nature - The nature causing the change.
 * */
export interface NaturePokeathlonStatAffect {
    max_change: number;
    nature: NamedAPIResource;
}
