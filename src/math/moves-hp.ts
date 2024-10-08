/** Returns the Base Power (BP) for moves considering the ratio between current HP and maximum HP values.
 * @param {number} basePower - The move's initial base power multipler.
 * @param {number} currentHp - The user (or target)'s current HP dividend value.
 * @param {number} maxHp - The user (or target)'s maximum HP divisor value.
 * @returns {number} The move BP.
 */
const getBaseHPRelation = (
  basePower: number,
  currentHp: number,
  maxHp: number,
): number => {
  const result = currentHp / maxHp;

  return Math.max(1, Math.floor(basePower * (result >= 0 ? result : 1)));
};

/** Returns the Base Power (BP) for moves considering the ratio between current HP and maximum HP values.
 * This formula works for moves like Reversal and Flail, where the lower the user's HP, the greater the BP becomes.
 * @param {number} currentHp - The user's current HP dividend value.
 * @param {number} maxHp - The user's maximum HP divisor value.
 * @returns {number} The move BP.
 */
const getBaseHPInverseRelationWhenLowHP = (
  currentHp: number,
  maxHp: number,
): number => {
  const result = (currentHp / maxHp) * 100;

  if (result >= 68.75) {
    return 20;
  } else if (result >= 35.42) {
    return 40;
  } else if (result >= 20.83) {
    return 80;
  } else if (result >= 10.42) {
    return 100;
  } else if (result >= 4.17) {
    return 150;
  } else {
    return 200;
  }
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Erouption_(move) Eruption} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The user's current HP.
 * @param {number} maxHp - The user's maximum HP.
 * @returns {number} The move BP.
 */
export const getEruptionBasePower = (
  currentHp: number,
  maxHp: number,
): number => {
  return getBaseHPRelation(150, currentHp, maxHp);
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Water_Spot_(move) Water Spout} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The user's current HP.
 * @param {number} maxHp - The user's maximum HP.
 * @returns {number} The move BP.
 */
export const getWaterSpoutBasePower = (
  currentHp: number,
  maxHp: number,
): number => {
  return getBaseHPRelation(150, currentHp, maxHp);
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Crush_Grip_(move) Crush Grip} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The target's current HP.
 * @param {number} maxHp - The target's maximum HP.
 * @returns {number} The move BP.
 */
export const getCrushGripBasePower = (
  currentHp: number,
  maxHp: number,
): number => {
  return getBaseHPRelation(120, currentHp, maxHp);
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Wring_Out_(move) Wring Out} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The target's current HP.
 * @param {number} maxHp - The target's maximum HP.
 * @returns {number} The move BP.
 */
export const getWringOutBasePower = (
  currentHp: number,
  maxHp: number,
): number => {
  return getBaseHPRelation(120, currentHp, maxHp);
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Hard_Press_(move) Hard Press} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The target's current HP.
 * @param {number} maxHp - The target's maximum HP.
 * @returns {number} The move BP.
 */
export const getHardPressBasePower = (
  currentHp: number,
  maxHp: number,
): number => {
  return getBaseHPRelation(100, currentHp, maxHp);
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Reversal_(move) Reversal} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The user's current HP.
 * @param {number} maxHp - The user's maximum HP.
 * @returns {number} The move BP.
 */
export const getReversalBasePower = (
  currentHp: number,
  maxHp: number,
): number => {
  return getBaseHPInverseRelationWhenLowHP(currentHp, maxHp);
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Flail_(move) Flail} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The user's current HP.
 * @param {number} maxHp - The user's maximum HP.
 * @returns {number} The move BP.
 */
export const getFlailBasePower = (currentHp: number, maxHp: number): number => {
  return getBaseHPInverseRelationWhenLowHP(currentHp, maxHp);
};

/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Brine_(move) Brine} move according to the ratio of Pokémon's current HP and maximum HP.
 * @param {number} currentHp - The target's current HP.
 * @param {number} maxHp - The target's maximum HP.
 * @returns {number} The move BP.
 */
export const getBrineBasePower = (currentHp: number, maxHp: number): number => {
  return currentHp / maxHp >= 0.5 ? 65 : 130;
};
