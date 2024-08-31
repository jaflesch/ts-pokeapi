"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGyroBallBasePower = exports.getElectroBallBasePower = void 0;
/** Returns the Base Power (BP) for move
 * {@link https://bulbapedia.bulbagarden.net/wiki/Electro_Ball_(move) Electro Ball} according to the ratio of Pokémon user and target's respective speeds.
 * @param {number} userSpeed - The user Pokémon's speed.
 * @param {number} targetSpeed - The target Pokémon's speed.
 * @returns {number} The move BP.
 */
const getElectroBallBasePower = (userSpeed, targetSpeed) => {
    const r = userSpeed / targetSpeed;
    if (r < 1) {
        return 40;
    }
    else if (r >= 1 && r < 2) {
        return 60;
    }
    else if (r >= 2 && r < 3) {
        return 80;
    }
    else if (r >= 3 && r < 4) {
        return 120;
    }
    else {
        return 150;
    }
};
exports.getElectroBallBasePower = getElectroBallBasePower;
/** Returns the Base Power (BP) for move
 * {@link https://bulbapedia.bulbagarden.net/wiki/Gyro_Ball_(move) Gyro Ball} according to the ratio of Pokémon user and target's respective speeds.
 * @param {number} userSpeed - The user Pokémon's speed.
 * @param {number} targetSpeed - The target Pokémon's speed.
 * @returns {number} The move BP.
 */
const getGyroBallBasePower = (userSpeed, targetSpeed) => {
    if (userSpeed === 0) {
        return 1;
    }
    return Math.floor(Math.min(150, (25 * targetSpeed) / userSpeed + 1));
};
exports.getGyroBallBasePower = getGyroBallBasePower;
//# sourceMappingURL=moves-speed.js.map