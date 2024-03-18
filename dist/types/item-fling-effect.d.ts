import { Effect, NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/item-fling-effect/1 https://pokeapi.co/api/v2/item-fling-effect/[id or name]}
 *
 * The various effects of the move "Fling" when used with different items.
 *
 * @property id - The identifier for this resource
 * @property name - The name for this resource
 * @property effect_entries - The result of this fling effect listed in different languages
 * @property items - A list of items that have this fling effect
 */
export type ItemFlingEffect = {
    id: number;
    name: string;
    effect_entries: Effect[];
    items: NamedAPIResource[];
};
