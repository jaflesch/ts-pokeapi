/** Returns the Base Power (BP) for move
 * {@link https://bulbapedia.bulbagarden.net/wiki/Electro_Ball_(move) Electro Ball} according to the ratio of Pokémon user and target's respective speeds.
 * @param {number} userSpeed - The user Pokémon's speed.
 * @param {number} targetSpeed - The target Pokémon's speed.
 * @returns {number} The move BP.
 */
export declare const getElectroBallBasePower: (userSpeed: number, targetSpeed: number) => number;
/** Returns the Base Power (BP) for move
 * {@link https://bulbapedia.bulbagarden.net/wiki/Gyro_Ball_(move) Gyro Ball} according to the ratio of Pokémon user and target's respective speeds.
 * @param {number} userSpeed - The user Pokémon's speed.
 * @param {number} targetSpeed - The target Pokémon's speed.
 * @returns {number} The move BP.
 */
export declare const getGyroBallBasePower: (userSpeed: number, targetSpeed: number) => number;
