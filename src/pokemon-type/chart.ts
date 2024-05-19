import { Pokemon, getResourceIdFromURL } from '../core';
import {
  PokemonTypeName,
  TYPES_CHART_MATRIX,
  AlterDamageAbility,
  damageAlterAbilities,
  PokemonTypesArrayIndex,
} from './constants';
import { format } from './format';

export interface TypeChartReturn {
  normal: PokemonTypesArrayIndex[];
  noEffect: PokemonTypesArrayIndex[];
  notEffective: PokemonTypesArrayIndex[];
  superEffective: PokemonTypesArrayIndex[];
  chart: PokemonTypesArrayIndex[];
}

export interface GetPokemonTypeMatchupsReturn {
  types: PokemonTypesArrayIndex[];
  offensive: Array<
    {
      typeIndex: PokemonTypesArrayIndex;
      name: string;
    } & TypeChartReturn
  >;
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
export const getPokemonTypeChartAttack = (
  index: PokemonTypesArrayIndex,
): TypeChartReturn => {
  const normal = [];
  const noEffect = [];
  const superEffective = [];
  const notEffective = [];

  for (let i = 0; i < TYPES_CHART_MATRIX[index].length; i++) {
    switch (TYPES_CHART_MATRIX[index][i]) {
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
    chart: TYPES_CHART_MATRIX[index],
  };
};

/** Returns only types which given type's attack has super effective damage.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {PokemonTypesArrayIndex[]} An array of indexes from Pokémon types chart.
 */
export const getPokemonTypeChartAttackPros = (
  index: PokemonTypesArrayIndex,
): PokemonTypesArrayIndex[] => {
  const { superEffective } = getPokemonTypeChartAttack(index);
  return superEffective;
};

/** Returns only types which given type's attack has no effect or not effective damage.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturnDamageReduction} An object with array of indexes from Pokémon types chart.
 */
export const getPokemonTypeChartAttackCons = (
  index: PokemonTypesArrayIndex,
): TypeChartReturnDamageReduction => {
  const { noEffect, notEffective } = getPokemonTypeChartAttack(index);
  return { noEffect, notEffective };
};

/** Returns types which given type's defense has no effet, is normal, not effective, and super effective. Also, returns an array of PokemonTypesArrayIndex with damage multiples for given type.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturn} An object with complete type chart, and normal, no effect, super effective, not effective types against given type.
 */
export const getPokemonTypeChartDefense = (
  index: PokemonTypesArrayIndex,
): TypeChartReturn => {
  const normal = [];
  const noEffect = [];
  const superEffective = [];
  const notEffective = [];
  const chart = [];

  for (let i = 0; i < TYPES_CHART_MATRIX.length; i++) {
    chart.push(TYPES_CHART_MATRIX[i][index]);
    switch (TYPES_CHART_MATRIX[i][index]) {
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

/** Returns only types which given type's defense has resistance.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {TypeChartReturnDamageReduction} An object with array of indexes from Pokémon types chart.
 */
export const getPokemonTypeChartDefensePros = (
  index: PokemonTypesArrayIndex,
): TypeChartReturnDamageReduction => {
  const { noEffect, notEffective } = getPokemonTypeChartDefense(index);
  return { noEffect, notEffective };
};

/** Returns only types which given type's defense has weakness.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} index - An index from Pokémon types chart matrix.
 * @returns {PokemonTypesArrayIndex[]} An array of indexes from Pokémon types chart.
 */
export const getPokemonTypeChartDefenseCons = (
  index: PokemonTypesArrayIndex,
): PokemonTypesArrayIndex[] => {
  const { superEffective } = getPokemonTypeChartDefense(index);
  return superEffective;
};

/** Returns the damage multiplier considering the attacking move type, the targeted Pokémon types and ability.
 *
 * See more about the `TYPES_CHART_MATRIX` at {@link https://pokemondb.net/type PokemonDB}.
 * The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.
 * @param {PokemonTypesArrayIndex} moveType - The type of move that will produce the damage.
 * @param {PokemonTypesArrayIndex[]} targetTypes - The types of target Pokémon which will receive the damage.
 * @param {AlterDamageAbility} [targetAbility] - A string of few selected abilities which affect damage calculation.
 * @returns {number} The damage multiplier.
 */
export const getAttackMultipleByTypeChart = (
  moveType: PokemonTypesArrayIndex,
  targetTypes: PokemonTypesArrayIndex[],
  targetAbility?: AlterDamageAbility,
): number => {
  let multiple = 1;

  for (const t of targetTypes) {
    multiple *= TYPES_CHART_MATRIX[moveType][t];
  }

  if (targetAbility) {
    multiple *= damageMultipleByAbility(moveType, targetAbility);
    multiple *= superEffectiveDamageMultipleByAbility(multiple, targetAbility);
  }

  return multiple;
};

/** Returns a detailed offensive an defensive data from given PokéAPI Pokémon resource.
 * It also returns the Pokémon types converted from Type resource id to PokemonTypesArrayIndex.
 * @param {Pokemon} pokemon - The PokéAPI Pokémon resource.
 * @param {boolean} [verbose=false] - True if defensive data will return the type names instead of its indexes.
 * @returns {GetPokemonTypeMatchupsReturn} An object with detailed offensive an defensive data.
 */
export const getPokemonTypeMatchups = (
  pokemon: Pokemon,
  verbose?: boolean,
): GetPokemonTypeMatchupsReturn => {
  const types = pokemon.types.map((t) =>
    format.id2index(getResourceIdFromURL(t.type.url)),
  );

  const offensive = [];
  for (const t of types) {
    const proscons = getPokemonTypeChartAttack(t);
    const name = format.index2name(t);
    offensive.push({
      typeIndex: t,
      name,
      ...proscons,
    });
  }

  const defensiveCharts = [];
  const abilities = pokemon.abilities.map((a) => a.ability.name);

  for (const ability of abilities) {
    const abilityDefense = Array(18).fill(1);
    for (const t of types) {
      for (let i = 0; i < abilityDefense.length; i++) {
        abilityDefense[i] *= TYPES_CHART_MATRIX[i][t];

        if (damageAlterAbilities.includes(ability as AlterDamageAbility)) {
          abilityDefense[i] *= damageMultipleByAbility(
            i,
            ability as AlterDamageAbility,
          );
          abilityDefense[i] *= superEffectiveDamageMultipleByAbility(
            abilityDefense[i],
            ability as AlterDamageAbility,
          );
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
      const typeResult = verbose ? format.index2name(index) : index;
      if (value === 0) {
        noEffect.push(typeResult);
      } else if (value > 0 && value < 0.5) {
        doubleResistance.push(typeResult);
      } else if (value >= 0.5 && value < 1) {
        resistance.push(typeResult);
      } else if (value === 1) {
        normal.push(typeResult);
      } else if (value > 1 && value <= 2) {
        weakness.push(typeResult);
      } else {
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

/** Returns true if ability is immune to type of given move; false otherwise.
 * @param {PokemonTypesArrayIndex} moveType - The type of attacking move.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} True if ability receives no damage from given move type.
 */
export const isMoveNullifyByAbility = (
  moveType: PokemonTypesArrayIndex,
  ability: AlterDamageAbility,
): boolean => {
  if (
    ['storm-drain', 'water-absorb', 'dry-skin'].includes(ability) &&
    moveType === PokemonTypesArrayIndex.WATER
  ) {
    return true;
  }

  if (
    ['earth-eater', 'levitate'].includes(ability) &&
    moveType === PokemonTypesArrayIndex.GROUND
  ) {
    return true;
  }

  if (
    ['flash-fire', 'well-baked-body'].includes(ability) &&
    moveType === PokemonTypesArrayIndex.FIRE
  ) {
    return true;
  }

  if (
    ['motor-drive', 'volt-absorb', 'lightning-rod'].includes(ability) &&
    moveType === PokemonTypesArrayIndex.ELECTRIC
  ) {
    return true;
  }
  if (
    ['sap-sipper'].includes(ability) &&
    moveType === PokemonTypesArrayIndex.GRASS
  ) {
    return true;
  }
  if (
    ['wind-rider'].includes(ability) &&
    moveType === PokemonTypesArrayIndex.FLYING
  ) {
    return true;
  }

  return false;
};

/** Returns the damage multiple of attacking move by oponent's ability.
 * @param {PokemonTypesArrayIndex} moveType - The type of attacking move.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} The damage multiple.
 */
export const damageMultipleByAbility = (
  moveType: PokemonTypesArrayIndex,
  ability: AlterDamageAbility,
): number => {
  if (isMoveNullifyByAbility(moveType, ability)) {
    return 0;
  }

  if (ability === 'dry-skin' && moveType === PokemonTypesArrayIndex.FIRE) {
    return 1.25;
  }
  if (ability === 'fluffy' && moveType === PokemonTypesArrayIndex.FIRE) {
    return 2;
  }
  if (ability === 'heatproof' && moveType === PokemonTypesArrayIndex.FIRE) {
    return 0.5;
  }
  if (ability === 'water-bubble' && moveType === PokemonTypesArrayIndex.FIRE) {
    return 0.5;
  }
  if (
    ability === 'purifying-salt' &&
    moveType === PokemonTypesArrayIndex.GHOST
  ) {
    return 0.5;
  }
  if (
    ability === 'thick-fat' &&
    (moveType === PokemonTypesArrayIndex.FIRE ||
      moveType === PokemonTypesArrayIndex.ICE)
  ) {
    return 0.5;
  }
  return 1;
};

/** Returns the correct super effective damage multiple applied to a oponent's ability.
 * Some abilities affect the damage multiple only if it is a super effective damage.
 * @param {PokemonTypesArrayIndex} multiple - The current multiple of damage.
 * @param {AlterDamageAbility} ability - A string of few selected abilities which affect damage calculation.
 * @returns {boolean} The super effective damage multiple.
 */
export const superEffectiveDamageMultipleByAbility = (
  multiple: number,
  ability: AlterDamageAbility,
): number => {
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

export const PokemonTypeChart = {
  getAttack: getPokemonTypeChartAttack,
  getDefense: getPokemonTypeChartDefense,
  getAtkPros: getPokemonTypeChartAttackPros,
  getAtkCons: getPokemonTypeChartAttackCons,
  getDefPros: getPokemonTypeChartDefensePros,
  getDefCons: getPokemonTypeChartDefenseCons,
  getByPokemon: getPokemonTypeMatchups,
  getAtkMultiple: getAttackMultipleByTypeChart,
};
