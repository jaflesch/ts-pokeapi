import { PokemonStatId, PokemonStatName } from '../core';
type GetNatureNameParam = PokemonStatId.ATTACK | PokemonStatId.DEFENSE | PokemonStatId.SPECIAL_ATTACK | PokemonStatId.SPECIAL_DEFENSE | PokemonStatId.SPEED | PokemonStatName.ATTACK | PokemonStatName.DEFENSE | PokemonStatName.SPECIAL_ATTACK | PokemonStatName.SPECIAL_DEFENSE | PokemonStatName.SPEED;
export declare const getNatureName: (increase: GetNatureNameParam, decrease: GetNatureNameParam) => "Hardy" | "Lonely" | "Adamant" | "Naughty" | "Brave" | "Bold" | "Docile" | "Impish" | "Lax" | "Relaxed" | "Modest" | "Mild" | "Bashful" | "Rash" | "Quiet" | "Calm" | "Gentle" | "Careful" | "Quirky" | "Sassy" | "Timid" | "Hasty" | "Jolly" | "Naive" | "Serious" | undefined;
export {};
