import { NatureName, PokemonStatId, PokemonStatName } from '../core';
export type GetNatureNameParam = PokemonStatId.ATTACK | PokemonStatId.DEFENSE | PokemonStatId.SPECIAL_ATTACK | PokemonStatId.SPECIAL_DEFENSE | PokemonStatId.SPEED | PokemonStatName.ATTACK | PokemonStatName.DEFENSE | PokemonStatName.SPECIAL_ATTACK | PokemonStatName.SPECIAL_DEFENSE | PokemonStatName.SPEED;
/**
 * Returns Pokémon Nature regarding increased and decreased stats. Valid stats are only Attack, Defense, Special Attack, Special Defense, and Speed.
 * @param { PokemonStatId | PokemonStatName} increase - Increased stat of nature.
 * @param { PokemonStatId | PokemonStatName} decrease - Decreased stat of nature.
 * @returns {NatureName} Nature name.
 */
export declare const getNatureName: (increase: GetNatureNameParam, decrease: GetNatureNameParam) => NatureName | null;
