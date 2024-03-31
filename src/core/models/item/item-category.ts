import { Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/item-category/1 https://pokeapi.co/api/v2/item-category/[id or name]}
 *
 * Item categories determine where items will be placed in the players bag.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property items - A list of items that are a part of this category.
 * @property names - The name of this item category listed in different languages.
 * @property pocket	- The pocket items in this category would be put in.
 */
export interface ItemCategory {
  id: number;
  name: string;
  items: NamedAPIResource[];
  names: Name[];
  pocket: NamedAPIResource;
}
