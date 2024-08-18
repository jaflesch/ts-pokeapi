import { FlavorText, NamedAPIResource } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/super-contest-effect/1 https://pokeapi.co/api/v2/super-contest-effect/[id]}
 *
 * Super contest effects refer to the effects of moves when used in super contests.
 *
 * @property id - The identifier for this resource.
 * @property appeal - The level of appeal this super contest effect has.
 * @property flavor_text_entries - The flavor text of this super contest effect listed in different languages.
 * @property moves - A list of moves that have the effect when used in super contests.
 * */
export interface SuperContestEffect {
    id: number;
    appeal: number;
    flavor_text_entries: FlavorText[];
    moves: NamedAPIResource[];
}
