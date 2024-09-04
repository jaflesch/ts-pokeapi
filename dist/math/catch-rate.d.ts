import { Pokemon, BallName, StatusName, GenderName, PokemonSpecie } from '../core';
type NumBadges = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type CapturePower = 0 | 1 | 2 | 3;
export interface CatchRateGenIXParams {
    pokemon: Pokemon;
    level: number;
    ball: BallName;
    captureRate: PokemonSpecie['capture_rate'];
    raid?: boolean;
    iv?: number;
    currHp?: number | string;
    status?: StatusName;
    badges?: NumBadges;
    offGuard?: boolean;
    capturePower?: CapturePower;
    turn?: number;
    night?: boolean;
    cave?: boolean;
    gender?: GenderName;
    ownPokemon?: {
        name?: string;
        level?: number;
        gender?: GenderName;
    };
    onWater?: boolean;
    underwater?: boolean;
    registered?: boolean;
    charm?: boolean;
    pokedex?: number;
}
export interface CatchRateGenIXResult {
    success: number;
    critChance: number;
    critSuccess: number;
    finalChance: number;
}
/** Returns a report with the chances of successful capture, critical throw and capture, and total chances of capturing
 * a Pokémon under different conditions in Pokémon Scarlet and Violet.
 * @param {CatchRateGenIXParams} params - The parameters for determine the capture chances.
 * @param {Pokemon} params.pokemon - A PokéAPI Pokemon resource.
 * @param {BallName} params.ball - The Poké Ball type thrown.
 * @param {number} params.captureRate - The individual Pokémon's capture rate.
 * @param {boolean} [params.raid] - Wheter the combat is on a Tera raid battle.
 * @param {number} [params.iv] - The Pokémon's HP Individual Value (IV).
 * @param {number | string} params.currHp - The Pokémon's current HP.
 * @param {StatusName} params.status - The current Pokémon's status condition in battle.
 * @param {NumBadges} params.badges - The number of badges the player has.
 * @param {boolean} params.offGuard - Wheter you catch the Pokémon off guard or not, i.e, by starting the battle with a backstrike or running into it unawares.
 * @param {CapturePower} params.capturePower - The Capture Power level from sandwich eaten.
 * @param {number} params.turn - The current battle turn.
 * @param {boolean} params.night - Wheter the battle is happening on nighttime.
 * @param {boolean} params.cave - Wheter the battle is happening at cave.
 * @param {boolean} params.onWater - Wheter the Pokémon is on water (Pokémon that always fly in battle do not count).
 * @param {boolean} params.underwater - Wheter the Pokémon is in or directly above water (Pokémon flying higher above the water do not count).
 * @param {boolean} params.gender - The Pokémon's gender.
 * @param {boolean} params.registered - If the Pokémon is already registered on Pokédex.
 * @param {object} params.ownPokemon - An object with relevant information about player's Pokémon.
 * @param {string} params.ownPokemon.name - The name from player's Pokémon.
 * @param {number} params.ownPokemon.level - The level from player's Pokémon.
 * @param {GenderName} params.ownPokemon.gender - The gender from player's Pokémon.
 * @param {boolean} params.charm - Wheter the player has the {@link https://bulbapedia.bulbagarden.net/wiki/Catching_Charm Chatching Charm}.
 * @param {number} params.pokedex - The total number of species registered on Pokédex.
 * @returns {CatchRateGenIXResult} An object with detailed capture chances.
 */
declare function catchRateGenIX(params: CatchRateGenIXParams): CatchRateGenIXResult;
export declare const catchRate: {
    sv: typeof catchRateGenIX;
};
export {};
