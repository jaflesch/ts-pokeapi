import { Name } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/move-battle-style/1 https://pokeapi.co/api/v2/move-battle-style/[id or name]}
 *
 * Styles of moves when used in the Battle Palace. See {@link https://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III) Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * */
export type MoveBattleStyle = {
  id: number;
  name: string;
  names: Name[];
};
