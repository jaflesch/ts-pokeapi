import { NatureName, PokemonSpecie } from '../core';
import { PokemonTypeName } from '../pokemon-type';
interface FormatParams {
    pokemon: string | PokemonSpecie;
    level?: number;
    gender?: 'male' | 'female' | 'genderless';
    happiness?: number;
    shiny?: boolean;
    tera?: PokemonTypeName;
    nickname?: string;
    item?: string;
    ability?: string;
    moves: [string, string?, string?, string?];
    nature?: NatureName;
    ivs?: {
        hp?: number;
        attack?: number;
        defense?: number;
        specialAttack?: number;
        specialDefense?: number;
        speed?: number;
    };
    evs?: {
        hp?: number;
        attack?: number;
        defense?: number;
        specialAttack?: number;
        specialDefense?: number;
        speed?: number;
    };
}
export declare const format: ({ pokemon, level, shiny, gender, ivs, evs, tera, item, moves, nature, ability, nickname, happiness, }: FormatParams) => string;
export {};
