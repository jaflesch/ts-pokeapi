import { describe, expect, it } from '@jest/globals';
import { getCatchComboBonusLGP, getCatchComboRangesLGP } from '../catch-combo';

describe("Pokémon Let's GO Pikachu & Eevee Same Species Chance Catch Combo Bonus", () => {
  it('returns no bonus when combo is zero', () => {
    expect(
      getCatchComboBonusLGP({
        combo: 0,
      }),
    ).toStrictEqual({
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
    });
  });

  it('returns 5% bonus when combo is 1', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 1,
    });
    expect(bonus.sameSpecieChance).toBe(0.05);
  });
  it('returns 5% bonus when combo is 5', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 5,
    });
    expect(bonus.sameSpecieChance).toBe(0.05);
  });

  it('returns 15% bonus when combo is 6', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 6,
    });
    expect(bonus.sameSpecieChance).toBe(0.15);
  });
  it('returns 15% bonus when combo is 10', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
    });
    expect(bonus.sameSpecieChance).toBe(0.15);
  });
  it('returns 30% bonus when combo is 11', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
    });
    expect(bonus.sameSpecieChance).toBe(0.3);
  });
  it('returns 30% bonus when combo is 20', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 20,
    });
    expect(bonus.sameSpecieChance).toBe(0.3);
  });
  it('returns 40% bonus when combo is 21', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 21,
    });
    expect(bonus.sameSpecieChance).toBe(0.4);
  });
  it('returns 40% bonus when combo is 30', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 30,
    });
    expect(bonus.sameSpecieChance).toBe(0.4);
  });
  it('returns 50% bonus when combo is 31', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 31,
    });
    expect(bonus.sameSpecieChance).toBe(0.5);
  });
  it('returns 50% bonus when combo is 31+', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 100,
    });
    expect(bonus.sameSpecieChance).toBe(0.5);
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Perfect IVs Catch Combo Bonus", () => {
  it('returns no bonus when combo is zero', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 0,
    });
    expect(bonus.sameSpecieChance).toBe(0);
  });

  it('returns no bonus when combo is 5', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 5,
    });
    expect(bonus.sameSpecieChance).toBe(0.05);
  });
  it('returns 1 Guaranteed Max IV when combo is 6', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 6,
    });
    expect(bonus.guaranteedMaxIVs).toBe(1);
  });

  it('returns 1 Guaranteed Max IV when combo is 10', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
    });
    expect(bonus.guaranteedMaxIVs).toBe(1);
  });

  it('returns 2 Guaranteed Max IVs when combo is 11', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
    });
    expect(bonus.guaranteedMaxIVs).toBe(2);
  });
  it('returns 2 Guaranteed Max IVs when combo is 20', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 20,
    });
    expect(bonus.guaranteedMaxIVs).toBe(2);
  });

  it('returns 3 Guaranteed Max IV when combo is 21', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 21,
    });
    expect(bonus.guaranteedMaxIVs).toBe(3);
  });
  it('returns 3 Guaranteed Max IV when combo is 30', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 30,
    });
    expect(bonus.guaranteedMaxIVs).toBe(3);
  });

  it('returns 3 Guaranteed Max IV when combo is 31', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 31,
    });
    expect(bonus.guaranteedMaxIVs).toBe(4);
  });
  it('returns 3 Guaranteed Max IV when combo is 31+', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 100,
    });
    expect(bonus.guaranteedMaxIVs).toBe(4);
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rare Spawns Catch Combo Bonus", () => {
  it('returns 0.5% bonus when combo is zero', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 0,
    });
    expect(bonus.rareSpawnChance).toBe(0.005);
  });
  it('returns 0.5% bonus when combo is 1', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 1,
    });
    expect(bonus.rareSpawnChance).toBe(0.005);
  });

  it('returns 0.75% bonus when combo is 2', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 2,
    });
    expect(bonus.rareSpawnChance).toBe(0.0075);
  });
  it('returns 0.75% bonus when combo is 5', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 5,
    });
    expect(bonus.rareSpawnChance).toBe(0.0075);
  });

  it('returns 1% bonus when combo is 6', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 6,
    });
    expect(bonus.rareSpawnChance).toBe(0.01);
  });
  it('returns 1% bonus when combo is 10', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
    });
    expect(bonus.rareSpawnChance).toBe(0.01);
  });

  it('returns 1% bonus when combo is 11', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
    });
    expect(bonus.rareSpawnChance).toBe(0.5);
  });
  it('returns 1% bonus when combo is 11+', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 100,
    });
    expect(bonus.rareSpawnChance).toBe(0.5);
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rare Spawns Catch Combo Bonus", () => {
  it('returns 0.5% bonus when combo is zero', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 0,
    });
    expect(bonus.rareSpawnChance).toBe(0.005);
  });
  it('returns 0.5% bonus when combo is 1', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 1,
    });
    expect(bonus.rareSpawnChance).toBe(0.005);
  });

  it('returns 0.75% bonus when combo is 2', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 2,
    });
    expect(bonus.rareSpawnChance).toBe(0.0075);
  });
  it('returns 0.75% bonus when combo is 5', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 5,
    });
    expect(bonus.rareSpawnChance).toBe(0.0075);
  });

  it('returns 1% bonus when combo is 6', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 6,
    });
    expect(bonus.rareSpawnChance).toBe(0.01);
  });
  it('returns 1% bonus when combo is 10', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
    });
    expect(bonus.rareSpawnChance).toBe(0.01);
  });

  it('returns 50% bonus when combo is 11', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
    });
    expect(bonus.rareSpawnChance).toBe(0.5);
  });
  it('returns 50% bonus when combo is 11+', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 100,
    });
    expect(bonus.rareSpawnChance).toBe(0.5);
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Shiny Odds Catch Combo Bonus", () => {
  it('returns 1 / 4096 when combo is zero, no lure and shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 0,
    });
    expect(bonus.shinyOdds).toBe(1 / 4096);
  });
  it('returns 1 / 2048 when combo is zero, with lure, but no shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 0,
      lure: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 2048);
  });
  it('returns 1 / 1365.3 when combo is zero, with shiny charm, but no lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 0,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 1365.3);
  });
  it('returns 1 / 1024 when combo is zero, with shiny charm and lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 0,
      lure: true,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 1024);
  });

  it('returns 1 / 4096 when combo is 10, no lure and shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
    });
    expect(bonus.shinyOdds).toBe(1 / 4096);
  });
  it('returns 1 / 2048 when combo is 10, with lure, but no shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
      lure: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 2048);
  });
  it('returns 1 / 1365.3 when combo is 10, with shiny charm, but no lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 1365.3);
  });
  it('returns 1 / 1024 when combo is 10, with shiny charm and lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 10,
      lure: true,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 1024);
  });

  it('returns 1 / 1024 when combo is 11, no lure and shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
    });
    expect(bonus.shinyOdds).toBe(1 / 1024);
  });
  it('returns 1 / 819.2 when combo is 11, with lure, but no shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
      lure: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 819.2);
  });
  it('returns 1 / 682.6 when combo is 11, with shiny charm, but no lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 682.6);
  });
  it('returns 1 / 585.14 when combo is 11, with shiny charm and lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 11,
      lure: true,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 585.14);
  });

  it('returns 1 / 1024 when combo is 20, no lure and shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 20,
    });
    expect(bonus.shinyOdds).toBe(1 / 1024);
  });
  it('returns 1 / 819.2 when combo is 20, with lure, but no shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 20,
      lure: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 819.2);
  });
  it('returns 1 / 682.6 when combo is 20, with shiny charm, but no lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 20,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 682.6);
  });
  it('returns 1 / 585.14 when combo is 20, with shiny charm and lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 20,
      lure: true,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 585.14);
  });

  it('returns 1 / 512 when combo is 21, no lure and shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 21,
    });
    expect(bonus.shinyOdds).toBe(1 / 512);
  });
  it('returns 1 / 455.1 when combo is 21, with lure, but no shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 21,
      lure: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 455.1);
  });
  it('returns 1 /  409.6 when combo is 21, with shiny charm, but no lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 21,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 409.6);
  });
  it('returns 1 / 372.36 when combo is 21, with shiny charm and lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 21,
      lure: true,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 372.36);
  });

  it('returns 1 / 512 when combo is 30, no lure and shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 30,
    });
    expect(bonus.shinyOdds).toBe(1 / 512);
  });
  it('returns 1 / 455.1 when combo is 30, with lure, but no shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 30,
      lure: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 455.1);
  });
  it('returns 1 /  409.6 when combo is 30, with shiny charm, but no lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 30,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 409.6);
  });
  it('returns 1 / 372.36 when combo is 30, with shiny charm and lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 30,
      lure: true,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 372.36);
  });

  it('returns 1 / 341.3 when combo is 31, no lure and shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 31,
    });
    expect(bonus.shinyOdds).toBe(1 / 341.3);
  });
  it('returns 1 / 315.08 when combo is 31, with lure, but no shiny charm', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 31,
      lure: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 315.08);
  });
  it('returns 1 /  292.57 when combo is 31, with shiny charm, but no lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 31,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 292.57);
  });
  it('returns 1 / 273.07 when combo is 31, with shiny charm and lure', () => {
    const bonus = getCatchComboBonusLGP({
      combo: 31,
      lure: true,
      shinyCharm: true,
    });
    expect(bonus.shinyOdds).toBe(1 / 273.07);
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rewards Same Species Bonus Range", () => {
  const rates = getCatchComboRangesLGP('same-species');

  it('should return an array of 6 rewards ranges', () => {
    expect(rates).toHaveLength(6);
  });

  it('should return min and max values por each reward range', () => {
    for (const rate of rates) {
      const bonusMin = getCatchComboBonusLGP({
        combo: rate.min,
      });
      expect(bonusMin.sameSpecieChance).toBe(rate.value);
      const bonusMax = getCatchComboBonusLGP({
        combo: rate.max ?? rate.min,
      });
      expect(bonusMax.sameSpecieChance).toBe(rate.value);
    }
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rewards Perfect IVs Bonus Range", () => {
  const rates = getCatchComboRangesLGP('max-iv');

  it('should return an array of 5 rewards ranges', () => {
    expect(rates).toHaveLength(5);
  });

  it('should return min and max values por each reward range', () => {
    for (const rate of rates) {
      const bonusMin = getCatchComboBonusLGP({
        combo: rate.min,
      });
      expect(bonusMin.guaranteedMaxIVs).toBe(rate.value);
      const bonusMax = getCatchComboBonusLGP({
        combo: rate.max ?? rate.min,
      });
      expect(bonusMax.guaranteedMaxIVs).toBe(rate.value);
    }
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rewards Rare Spawns Bonus Range", () => {
  const rates = getCatchComboRangesLGP('rare-spawn');

  it('should return an array of 4 rewards ranges', () => {
    expect(rates).toHaveLength(4);
  });

  it('should return min and max values por each reward range', () => {
    for (const rate of rates) {
      const bonusMin = getCatchComboBonusLGP({
        combo: rate.min,
      });
      expect(bonusMin.rareSpawnChance).toBe(rate.value);
      const bonusMax = getCatchComboBonusLGP({
        combo: rate.max ?? rate.min,
      });
      expect(bonusMax.rareSpawnChance).toBe(rate.value);
    }
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rewards Shiny (Full odds) Bonus Range", () => {
  const rates = getCatchComboRangesLGP('shiny');

  it('should return an array of 4 rewards ranges', () => {
    expect(rates).toHaveLength(4);
  });

  it('should return min and max values por each reward range', () => {
    for (const rate of rates) {
      const bonusMin = getCatchComboBonusLGP({
        combo: rate.min,
      });
      expect(bonusMin.shinyOdds).toBe(rate.value);
      const bonusMax = getCatchComboBonusLGP({
        combo: rate.max ?? rate.min,
      });
      expect(bonusMax.shinyOdds).toBe(rate.value);
    }
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rewards Shiny (Lure only) Bonus Range", () => {
  const rates = getCatchComboRangesLGP('shiny-lure');

  it('should return an array of 4 rewards ranges', () => {
    expect(rates).toHaveLength(4);
  });

  it('should return min and max values por each reward range', () => {
    for (const rate of rates) {
      const bonusMin = getCatchComboBonusLGP({
        combo: rate.min,
        lure: true,
      });
      expect(bonusMin.shinyOdds).toBe(rate.value);
      const bonusMax = getCatchComboBonusLGP({
        combo: rate.max ?? rate.min,
        lure: true,
      });
      expect(bonusMax.shinyOdds).toBe(rate.value);
    }
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rewards Shiny (Charm only) Bonus Range", () => {
  const rates = getCatchComboRangesLGP('shiny-charm');

  it('should return an array of 4 rewards ranges', () => {
    expect(rates).toHaveLength(4);
  });

  it('should return min and max values por each reward range', () => {
    for (const rate of rates) {
      const bonusMin = getCatchComboBonusLGP({
        combo: rate.min,
        shinyCharm: true,
      });
      expect(bonusMin.shinyOdds).toBe(rate.value);
      const bonusMax = getCatchComboBonusLGP({
        combo: rate.max ?? rate.min,
        shinyCharm: true,
      });
      expect(bonusMax.shinyOdds).toBe(rate.value);
    }
  });
});

describe("Pokémon Let's GO Pikachu & Eevee Rewards Shiny (Lure and Charm) Bonus Range", () => {
  const rates = getCatchComboRangesLGP('shiny-max');

  it('should return an array of 4 rewards ranges', () => {
    expect(rates).toHaveLength(4);
  });

  it('should return min and max values por each reward range', () => {
    for (const rate of rates) {
      const bonusMin = getCatchComboBonusLGP({
        combo: rate.min,
        lure: true,
        shinyCharm: true,
      });
      expect(bonusMin.shinyOdds).toBe(rate.value);
      const bonusMax = getCatchComboBonusLGP({
        combo: rate.max ?? rate.min,
        lure: true,
        shinyCharm: true,
      });
      expect(bonusMax.shinyOdds).toBe(rate.value);
    }
  });
});
