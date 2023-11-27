import { Description, NamedAPIResource } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/move-category/1 https://pokeapi.co/api/v2/move-category/[id or name]}
 *
 * Very general categories that loosely group move effects.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property moves - A list of moves that fall into this category.
 * @property descriptions - The description of this resource listed in different languages.
 * */
export type MoveCategory = {
  id: number;
  name: string;
  moves: NamedAPIResource[];
  descriptions: Description[];
};
