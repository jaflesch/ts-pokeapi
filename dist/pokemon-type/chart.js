"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTypeChart = exports.superEffectiveDamageMultipleByAbility = exports.damageMultipleByAbility = exports.isMoveNullifyByAbility = exports.getPokemonTypeMatchups = exports.getAttackMultipleByTypeChart = exports.getPokemonTypeChartDefenseCons = exports.getPokemonTypeChartDefensePros = exports.getPokemonTypeChartDefense = exports.getPokemonTypeChartAttackCons = exports.getPokemonTypeChartAttackPros = exports.getPokemonTypeChartAttack = void 0;
const core_1 = require("../core");
const constants_1 = require("./constants");
const format_1 = require("./format");
/** Returns types which given type's attack has no effet, is normal, not effective, and super effective. Also, returns an array of PokemonTypesArrayIndex with damage multiples for given type.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturn} An object with complete type chart, and normal, no effect, super effective, not effective types against given type.
 */
const getPokemonTypeChartAttack = (index) => {
    const normal = [];
    const noEffect = [];
    const superEffective = [];
    const notEffective = [];
    for (let i = 0; i < constants_1.TYPES_CHART_MATRIX[index].length; i++) {
        switch (constants_1.TYPES_CHART_MATRIX[index][i]) {
            case 0:
                noEffect.push(i);
                break;
            case 1:
                normal.push(i);
                break;
            case 0.5:
                notEffective.push(i);
                break;
            case 2:
                superEffective.push(i);
                break;
        }
    }
    return {
        normal,
        noEffect,
        notEffective,
        superEffective,
        chart: constants_1.TYPES_CHART_MATRIX[index],
    };
};
exports.getPokemonTypeChartAttack = getPokemonTypeChartAttack;
/** Returns only types which given type's attack has super effective damage.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {PokemonTypesArrayIndex[]} An array of indexes from Pokémon types chart.
 */
const getPokemonTypeChartAttackPros = (index) => {
    const { superEffective } = (0, exports.getPokemonTypeChartAttack)(index);
    return superEffective;
};
exports.getPokemonTypeChartAttackPros = getPokemonTypeChartAttackPros;
/** Returns only types which given type's attack has no effect or not effective damage.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturnDamageReduction} An object with array of indexes from Pokémon types chart.
 */
const getPokemonTypeChartAttackCons = (index) => {
    const { noEffect, notEffective } = (0, exports.getPokemonTypeChartAttack)(index);
    return { noEffect, notEffective };
};
exports.getPokemonTypeChartAttackCons = getPokemonTypeChartAttackCons;
/** Returns types which given type's defense has no effet, is normal, not effective, and super effective. Also, returns an array of PokemonTypesArrayIndex with damage multiples for given type.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturn} An object with complete type chart, and normal, no effect, super effective, not effective types against given type.
 */
const getPokemonTypeChartDefense = (index) => {
    const normal = [];
    const noEffect = [];
    const superEffective = [];
    const notEffective = [];
    const chart = [];
    for (let i = 0; i < constants_1.TYPES_CHART_MATRIX.length; i++) {
        chart.push(constants_1.TYPES_CHART_MATRIX[i][index]);
        switch (constants_1.TYPES_CHART_MATRIX[i][index]) {
            case 0:
                noEffect.push(i);
                break;
            case 1:
                normal.push(i);
                break;
            case 0.5:
                notEffective.push(i);
                break;
            case 2:
                superEffective.push(i);
                break;
        }
    }
    return {
        chart,
        normal,
        noEffect,
        notEffective,
        superEffective,
    };
};
exports.getPokemonTypeChartDefense = getPokemonTypeChartDefense;
/** Returns only types which given type's defense has resistance.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturnDamageReduction} An object with array of indexes from Pokémon types chart.
 */
const getPokemonTypeChartDefensePros = (index) => {
    const { noEffect, notEffective } = (0, exports.getPokemonTypeChartDefense)(index);
    return { noEffect, notEffective };
};
exports.getPokemonTypeChartDefensePros = getPokemonTypeChartDefensePros;
/** Returns only types which given type's defense has weakness.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {PokemonTypesArrayIndex[]} An array of indexes from Pokémon types chart.
 */
const getPokemonTypeChartDefenseCons = (index) => {
    const { superEffective } = (0, exports.getPokemonTypeChartDefense)(index);
    return superEffective;
};
exports.getPokemonTypeChartDefenseCons = getPokemonTypeChartDefenseCons;
/** Returns the damage multiplier considering the attacking move type, the targeted Pokémon types and ability.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} moveType - The type of move that will produce the damage.
 * @param {PokemonTypesArrayIndex[]} targetTypes - The types of target Pokémon which will receive the damage.
 * @param {AlterDamageAbility} [targetAbility] - A string of few selected abilities which affect damage calculation.
 * @returns {number} The damage multiplier.
 */
const getAttackMultipleByTypeChart = (moveType, targetTypes, targetAbility) => {
    let multiple = 1;
    for (const t of targetTypes) {
        multiple *= constants_1.TYPES_CHART_MATRIX[moveType][t];
    }
    if (targetAbility) {
        multiple *= (0, exports.damageMultipleByAbility)(moveType, targetAbility);
        multiple *= (0, exports.superEffectiveDamageMultipleByAbility)(multiple, targetAbility);
    }
    return multiple;
};
exports.getAttackMultipleByTypeChart = getAttackMultipleByTypeChart;
/** Returns a detailed offensive an defensive data from given PokéAPI Pokémon resource.
 * It also returns the Pokémon types converted from Type resource id to PokemonTypesArrayIndex.
 * @param {Pokemon} pokemon - The PokéAPI Pokémon resource.
 * @param {boolean} [verbose=false] - True if defensive data will return the type names instead of its indexes.
 * @returns {GetPokemonTypeMatchupsReturn} An object with detailed offensive an defensive data.
 */
const getPokemonTypeMatchups = (pokemon, verbose) => {
    const types = pokemon.types.map((t) => format_1.format.id2index((0, core_1.getResourceIdFromURL)(t.type.url)));
    const offensive = [];
    for (const t of types) {
        const proscons = (0, exports.getPokemonTypeChartAttack)(t);
        const name = format_1.format.index2name(t);
        offensive.push(Object.assign({ typeIndex: t, name }, proscons));
    }
    const defensiveCharts = [];
    const abilities = pokemon.abilities.map((a) => a.ability.name);
    for (const ability of abilities) {
        const abilityDefense = Array(18).fill(1);
        for (const t of types) {
            for (let i = 0; i < abilityDefense.length; i++) {
                abilityDefense[i] *= constants_1.TYPES_CHART_MATRIX[i][t];
                if (constants_1.damageAlterAbilities.includes(ability)) {
                    abilityDefense[i] *= (0, exports.damageMultipleByAbility)(i, ability);
                    abilityDefense[i] *= (0, exports.superEffectiveDamageMultipleByAbility)(abilityDefense[i], ability);
                }
            }
        }
        defensiveCharts.push(abilityDefense);
    }
    const defensive = [];
    for (const [i, v] of defensiveCharts.entries()) {
        const noEffect = [];
        const normal = [];
        const weakness = [];
        const resistance = [];
        const doubleWeakness = [];
        const doubleResistance = [];
        for (const [index, value] of v.entries()) {
            const typeResult = verbose ? format_1.format.index2name(index) : index;
            if (value === 0) {
                noEffect.push(typeResult);
            }
            else if (value > 0 && value < 0.5) {
                doubleResistance.push(typeResult);
            }
            else if (value >= 0.5 && value < 1) {
                resistance.push(typeResult);
            }
            else if (value === 1) {
                normal.push(typeResult);
            }
            else if (value > 1 && value <= 2) {
                weakness.push(typeResult);
            }
            else {
                doubleWeakness.push(typeResult);
            }
        }
        defensive.push({
            ability: abilities[i],
            noEffect,
            normal,
            weakness,
            resistance,
            doubleWeakness,
            doubleResistance,
        });
    }
    return {
        types,
        offensive,
        defensive,
    };
};
exports.getPokemonTypeMatchups = getPokemonTypeMatchups;
/** Returns true if ability is immune to type of given move; false otherwise.
 * @param {PokemonTypesArrayIndex} moveType - The type of attacking move.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} True if ability receives no damage from given move type.
 */
const isMoveNullifyByAbility = (moveType, ability) => {
    if (['storm-drain', 'water-absorb', 'dry-skin'].includes(ability) &&
        moveType === constants_1.PokemonTypesArrayIndex.WATER) {
        return true;
    }
    if (['earth-eater', 'levitate'].includes(ability) &&
        moveType === constants_1.PokemonTypesArrayIndex.GROUND) {
        return true;
    }
    if (['flash-fire', 'well-baked-body'].includes(ability) &&
        moveType === constants_1.PokemonTypesArrayIndex.FIRE) {
        return true;
    }
    if (['motor-drive', 'volt-absorb', 'lightning-rod'].includes(ability) &&
        moveType === constants_1.PokemonTypesArrayIndex.ELECTRIC) {
        return true;
    }
    if (['sap-sipper'].includes(ability) &&
        moveType === constants_1.PokemonTypesArrayIndex.GRASS) {
        return true;
    }
    if (['wind-rider'].includes(ability) &&
        moveType === constants_1.PokemonTypesArrayIndex.FLYING) {
        return true;
    }
    return false;
};
exports.isMoveNullifyByAbility = isMoveNullifyByAbility;
/** Returns the damage multiple of attacking move by oponent's ability.
 * @param {PokemonTypesArrayIndex} moveType - The type of attacking move.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} The damage multiple.
 */
const damageMultipleByAbility = (moveType, ability) => {
    if ((0, exports.isMoveNullifyByAbility)(moveType, ability)) {
        return 0;
    }
    if (ability === 'dry-skin' && moveType === constants_1.PokemonTypesArrayIndex.FIRE) {
        return 1.25;
    }
    if (ability === 'fluffy' && moveType === constants_1.PokemonTypesArrayIndex.FIRE) {
        return 2;
    }
    if (ability === 'heatproof' && moveType === constants_1.PokemonTypesArrayIndex.FIRE) {
        return 0.5;
    }
    if (ability === 'water-bubble' && moveType === constants_1.PokemonTypesArrayIndex.FIRE) {
        return 0.5;
    }
    if (ability === 'purifying-salt' &&
        moveType === constants_1.PokemonTypesArrayIndex.GHOST) {
        return 0.5;
    }
    if (ability === 'thick-fat' &&
        (moveType === constants_1.PokemonTypesArrayIndex.FIRE ||
            moveType === constants_1.PokemonTypesArrayIndex.ICE)) {
        return 0.5;
    }
    return 1;
};
exports.damageMultipleByAbility = damageMultipleByAbility;
/** Returns the correct super effective damage multiple applied to a oponent's ability.
 * Some abilities affect the damage multiple only if it is a super effective damage.
 * @param {number} multiple - The current multiple of damage.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} The super effective damage multiple.
 */
const superEffectiveDamageMultipleByAbility = (multiple, ability) => {
    if (multiple >= 2) {
        if (['prism-armor', 'solid-rock', 'filter'].includes(ability)) {
            return 0.75;
        }
        return 1;
    }
    if (ability === 'wonder-guard') {
        return multiple >= 2 ? 2 : 0;
    }
    return 1;
};
exports.superEffectiveDamageMultipleByAbility = superEffectiveDamageMultipleByAbility;
exports.PokemonTypeChart = {
    getAttack: exports.getPokemonTypeChartAttack,
    getDefense: exports.getPokemonTypeChartDefense,
    getAtkPros: exports.getPokemonTypeChartAttackPros,
    getAtkCons: exports.getPokemonTypeChartAttackCons,
    getDefPros: exports.getPokemonTypeChartDefensePros,
    getDefCons: exports.getPokemonTypeChartDefenseCons,
    getByPokemon: exports.getPokemonTypeMatchups,
    getAtkMultiple: exports.getAttackMultipleByTypeChart,
};
//# sourceMappingURL=chart.js.map