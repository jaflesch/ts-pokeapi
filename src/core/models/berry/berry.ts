import { NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/berry/1 https://pokeapi.co/api/v2/berry/[id or name]}
 *
 * Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out {@link https://bulbapedia.bulbagarden.net/wiki/Berry Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property growth_time - Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.
 * @property max_harvest - The maximum number of these berries that can grow on one tree in Generation IV.
 * @property size - The size of this Berry, in millimeters.
 * @property smoothness - The smoothness of this Berry, used in making Pokéblocks or Poffins.
 * @property soil_dryness - The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.
 * @property firmness - The firmness of this berry, used in making Pokéblocks or Poffins.
 * @property flavors - A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.
 * @property item - Berries are actually items. This is a reference to the item specific data for this berry.
 * @property natural_gift_power - The power of the move {@link https://bulbapedia.bulbagarden.net/wiki/Natural_Gift_(move) Natural Gift} when used with this Berry.
 * @property natural_gift_type - The type inherited by {@link https://bulbapedia.bulbagarden.net/wiki/Natural_Gift_(move) Natural Gift} when used with this Berry.
 */
export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: NamedAPIResource;
  flavors: BerryFlavorMap[];
  item: NamedAPIResource;
  natural_gift_power: number;
  natural_gift_type: NamedAPIResource;
}

/**
 * @property potency - The potency of the flavor.
 * @property flavor - The flavor of the berry.
 */
export interface BerryFlavorMap {
  potency: number;
  flavor: NamedAPIResource;
}
