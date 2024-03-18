import { Name, NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/move-ailment/1 https://pokeapi.co/api/v2/move-ailment/[id or name]}
 *
 * Move Ailments are status conditions caused by moves used during battle. See {@link https://bulbapedia.bulbagarden.net/wiki/Status_condition Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource
 * @property name - The name for this resource
 * @property moves - A list of moves that cause this ailment
 * @property names - The name of this resource listed in different languages
 * */
export type MoveAilment = {
    id: number;
    name: string;
    moves: NamedAPIResource[];
    names: Name[];
};
