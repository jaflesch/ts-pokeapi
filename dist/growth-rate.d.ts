import { Description, NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/growth-rate/1 https://pokeapi.co/api/v2/growth-rate/[id or name]}
 *
 * Growth rates are the speed with which Pokémon gain levels through experience. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Experience Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource
 * @property name - The name for this resource.
 * @property formula - The formula used to calculate the rate at which the Pokémon species gains level
 * @property descriptions - The descriptions of this characteristic listed in different languages
 * @property levels - A list of levels and the amount of experienced needed to atain them based on this growth rate
 * @property pokemon_species - A list of Pokémon species that gain levels at this growth rate
 */
export type GrowthRate = {
    id: number;
    name: string;
    formula: string;
    descriptions: Description[];
    levels: GrowthRateExperienceLevel[];
    pokemon_species: NamedAPIResource[];
};
/**
 * @property level - The level gained
 * @property experience - The amount of experience required to reach the referenced level
 */
export type GrowthRateExperienceLevel = {
    level: number;
    experience: number;
};
