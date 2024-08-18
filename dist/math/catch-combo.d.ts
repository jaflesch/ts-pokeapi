/**
 * @property combo - The number of captured Pokémon in a row of same specie.
 * @property lure - True if a Lure item is active.
 * @property shinyCharm - True if player has the Shiny Charm key item.
 */
interface GetCatchComboBonusLGPParams {
    combo: number;
    lure?: boolean;
    shinyCharm?: boolean;
}
/**
 * @property sameSpecieChance - The chance of next spawn be the same as the species captured in current combo.
 * @property guaranteedMaxIVs - The number of guaranteed max Individual Values (IVs) for giving Pokémon in a combo.
 * @property shinyOdds - The current shiny odds regarding combination with Lure and Shiny Charm items.
 * @property rareSpawnChance - The chance of a rare spawn appear in the wild.
 * @property shinyRate - An object with different odds regarding combinations with lure and shiny charm items.
 * @property shinyRate.fullOdds - The full odds of given species in current combo spawns shiny.
 * @property shinyRate.lureOnly - The odds of given species in current combo spawns shiny with Lure item.
 * @property shinyRate.shinyCharm - The odds of given species in current combo spawns shiny with Shiny Charm item.
 * @property shinyRate.shinyCharmWithLure - The odds of given species in current combo spawns shiny with both Lure and Shiny Charm item.
 */
interface CatchComboBonus {
    sameSpecieChance: number;
    guaranteedMaxIVs: number;
    shinyOdds: number;
    shinyRate: {
        fullOdds: number;
        lureOnly: number;
        shinyCharm: number;
        shinyCharmWithLure: number;
    };
    rareSpawnChance: number;
}
/** Returns all the Catch Combo bonuses active for given Pokémon combo.
 * @param {Object} params - The general parameters used for get the Catch Combo bonus values.
 * @param {number} params.combo - The number of captured Pokémon in a row of same specie.
 * @param {boolean} [params.lure = false] - True if a Lure item is active.
 * @param {boolean} [params.shinyCharm = false] - True if player has the Shiny Charm key item.
 * @returns {CatchComboBonus} A object with all bonuses.
 */
export declare const getCatchComboBonusLGP: ({ combo, lure, shinyCharm, }: GetCatchComboBonusLGPParams) => CatchComboBonus;
interface CatchComboRange {
    min: number;
    max: number | undefined;
    value: number;
}
export type CatchComboReward = 'same-species' | 'max-iv' | 'shiny' | 'shiny-lure' | 'shiny-charm' | 'shiny-max' | 'rare-spawn';
/** Returns all the ranges for a specific type of reward regarding Catch Combo Bonus in Pokémon: Let's Go Pikachu & Lets'Go Eevee.
 * @param {CatchComboReward} reward - The type of reward for Catch Combo Bonus.
 * @returns {CatchComboRange[]} An array with min, max and the reward value for each Catch Combo Range.
 */
export declare const getCatchComboRangesLGP: (reward: CatchComboReward) => CatchComboRange[];
export {};
