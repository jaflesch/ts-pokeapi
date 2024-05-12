import { Pokemon } from '../core';
import { PokemonTypeName, AlterDamageAbility, PokemonTypesArrayIndex } from './constants';
export interface TypeChartReturn {
    normal: PokemonTypesArrayIndex[];
    noEffect: PokemonTypesArrayIndex[];
    notEffective: PokemonTypesArrayIndex[];
    superEffective: PokemonTypesArrayIndex[];
    chart: PokemonTypesArrayIndex[];
}
export interface GetPokemonTypeMatchupsReturn {
    types: PokemonTypesArrayIndex[];
    offensive: Array<{
        typeIndex: PokemonTypesArrayIndex;
        name: string;
    } & TypeChartReturn>;
    defensive: Array<{
        ability: string;
        noEffect: (PokemonTypesArrayIndex | PokemonTypeName)[];
        normal: (PokemonTypesArrayIndex | PokemonTypeName)[];
        weakness: (PokemonTypesArrayIndex | PokemonTypeName)[];
        resistance: (PokemonTypesArrayIndex | PokemonTypeName)[];
        doubleWeakness: (PokemonTypesArrayIndex | PokemonTypeName)[];
        doubleResistance: (PokemonTypesArrayIndex | PokemonTypeName)[];
    }>;
}
type TypeChartReturnDamageReduction = {
    noEffect: TypeChartReturn['noEffect'];
    notEffective: TypeChartReturn['notEffective'];
};
/** Returns types which given type's attack has no effet, is normal, not effective, and super effective. Also, returns an array of PokemonTypesArrayIndex with damage multiples for given type.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturn} An object with complete type chart, and normal, no effect, super effective, not effective types against given type.
 */
export declare const getPokemonTypeChartAttack: (index: PokemonTypesArrayIndex) => TypeChartReturn;
/** Returns only types which given type's attack has super effective damage.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {PokemonTypesArrayIndex[]} An array of indexes from Pokémon types chart.
 */
export declare const getPokemonTypeChartAttackPros: (index: PokemonTypesArrayIndex) => PokemonTypesArrayIndex[];
/** Returns only types which given type's attack has no effect or not effective damage.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturnDamageReduction} An object with array of indexes from Pokémon types chart.
 */
export declare const getPokemonTypeChartAttackCons: (index: PokemonTypesArrayIndex) => TypeChartReturnDamageReduction;
/** Returns types which given type's defense has no effet, is normal, not effective, and super effective. Also, returns an array of PokemonTypesArrayIndex with damage multiples for given type.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturn} An object with complete type chart, and normal, no effect, super effective, not effective types against given type.
 */
export declare const getPokemonTypeChartDefense: (index: PokemonTypesArrayIndex) => TypeChartReturn;
/** Returns only types which given type's defense has resistance.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturnDamageReduction} An object with array of indexes from Pokémon types chart.
 */
export declare const getPokemonTypeChartDefensePros: (index: PokemonTypesArrayIndex) => TypeChartReturnDamageReduction;
/** Returns only types which given type's defense has weakness.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {PokemonTypesArrayIndex[]} An array of indexes from Pokémon types chart.
 */
export declare const getPokemonTypeChartDefenseCons: (index: PokemonTypesArrayIndex) => PokemonTypesArrayIndex[];
/** Returns the damage multiplier considering the attacking move type, the targeted Pokémon types and ability.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} moveType - The type of move that will produce the damage.
 * @param {PokemonTypesArrayIndex[]} targetTypes - The types of target Pokémon which will receive the damage.
 * @param {AlterDamageAbility} [targetAbility] - A string of few selected abilities which affect damage calculation.
 * @returns {number} The damage multiplier.
 */
export declare const getAttackMultipleByTypeChart: (moveType: PokemonTypesArrayIndex, targetTypes: PokemonTypesArrayIndex[], targetAbility?: AlterDamageAbility) => number;
/** Returns a detailed offensive an defensive data from given PokéAPI Pokémon resource.
 * It also returns the Pokémon types converted from Type resource id to PokemonTypesArrayIndex.
 * @param {Pokemon} pokemon - The PokéAPI Pokémon resource.
 * @param {boolean} [verbose=false] - True if defensive data will return the type names instead of its indexes.
 * @returns {GetPokemonTypeMatchupsReturn} An object with detailed offensive an defensive data.
 */
export declare const getPokemonTypeMatchups: (pokemon: Pokemon, verbose?: boolean) => GetPokemonTypeMatchupsReturn;
/** Returns true if ability is immune to type of given move; false otherwise.
 * @param {PokemonTypesArrayIndex} moveType - The type of attacking move.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} True if ability receives no damage from given move type.
 */
export declare const isMoveNullifyByAbility: (moveType: PokemonTypesArrayIndex, ability: AlterDamageAbility) => boolean;
/** Returns the damage multiple of attacking move by oponent's ability.
 * @param {PokemonTypesArrayIndex} moveType - The type of attacking move.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} The damage multiple.
 */
export declare const damageMultipleByAbility: (moveType: PokemonTypesArrayIndex, ability: AlterDamageAbility) => number;
/** Returns the correct super effective damage multiple applied to a oponent's ability.
 * Some abilities affect the damage multiple only if it is a super effective damage.
 * @param {PokemonTypesArrayIndex} multiple - The current multiple of damage.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} The super effective damage multiple.
 */
export declare const superEffectiveDamageMultipleByAbility: (multiple: number, ability: AlterDamageAbility) => number;
export declare const PokemonTypeChart: {
    getAttack: (index: PokemonTypesArrayIndex) => TypeChartReturn;
    getDefense: (index: PokemonTypesArrayIndex) => TypeChartReturn;
    getAtkPros: (index: PokemonTypesArrayIndex) => PokemonTypesArrayIndex[];
    getAtkCons: (index: PokemonTypesArrayIndex) => TypeChartReturnDamageReduction;
    getDefPros: (index: PokemonTypesArrayIndex) => TypeChartReturnDamageReduction;
    getDefCons: (index: PokemonTypesArrayIndex) => PokemonTypesArrayIndex[];
    getByPokemon: (pokemon: Pokemon, verbose?: boolean) => GetPokemonTypeMatchupsReturn;
    getAtkMultiple: (moveType: PokemonTypesArrayIndex, targetTypes: PokemonTypesArrayIndex[], targetAbility?: AlterDamageAbility) => number;
};
export {};
