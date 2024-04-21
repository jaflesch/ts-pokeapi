interface GetMoveBasePowerByRelativeWeightParams {
    user: number;
    target: number;
    minimize?: boolean;
}
/** Returns the move Base Power (BP) according the weight ratio between two Pokémon.
 * This formula is used to calculate the BP for moves such as {@link https://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move) Heavy Slam} and {@link https://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move) Heat Crash}.
 * @param {Object} params - The general parameters used for get move Base Power according weight ratio.
 * @param {number} params.user - The user Pokémon's weight.
 * @param {number} params.target - True target Pokémon's weight.
 * @param {boolean} [params.minimize = false] - If the target Pokémon has used the move {@link https://bulbapedia.bulbagarden.net/wiki/Minimize_(move) Minimize}.
 * @returns {number} The move BP.
 */
export declare const getMoveBasePowerByRelativeWeight: ({ user, target, minimize, }: GetMoveBasePowerByRelativeWeightParams) => number;
/** Returns the move Base Power (BP) according the weight ratio between two Pokémon prior to Generation VII games.
 * This formula is used to calculate the BP for moves such as {@link https://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move) Heavy Slam} and {@link https://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move) Heat Crash}.
 * @param {number} userWeight - The user Pokémon's weight.
 * @param {number} targetWeight - True target Pokémon's weight.
 * @returns {number} The move BP.
 */
export declare const getMoveBasePowerByRelativeWeightPriorGenVII: (userWeight: number, targetWeight: number) => number;
/**
 * Returns the move Base Power (BP) according the Pokémon weight. This formula is used to calculate the BP for moves such as
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grass_Knot_(move) Grass Knot} and {@link https://bulbapedia.bulbagarden.net/wiki/Low_Kick_(move) Low kick}.
 * @param {number} weight - The Pokémon's weight.
 * @returns {number} The move BP.
 */
export declare const getMoveBasePowerByWeight: (weight: number) => number;
export {};
