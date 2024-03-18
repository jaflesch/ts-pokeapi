import { Description, Name, NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/move-damage-class/1 https://pokeapi.co/api/v2/move-damage-class/[id or name]}
 *
 * Methods by which Pokémon can learn moves.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property descriptions - The description of this resource listed in different languages.
 * @property names - The name of this resource listed in different languages.
 * @property version_groups - A list of version groups where moves can be learned through this method.
 * */
export type MoveLearnMethod = {
    id: number;
    name: string;
    names: Name[];
    descriptions: Description[];
    version_groups: NamedAPIResource[];
};
