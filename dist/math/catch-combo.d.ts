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
export declare const getCatchComboBonusLGP: ({ combo, lure, shinyCharm, }: GetCatchComboBonusLGPParams) => CatchComboBonus;
interface CatchComboRate {
    min: number;
    max: number | undefined;
    value: number;
}
type CatchComboReward = 'same-species' | 'max-iv' | 'shiny' | 'shiny-lure' | 'shiny-charm' | 'shiny-max' | 'rare-spawn';
export declare const getCatchComboRatesLGP: (reward: CatchComboReward) => CatchComboRate[];
export {};
