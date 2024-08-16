import { NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/gender/1 https://pokeapi.co/api/v2/gender/[id or name]}
 *
 * Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out {@link http://bulbapedia.bulbagarden.net/wiki/Gender Bulbapedia} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property pokemon_species_details - A list of Pokémon species that can be this gender and how likely it is that they will be.
 * @property required_for_evolution - A list of Pokémon species that required this gender in order for a Pokémon to evolve into them.
 */
export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpecieGender[];
  required_for_evolution: NamedAPIResource[];
}

/**
 * @property rate - The chance of this Pokémon being female, in eighths; or -1 for genderless.
 * @property pokemon_species - A Pokémon species that can be the referenced gender.
 */
export interface PokemonSpecieGender {
  rate: number;
  pokemon_species: NamedAPIResource;
}
