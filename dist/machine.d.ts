import { NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/machine/1 https://pokeapi.co/api/v2/machine/[id]}
 *
 * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 *
 * @property id - The identifier for this resource.
 * @property item - The TM or HM item that corresponds to this machine.
 * @property move - The move that is taught by this machine.
 * @property version_group - The version group that this machine applies to.
 * */
export type Machine = {
    id: number;
    item: NamedAPIResource;
    move: NamedAPIResource;
    version_group: NamedAPIResource;
};
