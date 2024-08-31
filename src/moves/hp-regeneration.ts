type Kind =
  | 'grassy-terrain'
  | 'sandstorm'
  | 'hail'
  | 'life-orb'
  | 'leftovers'
  | 'black-sludge';

/** Returns the portion of HP from given kind of interaction on battle.
 * @param {number} hp - The Pokémon's HP.
 * @param {Kind} kind - The kind that changes the Pokémon HP.
 * @returns {number} A portion of HP.
 */
const hpChangesBy = (hp: number, kind: Kind): number => {
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
const baseIdealHP = (
  hp: number,
  base: number,
  rest: number,
  baseOffset = 0,
  minOrMax: 'min' | 'max',
): number => {
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
export const lifeOrbRecoil = (hp: number): number => {
  return hpChangesBy(hp, 'life-orb');
};

/** Returns the damage per turn from weather condition
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} for Pokémons that are neither Ground, Rock, or Steel type, or have Sand Rush, or Sand Force abilities.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The damage received per turn.
 */
export const sandstormDamage = (hp: number): number => {
  return hpChangesBy(hp, 'sandstorm');
};

/** Returns the damage per turn from weather condition
 * {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} for Pokémons that are not Ice type, nor have Ice Body, Snow Cloak, or Slush Rush.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The damage received per turn.
 */
export const hailDamage = (hp: number): number => {
  return hpChangesBy(hp, 'hail');
};

/** Returns the HP recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) Grassy Terrain} for Pokémons grounded on field.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recoverred HP per turn.
 */
export const grassyTerrainRecover = (hp: number): number => {
  return hpChangesBy(hp, 'grassy-terrain');
};

/** Returns the HP recovery per turn of Pokémon holding
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers} item.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recovered HP per turn.
 */
export const leftoversRecover = (hp: number): number => {
  return hpChangesBy(hp, 'leftovers');
};

/** Returns the HP recovery or damage per turn of Pokémon holding
 * {@link https://bulbapedia.bulbagarden.net/wiki/Black_Sludge Black Sludge} item.
 * @param {number} hp - The Pokémon's HP.
 * @param {boolean} poison - True if Pokémon holding item is Poison type.
 * @returns {number} The recovered (positive) or damaged (negative) HP per turn.
 */
export const blackSludgeRecover = (hp: number, poison = false): number => {
  if (poison) {
    return hpChangesBy(hp, 'black-sludge');
  }
  return -(hpChangesBy(hp, 'black-sludge') * 2);
};

/** Returns wheter HP is optimal or not for recovery at
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) Grassy Terrain}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export const isIdealGrassyTerrainHP = (hp: number): boolean => {
  return hp % 16 === 0;
};

/** Returns wheter HP is optimal or not for recovery with
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export const isIdealLeftoversHP = (hp: number): boolean => {
  return hp % 16 === 0;
};

/** Returns wheter HP is optimal or not for recovery with
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export const isIdealLifeOrbHP = (hp: number): boolean => {
  return hp % 10 === 9;
};

/** Returns wheter HP is optimal or not for minimizing damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} or {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} weather conditions.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export const isIdealWeatherHP = (hp: number): boolean => {
  return (hp + 1) % 16 === 0;
};

/** Returns wheter HP is optimal or not for recovery from berry items.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export const isIdealBerryHP = (hp: number): boolean => {
  return hp % 2 === 0;
};

/** Returns the ideal HP for minimizing recoil damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb} item.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export const idealHPForLifeOrb = (
  hp: number,
  minOrMax: 'min' | 'max' = 'max',
): number => {
  return baseIdealHP(hp, 10, 9, 1, minOrMax);
};

/** Returns the ideal HP for maximizing recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export const idealHPForGrassyTerrain = (
  hp: number,
  minOrMax: 'min' | 'max' = 'max',
): number => {
  return baseIdealHP(hp, 16, 0, 0, minOrMax);
};

/** Returns the ideal HP for maximizing recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export const idealHPForLeftovers = (
  hp: number,
  minOrMax: 'min' | 'max' = 'max',
): number => {
  return baseIdealHP(hp, 16, 0, 0, minOrMax);
};

/** Returns the ideal HP for maximizing recovery per turn from berry items.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export const idealHPForBerry = (
  hp: number,
  minOrMax: 'min' | 'max' = 'max',
): number => {
  if (hp % 2 === 0) {
    return hp;
  }
  return minOrMax === 'min' ? hp - 1 : hp + 1;
};

/** Returns the ideal HP for minimizing damage per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} or {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} weather conditions.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export const idealHPForWeather = (
  hp: number,
  minOrMax: 'min' | 'max' = 'max',
): number => {
  return baseIdealHP(hp, 16, 0, 1, minOrMax);
};
