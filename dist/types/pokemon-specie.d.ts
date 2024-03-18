import { Name, FlavorText, APIResource, Description, NamedAPIResource } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokemon-species/1 https://pokeapi.co/api/v2/pokemon-species/[id or name]}
 *
 * A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property order - The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.
 * @property gender_rate - The chance of this Pokémon being female, in eighths; or -1 for genderless.
 * @property capture_rate - The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.
 * @property base_happiness - A detail of natures which affect this stat positively or negatively.
 * @property is_baby - Whether or not this is a baby Pokémon.
 * @property is_legendary - Whether or not this is a legendary Pokémon.
 * @property is_mythical - Whether or not this is a mythical Pokémon.
 * @property hatch_counter - one must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's.
 * @property has_gender_differences - Whether or not this Pokémon has visual gender differences.
 * @property forms_switchable - Whether or not this Pokémon has multiple forms and can switch between them.
 * @property growth_rate - The rate at which this Pokémon species gains levels.
 * @property pokedex_numbers - A list of Pokedexes and the indexes reserved within them for this Pokémon species.
 * @property egg_groups - A list of egg groups this Pokémon species is a member of.
 * @property color - The color of this Pokémon for Pokédex search.
 * @property shape - The shape of this Pokémon for Pokédex search.
 * @property evolves_from_species - The Pokémon species that evolves into this Pokemon_species.
 * @property evolution_chain - The evolution chain this Pokémon species is a member of.
 * @property habitat - The habitat this Pokémon species can be encountered in.
 * @property generation - The generation this Pokémon species was introduced in.
 * @property names - The name of this resource listed in different languages.
 * @property pal_park_encounters - A list of encounters that can be had with this Pokémon species in pal park.
 * @property flavor_text_entries - A list of flavor text entries for this Pokémon species.
 * @property form_descriptions - Descriptions of different forms Pokémon take on within the Pokémon species.
 * @property genera - The genus of this Pokémon species listed in multiple languages.
 * @property varieties - A list of the Pokémon that exist within this Pokémon species.
 * */
export type PokemonSpecie = {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: NamedAPIResource;
    pokedex_numbers: PokemonSpecieDexEntry[];
    egg_groups: NamedAPIResource[];
    color: NamedAPIResource;
    shape: NamedAPIResource;
    evolves_from_species: NamedAPIResource;
    evolution_chain: APIResource;
    habitat: NamedAPIResource;
    generation: NamedAPIResource;
    names: Name[];
    pal_park_encounters: PalParkEncounterArea;
    flavor_text_entries: FlavorText[];
    form_descriptions: Description[];
    genera: Genus;
    varieties: PokemonSpecieVariety;
};
/**
 * @property entry_number - The index number within the Pokédex.
 * @property pokedex - The Pokédex the referenced Pokémon species can be found in.
 * */
export type PokemonSpecieDexEntry = {
    entry_number: number;
    pokedex: NamedAPIResource;
};
/**
 * @property rate - The base rate for encountering the referenced Pokémon in this pal park area.
 * @property base_score - The base score given to the player when the referenced Pokémon is caught during a pal park run.
 * @property area - The pal park area where this encounter happens.
 * */
export type PalParkEncounterArea = {
    base_score: number;
    rate: number;
    area: NamedAPIResource;
};
/**
 * @property genus - The localized genus for the referenced Pokémon species.
 * @property language - The language this genus is in.
 * */
export type Genus = {
    genus: string;
    language: NamedAPIResource;
};
/**
 * @property is_default - Whether this variety is the default variety.
 * @property pokemon - The Pokémon variety.
 * */
export type PokemonSpecieVariety = {
    is_default: number;
    pokemon: NamedAPIResource;
};
