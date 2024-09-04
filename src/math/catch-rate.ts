import {
  Pokemon,
  BallName,
  StatusName,
  GenderName,
  PokemonSpecie,
} from '../core';
import { getStatValue } from './stat';
import {
  isUltraBeast,
  hasComatoseAbility,
  evolvesFromMoonStone,
} from '../utils';

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

interface BallBonusExtraParams {
  pokemon: string;
  types: Pokemon['types'];
  level: number;
  underwater: boolean;
  onWater: boolean;
  registered: boolean;
  turn: number;
  night: boolean;
  cave: boolean;
  speed: number;
  status: StatusName;
  ownPokemon?: {
    name?: string;
    level?: number;
    gender?: GenderName;
  };
  gender?: GenderName;
}

function down(x: number) {
  return Math.floor(x * 4096) / 4096;
}
function round(x: number) {
  return Math.round(x * 4096) / 4096;
}

function percent(number: number) {
  return Math.round(number * 100000) / 1000;
}

function getCurrentHp(maxHp: number, currHp: number | string) {
  if (currHp === 1) {
    return 1;
  }
  if (typeof currHp === 'string') {
    let value = Number(currHp.replace('%', ''));
    if (value > 100) {
      value = 100;
    } else if (value < 1) {
      value = 1;
    }

    return Math.max(1, Math.round((maxHp * value) / 100));
  }
  return Math.max(1, currHp);
}

function getStatus(status: StatusName) {
  const status_mods = {
    none: 1,
    poisoned: 1.5,
    'badly-poisoned': 1.5,
    burned: 1.5,
    paralyzed: 1.5,
    frozen: 2.5,
    asleep: 2.5,
  };
  return status_mods[status];
}

function getBallBonus(ball: BallName, extra: BallBonusExtraParams) {
  if (
    isUltraBeast(extra.pokemon) &&
    ball !== 'beast-ball' &&
    ball !== 'master-ball'
  ) {
    return 410 / 4096;
  }

  switch (ball) {
    case 'great-ball':
      return 1.5;
    case 'ultra-ball':
      return 2;
    case 'net-ball': {
      const types = extra.types.map((t) => t.type.name);
      if (types.includes('bug') || types.includes('water')) {
        return 3.5;
      } else {
        return 1;
      }
    }
    case 'nest-ball':
      if (extra.level < 30) {
        return Math.max(1, (41 - extra.level) / 10);
      } else {
        return 1;
      }
    case 'dive-ball':
      if (extra.underwater) {
        return 3.5;
      } else {
        return 1;
      }
    case 'lure-ball':
      if (extra.onWater) {
        return 4;
      } else {
        return 1;
      }
    case 'repeat-ball':
      if (extra.registered) {
        return 3.5;
      } else {
        return 1;
      }
    case 'timer-ball':
      return Math.min(4, 1 + ((extra.turn - 1) * 1229) / 4096);
    case 'quick-ball':
      if (extra.turn === 1) {
        return 5;
      } else {
        return 1;
      }
    case 'dusk-ball':
      if (extra.night || extra.cave) {
        return 3;
      } else {
        return 1;
      }
    case 'fast-ball':
      if (extra.speed >= 100) {
        return 4;
      } else {
        return 1;
      }
    case 'level-ball': {
      if (extra.ownPokemon && extra.ownPokemon.level) {
        if (Math.floor(extra.ownPokemon.level / 4) >= extra.level) {
          return 8;
        } else if (Math.floor(extra.ownPokemon.level / 2) >= extra.level) {
          return 4;
        } else if (extra.ownPokemon.level > extra.level) {
          return 2;
        } else {
          return 1;
        }
      }
      return 1;
    }
    case 'love-ball':
      if (extra.ownPokemon) {
        if (
          extra.ownPokemon.name === extra.pokemon &&
          ((extra.gender === 'male' && extra.ownPokemon.gender === 'female') ||
            (extra.gender === 'female' && extra.ownPokemon.gender === 'male'))
        ) {
          return 8;
        } else {
          return 1;
        }
      }
      return 1;
    case 'moon-ball':
      if (evolvesFromMoonStone(extra.pokemon)) {
        return 4;
      } else {
        return 1;
      }
    case 'beast-ball':
      if (isUltraBeast(extra.pokemon)) {
        return 5;
      } else {
        return 410 / 4096;
      }
    case 'dream-ball':
      if (extra.status === 'asleep' || hasComatoseAbility(extra.pokemon)) {
        return 4;
      }
      return 1;
    default:
      return 1;
  }
}

function getRateModifier(rate: number, weight: number, ball: BallName) {
  let modifier = rate;
  if (ball === 'heavy-ball') {
    if (weight >= 3000) {
      modifier += 30;
    } else if (weight >= 2000) {
      modifier += 20;
    } else if (weight < 1000) {
      modifier -= 20;
    }
  }
  return Math.max(modifier, 1);
}

function getBadgePenalty(badges: NumBadges, level: number) {
  const badgeLevels = [25, 30, 35, 40, 45, 50, 55, 60, 100];
  let penalty = 1;
  if (badges < 8) {
    for (let i = 0; badgeLevels[badges + i] < level; i++) {
      penalty = Math.fround(penalty * 0.8);
    }
    penalty = round(penalty);
  }

  return penalty;
}

function getCapturePower(capturePower: CapturePower, offGuard: boolean) {
  const capture_powers = [1, 1.1, 1.25, 2];
  return (capture_powers[capturePower] || 1) * (offGuard ? 2 : 1);
}

function pokedexCriticalValue(pokedex: number) {
  const pvals = [0, 0.5, 1, 1.5, 2, 2.5];
  let dexcat = 0;
  if (pokedex > 30) {
    dexcat++;
  }
  if (pokedex > 150) {
    dexcat++;
  }
  if (pokedex > 300) {
    dexcat++;
  }
  if (pokedex > 450) {
    dexcat++;
  }
  if (pokedex > 600) {
    dexcat++;
  }
  return pvals[dexcat];
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
function catchRateGenIX(params: CatchRateGenIXParams): CatchRateGenIXResult {
  const { pokemon } = params;
  if (params.ball === 'master-ball' || params.raid) {
    return {
      success: 100,
      critChance: 0,
      critSuccess: 0,
      finalChance: 100,
    };
  }
  const hpStat = pokemon.stats.find((s) => s.stat.name === 'hp');

  const maxhp = getStatValue({
    isHp: true,
    iv: params.iv ?? 31,
    level: params.level,
    base: hpStat!.base_stat,
  });
  const hpParam = 3 * maxhp - 2 * getCurrentHp(maxhp, params.currHp ?? '100%');
  const darkGrass = 1;
  const captureRate = getRateModifier(
    params.captureRate,
    pokemon.weight,
    params.ball,
  );
  const speedStat = pokemon.stats.find((s) => s.stat.name === 'speed');
  const ballBonus = getBallBonus(params.ball, {
    pokemon: pokemon.name,
    types: pokemon.types,
    speed: speedStat!.base_stat,
    turn: params.turn ?? 1,
    cave: params.cave ?? false,
    level: params.level,
    night: params.night ?? false,
    gender: params.gender,
    status: params.status ?? 'none',
    onWater: params.onWater ?? false,
    underwater: params.underwater ?? false,
    registered: params.registered ?? false,
    ownPokemon: params.ownPokemon,
  });

  const statusMod = getStatus(params.status ?? 'none');
  const badgePenalty = getBadgePenalty(params.badges ?? 8, params.level);
  const lowLevelModifier = params.level < 13 ? (36 - 2 * params.level) / 10 : 1;
  const difficultMod = getCapturePower(
    params.capturePower ?? 0,
    params.offGuard ?? false,
  );

  const r1 = round(
    round(round(hpParam * darkGrass) * captureRate * ballBonus) * badgePenalty,
  );
  const d1 = down((r1 / (3 * maxhp)) * lowLevelModifier);
  const x = round(d1 * statusMod * difficultMod);
  const cvd = round(
    65536 / round(Math.fround(Math.pow(round(255 / x), 3 / 16))),
  );
  const y = x === 0 ? 0 : Math.floor(cvd);

  let breakoutAttempt = y / 65536;
  if (breakoutAttempt > 1) {
    breakoutAttempt = 1;
  }
  const successChance = Math.pow(breakoutAttempt, 4);

  const charm = params.charm ? 2 : 1;
  const p = pokedexCriticalValue(params.pokedex ?? 0);
  const cc = params.raid
    ? 0
    : Math.floor(round(Math.min(x, 255) * p * charm) / 6);

  const critChance = Math.min(1, cc / 256);
  const finalchance =
    critChance * breakoutAttempt + (1 - critChance) * successChance;

  return {
    success: percent(successChance),
    critChance: percent(critChance),
    critSuccess: percent(breakoutAttempt),
    finalChance: percent(finalchance),
  };
}

export const catchRate = {
  sv: catchRateGenIX,
};
