import { NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/contest-type/1 https://pokeapi.co/api/v2/contest-type/[id or name]}
 *
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Contest_condition Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property berry_flavor - The berry flavor that correlates with this contest type.
 * @property names - The name of this contest type listed in different languages.
 * */
export interface ContestType {
  id: number;
  name: string;
  berry_flavor: NamedAPIResource;
  names: ContestName[];
}

/**
 * @property name - The name for this contest.
 * @property color - The color associated with this contest's name.
 * @property language - The language that this name is in.
 * */
export interface ContestName {
  name: string;
  color: string;
  language: NamedAPIResource;
}
