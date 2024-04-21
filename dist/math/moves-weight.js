"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMoveBasePowerByWeight = exports.getMoveBasePowerByRelativeWeightPriorGenVII = exports.getMoveBasePowerByRelativeWeight = void 0;
/** Returns the move Base Power (BP) according the weight ratio between two Pokémon.
 * This formula is used to calculate the BP for moves such as {@link https://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move) Heavy Slam} and {@link https://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move) Heat Crash}.
 * @param {Object} params - The general parameters used for get move Base Power according weight ratio.
 * @param {number} params.user - The user Pokémon's weight.
 * @param {number} params.target - True target Pokémon's weight.
 * @param {boolean} [params.minimize = false] - If the target Pokémon has used the move {@link https://bulbapedia.bulbagarden.net/wiki/Minimize_(move) Minimize}.
 * @returns {number} The move BP.
 */
const getMoveBasePowerByRelativeWeight = ({ user, target, minimize = false, }) => {
    const r = (0, exports.getMoveBasePowerByRelativeWeightPriorGenVII)(user, target);
    const minimizeBonus = minimize ? 2 : 1;
    return r * minimizeBonus;
};
exports.getMoveBasePowerByRelativeWeight = getMoveBasePowerByRelativeWeight;
/** Returns the move Base Power (BP) according the weight ratio between two Pokémon prior to Generation VII games.
 * This formula is used to calculate the BP for moves such as {@link https://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move) Heavy Slam} and {@link https://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move) Heat Crash}.
 * @param {number} userWeight - The user Pokémon's weight.
 * @param {number} targetWeight - True target Pokémon's weight.
 * @returns {number} The move BP.
 */
const getMoveBasePowerByRelativeWeightPriorGenVII = (userWeight, targetWeight) => {
    const r = userWeight / targetWeight;
    if (r < 2) {
        return 40;
    }
    else if (r >= 2 && r < 3) {
        return 60;
    }
    else if (r >= 3 && r < 4) {
        return 80;
    }
    else if (r >= 4 && r < 5) {
        return 100;
    }
    else {
        return 120;
    }
};
exports.getMoveBasePowerByRelativeWeightPriorGenVII = getMoveBasePowerByRelativeWeightPriorGenVII;
/**
 * Returns the move Base Power (BP) according the Pokémon weight. This formula is used to calculate the BP for moves such as
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grass_Knot_(move) Grass Knot} and {@link https://bulbapedia.bulbagarden.net/wiki/Low_Kick_(move) Low kick}.
 * @param {number} weight - The Pokémon's weight.
 * @returns {number} The move BP.
 */
const getMoveBasePowerByWeight = (weight) => {
    if (weight >= 200) {
        return 120;
    }
    else if (weight >= 100 && weight < 200) {
        return 100;
    }
    else if (weight >= 50 && weight < 100) {
        return 80;
    }
    else if (weight >= 25 && weight < 50) {
        return 60;
    }
    else if (weight >= 10 && weight < 25) {
        return 40;
    }
    else {
        return 20;
    }
};
exports.getMoveBasePowerByWeight = getMoveBasePowerByWeight;
//# sourceMappingURL=moves-weight.js.map