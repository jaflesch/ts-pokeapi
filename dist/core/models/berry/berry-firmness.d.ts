import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/berry-firmness/1 https://pokeapi.co/api/v2/berry-firmness/[id or name]}
 *
 * Berries can be soft or hard. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property berries - A list of the berries with this firmness.
 */
export interface BerryFirmness {
    id: number;
    name: string;
    names: Name[];
    berries: NamedAPIResource[];
}
