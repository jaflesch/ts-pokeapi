import { Effect, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/item-fling-effect/1 https://pokeapi.co/api/v2/item-fling-effect/[id or name]}
 *
 * The various effects of the move {@link https://bulbapedia.bulbagarden.net/wiki/Fling_(move) Fling} when used with different items.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property items - A list of items that have this Fling effect.
 * @property effect_entries - The result of this Fling effect listed in different languages.
 */
export interface ItemFlingEffect {
    id: number;
    name: string;
    items: NamedAPIResource[];
    effect_entries: Effect[];
}
