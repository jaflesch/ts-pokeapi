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
export const getCatchComboBonusLGP = ({
  combo,
  lure,
  shinyCharm,
}: GetCatchComboBonusLGPParams): CatchComboBonus => {
  const bonus: CatchComboBonus = {
    sameSpecieChance: 0,
    guaranteedMaxIVs: 0,
    shinyOdds: 1 / 4096,
    shinyRate: {
      fullOdds: 1 / 4096,
      lureOnly: 1 / 2048,
      shinyCharm: 1 / 1365.3,
      shinyCharmWithLure: 1 / 1024,
    },
    rareSpawnChance: 0.005,
  };

  if (combo === 1) {
    bonus.sameSpecieChance = 0.05;
    bonus.guaranteedMaxIVs = 0;
    bonus.shinyRate.fullOdds = 1 / 4096;
    bonus.shinyRate.lureOnly = 1 / 2048;
    bonus.shinyRate.shinyCharm = 1 / 1365.3;
    bonus.shinyRate.shinyCharmWithLure = 1 / 1024;
    bonus.rareSpawnChance = 0.005;
  } else if (combo > 0) {
    if (combo <= 5) {
      bonus.sameSpecieChance = 0.05;
      bonus.guaranteedMaxIVs = 0;
      bonus.shinyRate.fullOdds = 1 / 4096;
      bonus.shinyRate.lureOnly = 1 / 2048;
      bonus.shinyRate.shinyCharm = 1 / 1365.3;
      bonus.shinyRate.shinyCharmWithLure = 1 / 1024;
      bonus.rareSpawnChance = 0.0075;
    } else if (combo <= 10) {
      bonus.sameSpecieChance = 0.15;
      bonus.guaranteedMaxIVs = 1;
      bonus.shinyRate.fullOdds = 1 / 4096;
      bonus.shinyRate.lureOnly = 1 / 2048;
      bonus.shinyRate.shinyCharm = 1 / 1365.3;
      bonus.shinyRate.shinyCharmWithLure = 1 / 1024;
      bonus.rareSpawnChance = 0.01;
    } else if (combo <= 20) {
      bonus.sameSpecieChance = 0.3;
      bonus.guaranteedMaxIVs = 2;
      bonus.shinyRate.fullOdds = 1 / 1024;
      bonus.shinyRate.lureOnly = 1 / 819.2;
      bonus.shinyRate.shinyCharm = 1 / 682.6;
      bonus.shinyRate.shinyCharmWithLure = 1 / 585.14;
      bonus.rareSpawnChance = 0.5;
    } else if (combo <= 30) {
      bonus.sameSpecieChance = 0.4;
      bonus.guaranteedMaxIVs = 3;
      bonus.shinyRate.fullOdds = 1 / 512;
      bonus.shinyRate.lureOnly = 1 / 455.1;
      bonus.shinyRate.shinyCharm = 1 / 409.6;
      bonus.shinyRate.shinyCharmWithLure = 1 / 372.36;
      bonus.rareSpawnChance = 0.5;
    } else {
      bonus.sameSpecieChance = 0.5;
      bonus.guaranteedMaxIVs = 4;
      bonus.shinyRate.fullOdds = 1 / 341.3;
      bonus.shinyRate.lureOnly = 1 / 315.08;
      bonus.shinyRate.shinyCharm = 1 / 292.57;
      bonus.shinyRate.shinyCharmWithLure = 1 / 273.07;
      bonus.rareSpawnChance = 0.5;
    }
  }

  if (lure && shinyCharm) {
    bonus.shinyOdds = bonus.shinyRate.shinyCharmWithLure;
  } else if (lure) {
    bonus.shinyOdds = bonus.shinyRate.lureOnly;
  } else if (shinyCharm) {
    bonus.shinyOdds = bonus.shinyRate.shinyCharm;
  } else {
    bonus.shinyOdds = bonus.shinyRate.fullOdds;
  }

  return bonus;
};

interface CatchComboRange {
  min: number;
  max: number | undefined;
  value: number;
}

type CatchComboReward =
  | 'same-species'
  | 'max-iv'
  | 'shiny'
  | 'shiny-lure'
  | 'shiny-charm'
  | 'shiny-max'
  | 'rare-spawn';

/** Returns all the ranges for a specific type of reward regarding Catch Combo Bonus in Pokémon: Let's Go Pikachu & Lets'Go Eevee.
 * @param {CatchComboReward} reward - The type of reward for Catch Combo Bonus.
 * @returns {CatchComboRange[]} An array with min, max and the reward value for each Catch Combo Range.
 */
export const getCatchComboRangesLGP = (
  reward: CatchComboReward,
): CatchComboRange[] => {
  switch (reward) {
    case 'same-species':
      return [
        { min: 0, max: 0, value: 0 },
        { min: 1, max: 5, value: 0.05 },
        { min: 6, max: 10, value: 0.15 },
        { min: 11, max: 20, value: 0.3 },
        { min: 21, max: 30, value: 0.4 },
        { min: 31, max: undefined, value: 0.5 },
      ];
    case 'max-iv':
      return [
        { min: 0, max: 5, value: 0 },
        { min: 6, max: 10, value: 1 },
        { min: 11, max: 20, value: 2 },
        { min: 21, max: 30, value: 3 },
        { min: 31, max: undefined, value: 4 },
      ];
    case 'rare-spawn':
      return [
        { min: 0, max: 1, value: 0.005 },
        { min: 2, max: 5, value: 0.0075 },
        { min: 6, max: 10, value: 0.01 },
        { min: 11, max: undefined, value: 0.5 },
      ];
    case 'shiny':
      return [
        { min: 0, max: 10, value: 1 / 4096 },
        { min: 11, max: 20, value: 1 / 1024 },
        { min: 21, max: 30, value: 1 / 512 },
        { min: 31, max: undefined, value: 1 / 341.3 },
      ];
    case 'shiny-lure':
      return [
        { min: 0, max: 10, value: 1 / 2048 },
        { min: 11, max: 20, value: 1 / 819.2 },
        { min: 21, max: 30, value: 1 / 455.1 },
        { min: 31, max: undefined, value: 1 / 315.08 },
      ];
    case 'shiny-charm':
      return [
        { min: 0, max: 10, value: 1 / 1365.3 },
        { min: 11, max: 20, value: 1 / 682.6 },
        { min: 21, max: 30, value: 1 / 409.6 },
        { min: 31, max: undefined, value: 1 / 292.57 },
      ];
    case 'shiny-max':
      return [
        { min: 0, max: 10, value: 1 / 1024 },
        { min: 11, max: 20, value: 1 / 585.14 },
        { min: 21, max: 30, value: 1 / 372.36 },
        { min: 31, max: undefined, value: 1 / 273.07 },
      ];
    default:
      return [];
  }
};
