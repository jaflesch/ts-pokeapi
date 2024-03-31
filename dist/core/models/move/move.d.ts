import { AbilityEffectChange } from '../pokemon/';
import { Name, APIResource, VerboseEffect, NamedAPIResource, MachineVersionDetail } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/move/1 https://pokeapi.co/api/v2/move/[id or name]}
 *
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property accuracy - The percent value of how likely this move is to be successful.
 * @property effect_chance - The percent value of how likely it is this moves effect will happen.
 * @property pp - Power points. The number of times this move can be use.
 * @property priority - A value between -8 and 8. Sets the order in which moves are executed during battle. See Bulbapedia for greater detail.
 * @property power - The base power of this move with a value of 0 if it does not have a base power.
 * @property contest_combos - A detail of normal and super contest combos that require this move.
 * @property contest_type - The type of appeal this move gives a Pokémon when used in a contest.
 * @property contest_effect - The effect the move has when used in a contest.
 * @property damage_class - The type of damage the move inflicts on the target, e.g. physical.
 * @property effect_entries - The effect of this move listed in different languages.
 * @property effect_changes - The list of previous effects this move has had across version groups of the games.
 * @property learned_by_pokemon - List of Pokemon that can learn the mov.
 * @property flavor_text_entries - The flavor text of this move listed in different languages.
 * @property generation - The generation in which this move was introduced.
 * @property machines - A list of the machines that teach this move.
 * @property meta - Metadata about this move.
 * @property names - The name of this resource listed in different languages.
 * @property past_values - A list of move resource value changes across version groups of the game.
 * @property stat_changes - A list of stats this moves effects and how much it effects them.
 * @property super_contest_effect - The effect the move has when used in a super contest.
 * @property target - The type of target that will receive the effects of the attack.
 * @property type - The elemental type of this move.
 * */
export interface Move {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: MovePriority;
    power: number;
    contest_combos: ContestComboSet;
    contest_type: NamedAPIResource;
    contest_effect: APIResource;
    damage_class: NamedAPIResource;
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    learned_by_pokemon: NamedAPIResource[];
    flavor_text_entries: MoveFlavorText[];
    generation: NamedAPIResource;
    machines: MachineVersionDetail[];
    meta: MoveMetaData;
    names: Name[];
    past_values: PastMoveStatValues[];
    stat_changes: MoveStatChange[];
    super_contest_effect: APIResource;
    target: NamedAPIResource;
    type: NamedAPIResource;
}
export type MovePriority = -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
/**
 * @property normal - A detail of moves this move can be used before or after, granting additional appeal points in contests
 * @property super - A detail of moves this move can be used before or after, granting additional appeal points in super contests
 */
export interface ContestComboSet {
    normal: ContestComboDetail;
    super: ContestComboDetail;
}
/**
 * @property use_before - A list of moves to use before this move
 * @property use_after - A list of moves to use after this move
 */
export interface ContestComboDetail {
    use_before: NamedAPIResource[];
    use_after: NamedAPIResource[];
}
/**
 * @property flavor_text - The localized flavor text for an api resource in a specific language
 * @property language - The language this name is in
 * @property version_group - The version group that uses this flavor text
 */
export interface MoveFlavorText {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
}
/**
 * @property ailment - The status ailment this move inflicts on its target
 * @property category - The category of move this move falls under, e.g. damage or ailment.
 * @property min_hits - The minimum number of times this move hits. Null if it always only hits once.
 * @property max_hits - The maximum number of times this move hits. Null if it always only hits once.
 * @property min_turns - The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.
 * @property max_turns - The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.
 * @property drain - HP drain (if positive) or Recoil damage (if negative), in percent of damage done.
 * @property healing - The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP.
 * @property crit_rate - Critical hit rate bonus.
 * @property ailment_chance - The likelihood this attack will cause an ailment.
 * @property flinch_chance - The likelihood this attack will cause the target Pokémon to flinch.
 * @property stat_chance - The likelihood this attack will cause a stat change in the target Pokémon.
 */
export interface MoveMetaData {
    ailment: NamedAPIResource;
    category: NamedAPIResource;
    min_hits: number | null;
    max_hits: number | null;
    min_turns: number | null;
    max_turns: number | null;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}
/**
 * @property change	- The amount of change
 * @property stat - The stat being affected
 */
export interface MoveStatChange {
    change: number;
    stat: NamedAPIResource;
}
/**
 * @property accuracy	- The percent value of how likely this move is to be successful
 * @property effect_chance - The percent value of how likely it is this moves effect will take effect
 * @property power - The base power of this move with a value of 0 if it does not have a base power
 * @property pp	- Power points. The number of times this move can be used
 * @property effect_entries	- The effect of this move listed in different languages
 * @property type	- The elemental type of this move
 * @property version_group - The version group in which these move stat values were in effect
 */
export interface PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: VerboseEffect[];
    type: NamedAPIResource;
    version_group: NamedAPIResource;
}
