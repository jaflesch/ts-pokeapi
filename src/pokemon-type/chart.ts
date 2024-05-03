import { Pokemon, getResourceIdFromURL } from '../core';
import {
  TYPES_CHART_MATRIX,
  AlterDamageAbility,
  damageAlterAbilities,
  PokemonTypesArrayIndex,
} from './constants';
import { format } from './format';

export const getPokemonTypeChartAttack = (index: PokemonTypesArrayIndex) => {
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

export const getPokemonTypeChartAttackPros = (
  index: PokemonTypesArrayIndex,
) => {
  const { superEffective } = getPokemonTypeChartAttack(index);
  return superEffective;
};

export const getPokemonTypeChartAttackCons = (
  index: PokemonTypesArrayIndex,
) => {
  const { noEffect, notEffective } = getPokemonTypeChartAttack(index);
  return { noEffect, notEffective };
};

//
export const getPokemonTypeChartDefense = (index: PokemonTypesArrayIndex) => {
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

export const getPokemonTypeChartDefensePros = (
  index: PokemonTypesArrayIndex,
) => {
  const { noEffect, notEffective } = getPokemonTypeChartDefense(index);
  return { noEffect, notEffective };
};

export const getPokemonTypeChartDefenseCons = (
  index: PokemonTypesArrayIndex,
) => {
  const { superEffective } = getPokemonTypeChartDefense(index);
  return superEffective;
};

export const getAttackMultipleByTypeChart = (
  moveType: PokemonTypesArrayIndex,
  targetTypes: PokemonTypesArrayIndex[],
  targetAbility?: AlterDamageAbility,
) => {
  let defensive = 1;

  for (const t of targetTypes) {
    defensive *= TYPES_CHART_MATRIX[moveType][t];
  }

  if (targetAbility) {
    defensive *= damageMultipleByAbility(moveType, targetAbility);
    defensive *= superEffectiveDamageMultipleByAbility(
      defensive,
      targetAbility,
    );
  }

  return defensive;
};

export const getDefenseMultipleByTypeChart = (
  userTypes: PokemonTypesArrayIndex[],
  moveType: PokemonTypesArrayIndex,
  userAbility?: AlterDamageAbility,
) => {
  let defensive = 1;
  for (const t of userTypes) {
    defensive *= TYPES_CHART_MATRIX[moveType][t];
  }

  return defensive;
};

export const getPokemonTypeMatchups = (pokemon: Pokemon, verbose?: boolean) => {
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
      [abilities[i]]: {
        noEffect,
        normal,
        weakness,
        resistance,
        doubleWeakness,
        doubleResistance,
      },
    });
  }

  return {
    types,
    offensive,
    defensive,
  };
};

export const isMoveNullifyByAbility = (
  moveType: PokemonTypesArrayIndex,
  ability: AlterDamageAbility,
) => {
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

export const damageMultipleByAbility = (
  moveType: PokemonTypesArrayIndex,
  ability: AlterDamageAbility,
) => {
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
  if (ability === 'heatproof' && moveType === PokemonTypesArrayIndex.FIRE) {
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
  if (ability === 'water-bubble' && moveType === PokemonTypesArrayIndex.FIRE) {
    return 0.5;
  }
  return 1;
};

export const superEffectiveDamageMultipleByAbility = (
  multiple: number,
  ability: AlterDamageAbility,
) => {
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
  getDefMultiple: getDefenseMultipleByTypeChart,
};
