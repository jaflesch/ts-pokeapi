import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokeathlon-stat/1 https://pokeapi.co/api/v2/pokeathlon-stat/[id or name]}
 *
 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats.
 * See {@link http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon Bulbapedia} for greater detail.
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
    affecting_natures: NaturePokeathlonStatAffectSets;
}
/**
 * @property increase - A list of natures and how they change the referenced Pokéathlon stat.
 * @property decrease - A list of natures and how they change the referenced Pokéathlon stat.
 * */
export interface NaturePokeathlonStatAffectSets {
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
