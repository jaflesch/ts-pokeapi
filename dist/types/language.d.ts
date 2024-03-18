import { Name } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/language/id/1 https://pokeapi.co/api/v2/language/[id]}
 *
 * Languages for translations of API resource information.
 *
 * @property id - The identifier for this resource
 * @property name - The name for this resource.
 * @property official - Whether or not the games are published in this language.
 * @property iso639 - The two-letter code of the country where this language is spoken. Note that it is not unique.
 * @property iso3166 - The two-letter code of the language. Note that it is not unique.
 * @property names - The name of this resource listed in different languages.
 */
export type Language = {
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: Name;
};
