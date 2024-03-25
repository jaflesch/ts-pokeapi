/**
 * Returns true if given value is a valid Pokémon level.
 * @param {number} level {number} - Pokémon level.
 * @returns {boolean}
 */
export declare const isValidPokemonLevel: (level: number) => boolean;
/**
 * Returns true if given value is a valid Pokémon base stat.
 * @param {number} baseStat - Base stat of Pokémon.
 * @returns {boolean}
 */
export declare const isValidBaseStat: (baseStat: number) => boolean;
/**
 * Returns true if given value is a valid Pokémon individual value (IV).
 * @param {number} iv - The Pokémon IV.
 * @returns {boolean}
 */
export declare const isValidIV: (iv: number) => boolean;
/**
 * Returns true if given value is a valid Pokémon effort value (EV).
 * @param {number} ev - The Pokémon EV.
 * @returns {boolean}
 */
export declare const isValidEV: (ev: number) => boolean;
/**
 * Returns true if given value is a valid sum of all Pokémon effort values (EV).
 * @param {number} totalEvs - The sum of all Pokémon's EVs.
 * @returns {boolean}
 */
export declare const isValidTotalEVs: (totalEvs: number) => boolean;
/**
 * Returns true if given value is a valid Pokémon individual value (IV) prior Generation III games.
 * @param {number} iv - The Pokémon IV.
 * @returns {boolean}
 */
export declare const isValidIVPriorGen3: (iv: number) => boolean;
/**
 * Returns true if given value is a valid Pokémon effort value (EV) prior Generation III games.
 * @param {number} ev - The Pokémon EV.
 * @returns {boolean}
 */
export declare const isValidEVPriorGen3: (ev: number) => boolean;
/**
 * Returns true if given value is a valid Effort Level on Pokémon Legends Arceus game.
 * @param {number} effortLevel - The Pokémon Effort Level.
 * @returns {boolean}
 */
export declare const isValidEffortLevel: (effortLevel: number) => boolean;
/**
 * Returns true if given value is a valid Pokémon Awakening Value (AV).
 * @param {number} av - The Pokémon AV.
 * @returns {boolean}
 */
export declare const isValidAV: (av: number) => boolean;
/**
 * Returns true if given value is a valid sum of all Pokémon Awakening Values (AV).
 * @param {number} totalAvs - The sum of all Pokémon's AVs.
 * @returns {boolean}
 */
export declare const isValidTotalAVs: (totalAvs: number) => boolean;
/**
 * Returns true if given value is a valid friendship value
 * @param {number} friendship - The Pokémon friendship value
 * @returns {boolean}
 */
export declare const isValidFrienshipValue: (friendship: number) => boolean;
