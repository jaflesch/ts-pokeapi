import { Description, Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/move-target/1 https://pokeapi.co/api/v2/move-target/[id or name]}
 *
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property descriptions - The description of this resource listed in different languages.
 * @property moves - A list of moves that that are directed at this target.
 * */
export interface MoveTarget {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  moves: NamedAPIResource[];
}
