import { Name, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/move-ailment/1 https://pokeapi.co/api/v2/move-ailment/[id or name]}
 *
 * Move Ailments are status conditions caused by moves used during battle. See {@link https://bulbapedia.bulbagarden.net/wiki/Status_condition Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property moves - A list of moves that cause this ailment.
 * */
export interface MoveAilment {
    id: number;
    name: string;
    names: Name[];
    moves: NamedAPIResource[];
}
