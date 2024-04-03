import { Description, Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/move-damage-class/1 https://pokeapi.co/api/v2/move-damage-class/[id or name]}
 *
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property moves - A list of moves that fall into this damage class.
 * @property descriptions - The description of this resource listed in different languages.
 * */
export interface MoveDamageClass {
    id: number;
    name: string;
    names: Name[];
    moves: NamedAPIResource[];
    descriptions: Description[];
}
