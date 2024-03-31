import { Description, Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/item-attribute/1 https://pokeapi.co/api/v2/item-attribute/[id or name]}
 *
 * Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable".
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property items - A list of items that have this attribute.
 * @property names - The name of this item listed in different languages.
 * @property descriptions	- The description of this item attribute listed in different languages.
 */
export interface ItemAttribute {
    id: number;
    name: string;
    items: NamedAPIResource[];
    names: Name[];
    descriptions: Description[];
}
