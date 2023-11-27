import { Effect, Name, NamedAPIResource, VerboseEffect } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/encounter-condition-value/1 https://pokeapi.co/api/v2/encounter-condition-value/[id or name]}
 *
 * Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out {@link https://bulbapedia.bulbagarden.net/wiki/Ability Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property is_main_series - hether or not this ability originated in the main series of the video games.
 * @property generation - The generation this ability originated in.
 * @property names - The name of this resource listed in different languages.
 * @property effect_entries - The effect of this ability listed in different languages.
 * @property effect_changes - The list of previous effects this ability has had across version groups.
 * @property flavor_text_entries - The flavor text of this ability listed in different languages.
 * @property pokemon - A list of Pokémon that could potentially have this ability.
 */
export type Ability = {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: NamedAPIResource;
    names: Name[];
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[];
    pokemon: AbilityPokemon[];
};
/**
 * @property effect_entries - The previous effect of this ability listed in different languages.
 * @property version_group - The version group in which the previous effect of this ability originated.
 */
export type AbilityEffectChange = {
    effect_entries: Effect[];
    version_group: NamedAPIResource;
};
/**
 * @property flavor_text - The previous effect of this ability listed in different languages
 * @property language - The language this text resource is in.
 * @property version_group - The version group that uses this flavor text.
 */
export type AbilityFlavorText = {
    flavor_text: string;
    language: NamedAPIResource;
    version_group: NamedAPIResource;
};
/**
 * @property is_hidden - Whether or not this a hidden ability for the referenced Pokémon.
 * @property slot - Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon.
 * @property pokemon - The Pokémon this ability could belong to.
 */
export type AbilityPokemon = {
    is_hidden: boolean;
    slot: number;
    pokemon: NamedAPIResource;
};
