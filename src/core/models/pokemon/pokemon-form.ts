import { PokemonFormType } from '../pokemon/pokemon';
import { Name, NamedAPIResource } from '../utility/common';

/**
 * (GET) {@link https://pokeapi.co/api/v2/pokemon-form/1 https://pokeapi.co/api/v2/pokemon-form/[id or name]}
 *
 * Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property names - The name of this resource listed in different languages.
 * @property order - The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.
 * @property form_name - The name of this form.
 * @property form_names - The form specific form name of this Pokémon form, or empty if the form does not have a specific name.
 * @property form_order - The order in which forms should be sorted within a species' forms.
 * @property is_mega - Whether or not this form requires mega evolution.
 * @property is_default - True for exactly one form used as the default for each Pokémon.
 * @property is_battle_only - Whether or not this form can only happen during battle.
 * @property pokemon - The Pokémon that can take on this form.
 * @property types - A list of details showing types this Pokémon form has.
 * @property sprites - A set of sprites used to depict this Pokémon form in the game.
 * @property version_group -The version group this Pokémon form was introduced in.
 * */
export interface PokemonForm {
  id: number;
  name: string;
  names: Name[];
  order: number;
  form_name: string;
  form_names: Name[];
  form_order: number;
  is_mega: boolean;
  is_default: boolean;
  is_battle_only: boolean;
  pokemon: NamedAPIResource;
  types: PokemonFormType[];
  sprites: PokemonFormSprite;
  version_group: NamedAPIResource;
}

/**
 * @property front_default - The default depiction of this Pokémon form from the front in battle.
 * @property front_shiny - The shiny depiction of this Pokémon form from the front in battle.
 * @property back_default - The default depiction of this Pokémon form from the back in battle.
 * @property back_shiny - The shiny depiction of this Pokémon form from the back in battle.
 * */
export interface PokemonFormSprite {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}
