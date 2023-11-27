import { Description, NamedAPIResource } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/characteristic/id/1 https://pokeapi.co/api/v2/characteristic/[id]}
 *
 * Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out {@link https://bulbapedia.bulbagarden.net/wiki/Characteristic Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource
 * @property gene_modulo - The remainder of the highest stat/IV divided by 5
 * @property possible_values - The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5
 * @property highest_stat - The stat which results in this characteristic
 * @property descriptions - The descriptions of this characteristic listed in different languages
 */
export type Characteristic = {
  id: number;
  gene_modulo: number;
  possible_values: number;
  highest_stat: NamedAPIResource;
  descriptions: Description[];
};
