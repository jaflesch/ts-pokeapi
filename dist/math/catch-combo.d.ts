type GetCatchComboBonusLGPParams = {
    combo: number;
    lure?: boolean;
    shinyCharm?: boolean;
};
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
type CatchComboReward = 'same-species' | 'max-iv' | 'shiny' | 'shiny-lure' | 'shiny-charm' | 'shiny-max' | 'rare-spawn';
/** Returns all the ranges for a specific type of reward regarding Catch Combo Bonus in Pokémon: Let's Go Pikachu & Lets'Go Eevee.
 * @param {CatchComboReward} reward - The type of reward for Catch Combo Bonus.
 * @returns {CatchComboRange[]} An array with min, max and the reward value for each Catch Combo Range.
 */
export declare const getCatchComboRangesLGP: (reward: CatchComboReward) => CatchComboRange[];
export {};
