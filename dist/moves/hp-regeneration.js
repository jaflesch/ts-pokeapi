"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idealHPForWeather = exports.idealHPForBerry = exports.idealHPForLeftovers = exports.idealHPForGrassyTerrain = exports.idealHPForLifeOrb = exports.isIdealBerryHP = exports.isIdealWeatherHP = exports.isIdealLifeOrbHP = exports.isIdealLeftoversHP = exports.isIdealGrassyTerrainHP = exports.blackSludgeRecover = exports.leftoversRecover = exports.grassyTerrainRecover = exports.hailDamage = exports.sandstormDamage = exports.lifeOrbRecoil = void 0;
/** Returns the portion of HP from given kind of interaction on battle.
 * @param {number} hp - The Pokémon's HP.
 * @param {Kind} kind - The kind that changes the Pokémon HP.
 * @returns {number} A portion of HP.
 */
const hpChangesBy = (hp, kind) => {
    if (kind === 'life-orb') {
        return Math.max(Math.floor(hp / 10), 1);
    }
    return Math.floor(hp / 16);
};
/** Returns the optimal HP for maximizing recovery or minimizing damage or recoil.
 * @param {number} hp - The Pokémon's HP.
 * @param {number} base - The amount of HP that changes per interaction.
 * @param {number} rest - The optimal rest of HP.
 * @param {number} baseOffset - The deviation from base HP to achieve optimal result.
 * @param {'min' | 'max'} minOrMax - Wheter the previous (`'min'`) or next (`'max'`) optimal values.
 * @returns {number} The optimal HP.
 */
const baseIdealHP = (hp, base, rest, baseOffset = 0, minOrMax) => {
    if ((hp + baseOffset) % base === rest) {
        return hp;
    }
    const result = hp + (base - baseOffset) - (hp % base);
    return minOrMax === 'max' ? result : result - base;
};
/** Returns the recoil damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb} when the Pokémon that is holding the item deals damage to a target.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recoil received per damage.
 */
const lifeOrbRecoil = (hp) => {
    return hpChangesBy(hp, 'life-orb');
};
exports.lifeOrbRecoil = lifeOrbRecoil;
/** Returns the damage per turn from weather condition
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} for Pokémons that are neither Ground, Rock, or Steel type, or have Sand Rush, or Sand Force abilities.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The damage received per turn.
 */
const sandstormDamage = (hp) => {
    return hpChangesBy(hp, 'sandstorm');
};
exports.sandstormDamage = sandstormDamage;
/** Returns the damage per turn from weather condition
 * {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} for Pokémons that are not Ice type, nor have Ice Body, Snow Cloak, or Slush Rush.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The damage received per turn.
 */
const hailDamage = (hp) => {
    return hpChangesBy(hp, 'hail');
};
exports.hailDamage = hailDamage;
/** Returns the HP recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) Grassy Terrain} for Pokémons grounded on field.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recoverred HP per turn.
 */
const grassyTerrainRecover = (hp) => {
    return hpChangesBy(hp, 'grassy-terrain');
};
exports.grassyTerrainRecover = grassyTerrainRecover;
/** Returns the HP recovery per turn of Pokémon holding
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers} item.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recovered HP per turn.
 */
const leftoversRecover = (hp) => {
    return hpChangesBy(hp, 'leftovers');
};
exports.leftoversRecover = leftoversRecover;
/** Returns the HP recovery or damage per turn of Pokémon holding
 * {@link https://bulbapedia.bulbagarden.net/wiki/Black_Sludge Black Sludge} item.
 * @param {number} hp - The Pokémon's HP.
 * @param {boolean} poison - True if Pokémon holding item is Poison type.
 * @returns {number} The recovered (positive) or damaged (negative) HP per turn.
 */
const blackSludgeRecover = (hp, poison = false) => {
    if (poison) {
        return hpChangesBy(hp, 'black-sludge');
    }
    return -(hpChangesBy(hp, 'black-sludge') * 2);
};
exports.blackSludgeRecover = blackSludgeRecover;
/** Returns wheter HP is optimal or not for recovery at
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) Grassy Terrain}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
const isIdealGrassyTerrainHP = (hp) => {
    return hp % 16 === 0;
};
exports.isIdealGrassyTerrainHP = isIdealGrassyTerrainHP;
/** Returns wheter HP is optimal or not for recovery with
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
const isIdealLeftoversHP = (hp) => {
    return hp % 16 === 0;
};
exports.isIdealLeftoversHP = isIdealLeftoversHP;
/** Returns wheter HP is optimal or not for recovery with
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
const isIdealLifeOrbHP = (hp) => {
    return hp % 10 === 9;
};
exports.isIdealLifeOrbHP = isIdealLifeOrbHP;
/** Returns wheter HP is optimal or not for minimizing damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} or {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} weather conditions.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
const isIdealWeatherHP = (hp) => {
    return (hp + 1) % 16 === 0;
};
exports.isIdealWeatherHP = isIdealWeatherHP;
/** Returns wheter HP is optimal or not for recovery from berry items.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
const isIdealBerryHP = (hp) => {
    return hp % 2 === 0;
};
exports.isIdealBerryHP = isIdealBerryHP;
/** Returns the ideal HP for minimizing recoil damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb} item.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
const idealHPForLifeOrb = (hp, minOrMax = 'max') => {
    return baseIdealHP(hp, 10, 9, 1, minOrMax);
};
exports.idealHPForLifeOrb = idealHPForLifeOrb;
/** Returns the ideal HP for maximizing recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
const idealHPForGrassyTerrain = (hp, minOrMax = 'max') => {
    return baseIdealHP(hp, 16, 0, 0, minOrMax);
};
exports.idealHPForGrassyTerrain = idealHPForGrassyTerrain;
/** Returns the ideal HP for maximizing recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
const idealHPForLeftovers = (hp, minOrMax = 'max') => {
    return baseIdealHP(hp, 16, 0, 0, minOrMax);
};
exports.idealHPForLeftovers = idealHPForLeftovers;
/** Returns the ideal HP for maximizing recovery per turn from berry items.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
const idealHPForBerry = (hp, minOrMax = 'max') => {
    if (hp % 2 === 0) {
        return hp;
    }
    return minOrMax === 'min' ? hp - 1 : hp + 1;
};
exports.idealHPForBerry = idealHPForBerry;
/** Returns the ideal HP for minimizing damage per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} or {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} weather conditions.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
const idealHPForWeather = (hp, minOrMax = 'max') => {
    return baseIdealHP(hp, 16, 0, 1, minOrMax);
};
exports.idealHPForWeather = idealHPForWeather;
//# sourceMappingURL=hp-regeneration.js.map