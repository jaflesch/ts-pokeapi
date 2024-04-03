import { Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/item-pocket/1 https://pokeapi.co/api/v2/item-pocket/[id or name]}
 *
 * Pockets within the players bag used for storing items by category.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property categories - A list of item categories that are relevant to this item pocket.
 */
export interface ItemPocket {
  id: number;
  name: string;
  names: Name[];
  categories: NamedAPIResource[];
}
