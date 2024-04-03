import { APIResource, Name, NamedAPIResource } from '../utility/common';
import { MoveDamageClass } from '../move/move-damage-class';
/**
 * (GET) {@link https://pokeapi.co/api/v2/stat/1 https://pokeapi.co/api/v2/stat/[id or name]}
 *
 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property game_index - ID the games use for this stat.
 * @property is_battle_only - Whether this stat only exists within a battle.
 * @property affecting_moves - A detail of moves which affect this stat positively or negatively.
 * @property affecting_natures - A detail of natures which affect this stat positively or negatively.
 * @property characteristics - A list of characteristics that are set on a Pokémon when its highest base stat is this stat.
 * @property move_damage_class - The class of damage this stat is directly related to.
 * @property names - The name of this resource listed in different languages.
 * */
export interface PokemonStat {
    id: number;
    name: string;
    names: Name[];
    game_index: number;
    is_battle_only: boolean;
    characteristics: APIResource[];
    affecting_moves: MoveStatAffectSet;
    affecting_natures: NatureStatAffectSet;
    move_damage_class: NamedAPIResource<MoveDamageClass>;
}
/**
 * @property increase - A list of moves and how they change the referenced stat.
 * @property decrease - A list of moves and how they change the referenced stat.
 * */
export interface MoveStatAffectSet {
    increase: MoveStatAffect[];
    decrease: MoveStatAffect[];
}
/**
 * @property change - The maximum amount of change to the referenced stat.
 * @property move - The move causing the change.
 * */
export interface MoveStatAffect {
    change: number;
    move: NamedAPIResource;
}
/**
 * @property increase - A list of natures and how they change the referenced stat.
 * @property decrease - A list of nature sand how they change the referenced stat.
 * */
export interface NatureStatAffectSet {
    increase: NamedAPIResource[];
    decrease: NamedAPIResource[];
}
