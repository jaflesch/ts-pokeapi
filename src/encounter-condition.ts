import { Name, NamedAPIResource } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/encounter-condition/1 https://pokeapi.co/api/v2/encounter-condition/[id or name]}
 *
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property values - A list of possible values for this encounter condition.
 * */
export type EncounterCondition = {
  id: number;
  name: number;
  names: Name[];
  values: NamedAPIResource[];
};
