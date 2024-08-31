/** Returns the recoil damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb} when the Pokémon that is holding the item deals damage to a target.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recoil received per damage.
 */
export declare const lifeOrbRecoil: (hp: number) => number;
/** Returns the damage per turn from weather condition
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} for Pokémons that are neither Ground, Rock, or Steel type, or have Sand Rush, or Sand Force abilities.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The damage received per turn.
 */
export declare const sandstormDamage: (hp: number) => number;
/** Returns the damage per turn from weather condition
 * {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} for Pokémons that are not Ice type, nor have Ice Body, Snow Cloak, or Slush Rush.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The damage received per turn.
 */
export declare const hailDamage: (hp: number) => number;
/** Returns the HP recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) Grassy Terrain} for Pokémons grounded on field.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recoverred HP per turn.
 */
export declare const grassyTerrainRecover: (hp: number) => number;
/** Returns the HP recovery per turn of Pokémon holding
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers} item.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The recovered HP per turn.
 */
export declare const leftoversRecover: (hp: number) => number;
/** Returns the HP recovery or damage per turn of Pokémon holding
 * {@link https://bulbapedia.bulbagarden.net/wiki/Black_Sludge Black Sludge} item.
 * @param {number} hp - The Pokémon's HP.
 * @param {boolean} poison - True if Pokémon holding item is Poison type.
 * @returns {number} The recovered (positive) or damaged (negative) HP per turn.
 */
export declare const blackSludgeRecover: (hp: number, poison?: boolean) => number;
/** Returns wheter HP is optimal or not for recovery at
 * {@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) Grassy Terrain}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export declare const isIdealGrassyTerrainHP: (hp: number) => boolean;
/** Returns wheter HP is optimal or not for recovery with
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export declare const isIdealLeftoversHP: (hp: number) => boolean;
/** Returns wheter HP is optimal or not for recovery with
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export declare const isIdealLifeOrbHP: (hp: number) => boolean;
/** Returns wheter HP is optimal or not for minimizing damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} or {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} weather conditions.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export declare const isIdealWeatherHP: (hp: number) => boolean;
/** Returns wheter HP is optimal or not for recovery from berry items.
 * @param {number} hp - The Pokémon's HP.
 * @returns {boolean} true if HP is optimal, false otherwise.
 */
export declare const isIdealBerryHP: (hp: number) => boolean;
/** Returns the ideal HP for minimizing recoil damage from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb} item.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export declare const idealHPForLifeOrb: (hp: number, minOrMax?: 'min' | 'max') => number;
/** Returns the ideal HP for maximizing recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Life_Orb Life Orb}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export declare const idealHPForGrassyTerrain: (hp: number, minOrMax?: 'min' | 'max') => number;
/** Returns the ideal HP for maximizing recovery per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Leftovers Leftovers}.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export declare const idealHPForLeftovers: (hp: number, minOrMax?: 'min' | 'max') => number;
/** Returns the ideal HP for maximizing recovery per turn from berry items.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export declare const idealHPForBerry: (hp: number, minOrMax?: 'min' | 'max') => number;
/** Returns the ideal HP for minimizing damage per turn from
 * {@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) Sandstorm} or {@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) Hail} weather conditions.
 * @param {number} hp - The Pokémon's HP.
 * @returns {number} The optimal HP.
 */
export declare const idealHPForWeather: (hp: number, minOrMax?: 'min' | 'max') => number;
