import { Effect, FlavorText } from '../utility/common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/contest-effect/1 https://pokeapi.co/api/v2/contest-effect/[id]}
 *
 * Contest effects refer to the effects of moves when used in contests.
 *
 * @property id - The identifier for this resource.
 * @property appeal - The base number of hearts the user of this move gets.
 * @property jam - The base number of hearts the user's opponent loses.
 * @property effect_entries - The result of this contest effect listed in different languages.
 * @property flavor_text_entries - The flavor text of this contest effect listed in different languages.
 * */
export interface ContestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: Effect[];
    flavor_text_entries: FlavorText[];
}
