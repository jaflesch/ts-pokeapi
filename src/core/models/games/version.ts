import { Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/version-group/1 https://pokeapi.co/api/v2/version-group/[id or name]}
 *
 * Version groups categorize highly similar versions of the games.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property version_group - The version group this version belongs to.
 * */
export interface Version {
  id: number;
  name: string;
  names: Name[];
  version_group: NamedAPIResource;
}
