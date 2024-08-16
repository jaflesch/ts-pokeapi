import { Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/nature/1 https://pokeapi.co/api/v2/nature/[id or name]}
 *
 * Natures influence how a Pokémon's stats grow. See {@link http://bulbapedia.bulbagarden.net/wiki/Nature Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property decreased_stat - The stat decreased by 10% in Pokémon with this nature.
 * @property increased_stat - The stat increased by 10% in Pokémon with this nature.
 * @property hates_flavor - The flavor hated by Pokémon with this nature.
 * @property likes_flavor - The flavor liked by Pokémon with this nature.
 * @property pokeathlon_stat_changes - A list of Pokéathlon stats this nature effects and how much it effects them.
 * @property move_battle_style_preferences - A list of battle styles and how likely a Pokémon with this nature is to use them in the {@link https://bulbapedia.bulbagarden.net/wiki/Battle_Palace Battle Palace} or {@link https://bulbapedia.bulbagarden.net/wiki/Battle_Tent Battle Tent}.
 */
export interface Nature {
  id: number;
  name: string;
  names: Name[];
  decreased_stat: NamedAPIResource;
  increased_stat: NamedAPIResource;
  hates_flavor: NamedAPIResource;
  likes_flavor: NamedAPIResource;
  pokeathlon_stat_changes: NatureStatChange;
  move_battle_style_preferences: MoveBattleStylePreference;
}

/**
 * @property max_change - The amount of change.
 * @property pokeathlon_stat - The stat being affected.
 */
export interface NatureStatChange {
  max_change: number;
  pokeathlon_stat: number;
}

/**
 * @property low_hp_preference - Chance of using the move, in percent, if HP is under one half.
 * @property high_hp_preference - Chance of using the move, in percent, if HP is over one half.
 * @property move_battle_style - The move battle style.
 */
export interface MoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: NamedAPIResource;
}
