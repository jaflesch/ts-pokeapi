import { GenerationGameIndex, Name, NamedAPIResource } from './common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/type/1 https://pokeapi.co/api/v2/type/[id or name]}
 *
 * Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property damage_relations	- A detail of how effective this type is toward others and vice versa.
 * @property past_damage_relations - A list of details of how effective this type was toward others and vice versa in previous generations.
 * @property game_indices - A list of game indices relevent to this item by generation.
 * @property generation - The generation this type was introduced in.
 * @property move_damage_class - The class of damage inflicted by this type.
 * @property names - The name of this resource listed in different languages.
 * @property pokemon - A list of details of Pokémon that have this type.
 * @property moves - A list of moves that have this type.
 */
export type Type = {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  past_damage_relations: TypeRelationsPast;
  game_indices: GenerationGameIndex[];
  generation: NamedAPIResource;
  move_damage_class: NamedAPIResource[];
  names: Name[];
  pokemon: TypePokemon;
  moves: NamedAPIResource[];
};

/**
 * @property slot - The order the Pokémon's types are listed in.
 * @property pokemon - The Pokémon that has the referenced type.
 */
export type TypePokemon = {
  slot: number;
  pokemon: NamedAPIResource;
};

/**
 * @property no_damage_to - A list of types this type has no effect on.
 * @property half_damage_to - A list of types this type is not very effect against.
 * @property double_damage_to - A list of types this type is very effect against.
 * @property no_damage_from - A list of types that have no effect on this type.
 * @property half_damage_from	- A list of types that are not very effective against this type.
 * @property double_damage_from - A list of types that are very effective against this type.
 */
export type TypeRelations = {
  no_damage_to: NamedAPIResource[];
  half_damage_to: NamedAPIResource[];
  double_damage_to: NamedAPIResource[];
  no_damage_from: NamedAPIResource[];
  half_damage_from: NamedAPIResource[];
  double_damage_from: NamedAPIResource[];
};

/**
 * @property generation - The last generation in which the referenced type had the listed damage relations.
 * @property damage_relations - The damage relations the referenced type had up to and including the listed generation.
 */
export type TypeRelationsPast = {
  generation: NamedAPIResource;
  damage_relations: TypeRelations;
};
