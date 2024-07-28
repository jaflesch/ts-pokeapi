"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrineBasePower = exports.getFlailBasePower = exports.getReversalBasePower = exports.getHardPressBasePower = exports.getWringOutBasePower = exports.getCrushGripBasePower = exports.getWaterSpoutBasePower = exports.getEruptionBasePower = void 0;
/** Returns the Base Power (BP) for moves considering the ratio between current HP and maximum HP values.
 * @param {number} basePower - The move's initial base power multipler.
 * @param {number} currentHp - The user (or target) current HP dividend value.
 * @param {number} maxHp - The user (or target) maximum HP divisor value.
 * @returns {number} The move BP.
 */
const getBaseHPRelation = (basePower, currentHp, maxHp) => {
    const result = currentHp / maxHp;
    return Math.max(1, Math.floor(basePower * (result >= 0 ? result : 1)));
};
/** Returns the Base Power (BP) for moves considering the ratio between current HP and maximum HP values.
 * This formula works for moves like Reversal and Flail, where the lower the user's HP, the greater the BP becomes.
 * @param {number} currentHp - The user current HP dividend value.
 * @param {number} maxHp - The user maximum HP divisor value.
 * @returns {number} The move BP.
 */
const getBaseHPInverseRelationWhenLowHP = (currentHp, maxHp) => {
    const result = (currentHp / maxHp) * 100;
    if (result >= 68.75) {
        return 20;
    }
    else if (result >= 35.42) {
        return 40;
    }
    else if (result >= 20.83) {
        return 80;
    }
    else if (result >= 10.42) {
        return 100;
    }
    else if (result >= 4.17) {
        return 150;
    }
    else {
        return 200;
    }
};
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Erouption_(move) Eruption} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The user current HP.
 * @param {number} maxHp - The user maximum HP.
 * @returns {number} The move BP.
 */
const getEruptionBasePower = (currentHp, maxHp) => {
    return getBaseHPRelation(150, currentHp, maxHp);
};
exports.getEruptionBasePower = getEruptionBasePower;
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Water_Spot_(move) Water Spout} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The user current HP.
 * @param {number} maxHp - The user maximum HP.
 * @returns {number} The move BP.
 */
const getWaterSpoutBasePower = (currentHp, maxHp) => {
    return getBaseHPRelation(150, currentHp, maxHp);
};
exports.getWaterSpoutBasePower = getWaterSpoutBasePower;
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Crush_Grip_(move) Crush Grip} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The target current HP.
 * @param {number} maxHp - The target maximum HP.
 * @returns {number} The move BP.
 */
const getCrushGripBasePower = (currentHp, maxHp) => {
    return getBaseHPRelation(120, currentHp, maxHp);
};
exports.getCrushGripBasePower = getCrushGripBasePower;
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Wring_Out_(move) Wring Out} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The target current HP.
 * @param {number} maxHp - The target maximum HP.
 * @returns {number} The move BP.
 */
const getWringOutBasePower = (currentHp, maxHp) => {
    return getBaseHPRelation(120, currentHp, maxHp);
};
exports.getWringOutBasePower = getWringOutBasePower;
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Hard_Press_(move) Hard Press} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The target current HP.
 * @param {number} maxHp - The target maximum HP.
 * @returns {number} The move BP.
 */
const getHardPressBasePower = (currentHp, maxHp) => {
    return getBaseHPRelation(100, currentHp, maxHp);
};
exports.getHardPressBasePower = getHardPressBasePower;
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Reversal_(move) Reversal} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The user current HP.
 * @param {number} maxHp - The user maximum HP.
 * @returns {number} The move BP.
 */
const getReversalBasePower = (currentHp, maxHp) => {
    return getBaseHPInverseRelationWhenLowHP(currentHp, maxHp);
};
exports.getReversalBasePower = getReversalBasePower;
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Flail_(move) Flail} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The user current HP.
 * @param {number} maxHp - The user maximum HP.
 * @returns {number} The move BP.
 */
const getFlailBasePower = (currentHp, maxHp) => {
    return getBaseHPInverseRelationWhenLowHP(currentHp, maxHp);
};
exports.getFlailBasePower = getFlailBasePower;
/** Returns the Base Power (BP) for
 * {@link https://bulbapedia.bulbagarden.net/wiki/Brine_(move) Brine} move according to the ratio of Pokémon current HP and maximum HP.
 * @param {number} currentHp - The target current HP.
 * @param {number} maxHp - The target maximum HP.
 * @returns {number} The move BP.
 */
const getBrineBasePower = (currentHp, maxHp) => {
    return currentHp / maxHp >= 0.5 ? 65 : 130;
};
exports.getBrineBasePower = getBrineBasePower;
//# sourceMappingURL=moves-hp.js.map