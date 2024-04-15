/** Returns the Base Power (BP) for move
 * {@link https://bulbapedia.bulbagarden.net/wiki/Electro_Ball_(move) Electro Ball} according to the ratio of Pokémon user and target respective speeds.
 * @param {number} userSpeed - The user Pokémon's speed.
 * @param {number} targetSpeed - True target Pokémon's speed.
 * @returns {number} The move BP.
 */
export const getElectroBallBasePower = (
  userSpeed: number,
  targetSpeed: number,
): number => {
  const r = userSpeed / targetSpeed;
  if (r < 1) {
    return 40;
  } else if (r >= 1 && r < 2) {
    return 60;
  } else if (r >= 2 && r < 3) {
    return 80;
  } else if (r >= 3 && r < 4) {
    return 120;
  } else {
    return 150;
  }
};

/** Returns the Base Power (BP) for move
 * {@link https://bulbapedia.bulbagarden.net/wiki/Gyro_Ball_(move) Gyro Ball} according to the ratio of Pokémon user and target respective speeds.
 * @param {number} userSpeed - The user Pokémon's speed.
 * @param {number} targetSpeed - True target Pokémon's speed.
 * @returns {number} The move BP.
 */
export const getGyroBallBasePower = (
  userSpeed: number,
  targetSpeed: number,
): number => {
  if (userSpeed === 0) {
    return 1;
  }

  return Math.floor(Math.min(150, (25 * targetSpeed) / userSpeed + 1));
};
