type NatureStatType = 'enhancing' | 'hindering' | 'neutral';
type GetStatValueParams = {
    base: number;
    iv?: number;
    ev?: number;
    isHp?: boolean;
    level?: number;
    nature?: NatureStatType;
    isShedinja?: boolean;
};
/**
 * Returns the Pokémon's final stat value regarding parameters sent
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {number} [params.ev = 0] - The Pokémon's Effort Value (EV) for given stat.
 * @param {number} [params.iv = MAX_IV_VALUE] - The Pokémon's Individual Value (IV) for given stat.
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {NatureStatType} [params.nature = neutral] - If the Pokémon has a hindering, neutral, or enhancing nature.
 * @param {boolean} [params.isShedinja = false] - True if evaluating a stat for {@link https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon) Shedinja}.
 * @returns {number}
 */
export declare const getStatValue: ({ base, ev, iv, isHp, level, nature, isShedinja, }: GetStatValueParams) => number;
/**
 * Returns the Pokémon's final maximum possible stat value regarding parameters sent
 * @param {Object} params - The general parameters used for Pokémon's maximum possible stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {boolean} [params.isShedinja = false] - True if evaluating a stat for {@link https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon) Shedinja}.
 * @returns {number}
 */
export declare const getMaxStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
/**
 * Returns the Pokémon's final minimum possible stat value regarding parameters sent
 * @param {Object} params - The general parameters used for Pokémon's minimum possible stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {boolean} [params.isShedinja = false] - True if evaluating a stat for {@link https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon) Shedinja}.
 * @returns {number}
 */
export declare const getMinStatValue: (params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number;
/**
 * Returns the Pokémon's final stat value regarding parameters sent for Pokémon Red, Blue, Yellow, Gold, Silver, and Crystal games.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {number} [params.ev = 0] - The Pokémon's Effort Value (EV) for given stat.
 * @param {number} [params.iv = MAX_IV_VALUE_PRIOR_GEN3] - The Pokémon's Individual Value (IV) for given stat.
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @returns {number}
 */
export declare const getPriorGenIIIStatValue: ({ base, isHp, ev, iv, level, }: Omit<GetStatValueParams, 'nature' | 'isShedinja'>) => number;
type GetLegendsArceusStatValueParams = {
    base: number;
    isHp?: boolean;
    level?: number;
    effortLevel?: number;
    nature?: NatureStatType;
};
/**
 * Returns the Pokémon's final stat value regarding parameters sent for Pokémon Legends Arceus game.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {number} [params.effortLevel = 0] - The Pokémon's Effort Level for given stat.
 * @param {NatureStatType} [params.nature = neutral] - If the Pokémon has a hindering, neutral, or enhancing nature.
 * @returns {number}
 */
export declare const getLegendsArceusStatValue: ({ base, isHp, level, nature, effortLevel, }: GetLegendsArceusStatValueParams) => number;
/**
 * Returns the Pokémon's Effort Level Multiplier for Pokémon Legends Arceus game.
 * @param {number} effortLevel - The Pokémon's Effort Level.
 * @returns {number}
 */
export declare const getPLAEfforLevelMultiplier: (effortLevel: number) => number;
type GetLetsGoPikachuStatValueParams = {
    base: number;
    isHp?: boolean;
    level?: number;
    iv?: number;
    av?: number;
    nature?: NatureStatType;
    friendship?: number;
};
/**
 * Returns the Pokémon's final stat value regarding parameters sent for Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.base - The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
 * @param {boolean} [params.isHp = false] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.av = 0] - The Pokémon's Awakening Value (AV), also known as Go Power bonus, for given stat.
 * @param {number} [params.iv = MAX_IV_VALUE] - The Pokémon's Individual Vale (IV) for given stat.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @param {number} [params.friendship = 0] - The Pokémon's friendship level.
 * @param {NatureStatType} [params.nature = neutral] - If the Pokémon has a hindering, neutral, or enhancing nature.
 * @returns {number}
 */
export declare const getLetsGoPikachuStatValue: ({ base, isHp, av, iv, level, nature, friendship, }: GetLetsGoPikachuStatValueParams) => number;
/**
 * Returns the Pokémon's Effort Level Multiplier in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.
 * @param {number} friendship - The Pokémon's friendship Level.
 * @returns {number}
 */
export declare const getLGPFriendshipMultiplier: (friendship: number) => number;
type GetCPValueParams = {
    stat: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
    level?: number;
    totalAv?: number;
};
/**
 * Returns the Pokémon's Combat Power in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.
 * @param {Object} params - The general parameters used for Pokémon's stat calculation.
 * @param {number} params.stat - The Pokémon's base stats
 * @param {number} params.stat.hp - The Pokémon's HP stat value
 * @param {number} params.stat.attack - The Pokémon's Attack stat value
 * @param {number} params.stat.defense - The Pokémon's Defense stat value
 * @param {number} params.stat.specialAttack - The Pokémon's Special Attack stat value
 * @param {number} params.stat.specialDefense - The Pokémon's Special Defense stat value
 * @param {number} params.stat.speed - The Pokémon's Speed stat value
 * @param {number} [params.totalAv = 0] - True if evaluating HP stat value for given Pokémon.
 * @param {number} [params.level = 100] - The Pokémon's level.
 * @returns {number}
 */
export declare const getCPValue: ({ stat, totalAv, level, }: GetCPValueParams) => number;
type StageMultiplier = -6 | -5 | -4 | -3 | -2 | -1 | 1 | 2 | 3 | 4 | 5 | 6;
/**
 * Returns the final Pokémon's stat value after applying a scale of stage multipliers.
 * See more on {@link https://bulbapedia.bulbagarden.net/wiki/Stat_modifier Bulbapedia}.
 * @param {number} statValue - the Pokémon stat to apply stage multiplier.
 * @param {StageMultiplier} multiplier - the stage multiplier to apply on Pokémon stat.
 * @returns {number} The Pokémon stat value after stage multiplier.
 */
export declare const getStatWithStage: (statValue: number, multiplier: StageMultiplier) => number;
export {};
