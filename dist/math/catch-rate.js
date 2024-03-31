"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCatchComboBonusLGP = exports.getGenICatchRate = void 0;
const getGenICatchRate = () => { };
exports.getGenICatchRate = getGenICatchRate;
const getCatchComboBonusLGP = ({ combo, maxRepel, shinyCharm, }) => {
    if (combo <= 5) {
        return {
            sameSpecieChance: 0,
            guaranteedMaxIVs: 0,
            shinyRate: {
                fullOdds: 0,
                lureOnly: 0,
                shinyCharm: 0,
                shinyCharmWithLure: 0,
            },
            rareRespawnChance: 0,
        };
    }
    else if (combo <= 10) {
        return {
            sameSpecieChance: 0,
            guaranteedMaxIVs: 0,
            shinyRate: {
                fullOdds: 0,
                lureOnly: 0,
                shinyCharm: 0,
                shinyCharmWithLure: 0,
            },
            rareRespawnChance: 0,
        };
    }
    else if (combo <= 20) {
        return {
            sameSpecieChance: 0,
            guaranteedMaxIVs: 0,
            shinyRate: {
                fullOdds: 0,
                lureOnly: 0,
                shinyCharm: 0,
                shinyCharmWithLure: 0,
            },
            rareRespawnChance: 0,
        };
    }
    else if (combo <= 30) {
        return {
            sameSpecieChance: 0,
            guaranteedMaxIVs: 0,
            shinyRate: {
                fullOdds: 0,
                lureOnly: 0,
                shinyCharm: 0,
                shinyCharmWithLure: 0,
            },
            rareRespawnChance: 0,
        };
    }
    else {
        return {
            sameSpecieChance: 0,
            guaranteedMaxIVs: 0,
            shinyRate: {
                fullOdds: 0,
                lureOnly: 0,
                shinyCharm: 0,
                shinyCharmWithLure: 0,
            },
            rareRespawnChance: 0,
        };
    }
};
exports.getCatchComboBonusLGP = getCatchComboBonusLGP;
//# sourceMappingURL=catch-rate.js.map