export declare const getGenICatchRate: () => void;
type GetCatchComboBonusLGPParams = {
    combo: number;
    shinyCharm?: boolean;
    maxRepel?: boolean;
};
interface CatchComboBonus {
    sameSpecieChance: number;
    guaranteedMaxIVs: number;
    shinyRate: {
        fullOdds: number;
        lureOnly: number;
        shinyCharm: number;
        shinyCharmWithLure: number;
    };
    rareRespawnChance: number;
}
export declare const getCatchComboBonusLGP: ({ combo, maxRepel, shinyCharm, }: GetCatchComboBonusLGPParams) => CatchComboBonus;
export {};
