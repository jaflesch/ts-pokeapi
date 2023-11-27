import { NamedAPIResource, VersionGameIndex } from './common';
/**
 * (GET) {@link https://pokeapi.co/api/v2/pokemon/1 https://pokeapi.co/api/v2/pokemon/[id or name]}
 *
 * Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See {@link Bulbapedia http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)} for greater detail.
 *
 * @property id - The identifier for this resource.
 * @property name - The name for this resource.
 * @property base_experience - The base experience gained for defeating this Pokémon.
 * @property height - The height of this Pokémon in decimetres.
 * @property is_default - Set for exactly one Pokémon used as the default for each species.
 * @property order - Order for sorting. Almost national order, except families are grouped together.
 * @property weight - The weight of this Pokémon in hectograms.
 * @property abilities - A list of abilities this Pokémon could potentially have.
 * @property forms - A list of forms this Pokémon can take on.
 * @property game_indices - A list of game indices relevent to Pokémon item by generation.
 * @property held_items - A list of items this Pokémon may be holding when encountered.
 * @property location_area_encounters - A link to a list of location areas, as well as encounter details pertaining to specific versions.
 * @property moves - A list of moves along with learn methods and level details pertaining to specific version groups.
 * @property past_types - A list of details showing types this pokémon had in previous generations.
 * @property sprites - A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites
 * @property species - The species this Pokémon belongs to.
 * @property stats - A list of base stat values for this Pokémon.
 * @property types - A list of details showing types this Pokémon has.
 * */
export type Pokemon = {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex;
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    past_types: PokemonTypePast[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
};
/**
 * @property is_hidden - Whether or not this is a hidden ability.
 * @property slot	- The slot this ability occupies in this Pokémon species.
 * @property ability - The ability the Pokémon may have.
 */
export type PokemonAbility = {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
};
/**
 * @property item - The item the referenced Pokémon holds.
 * @property version_details- The details of the different versions in which the item is held.
 * */
export type PokemonHeldItem = {
    item: NamedAPIResource;
    version_details: PokemonHeldItemVersion[];
};
/**
 * @property version - The version in which the item is held.
 * @property rarity- How often the item is held.
 * */
export type PokemonHeldItemVersion = {
    version: NamedAPIResource;
    rarity: number;
};
/**
 * @property move - The move the Pokémon can learn.
 * @property version_group_details- The details of the version in which the Pokémon can learn the move.
 * */
export type PokemonMove = {
    move: NamedAPIResource;
    version_group_details: PokemonMovieVersion[];
};
/**
 * @property move_learn_method: The method by which the move is learned.
 * @property version_group: The version group in which the move is learned.
 * @property level_learned_at: The minimum level to learn the move.
 * */
export type PokemonMovieVersion = {
    move_learn_method: NamedAPIResource;
    version_group: NamedAPIResource;
    level_learned_at: number;
};
/**
 * @property front_default: The default depiction of this Pokémon from the front in battle.
 * @property front_shiny: The shiny depiction of this Pokémon from the front in battle.
 * @property front_female: The female depiction of this Pokémon from the front in battle.
 * @property front_shiny_female: The shiny female depiction of this Pokémon from the front in battle.
 * @property back_default: The default depiction of this Pokémon from the back in battle.
 * @property back_shiny: The shiny depiction of this Pokémon from the back in battle.
 * @property back_female: The female depiction of this Pokémon from the back in battle.
 * @property back_shiny_female: The shiny female depiction of this Pokémon from the back in battle.
 * */
export type PokemonSprites = {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
};
/**
 * @property stat: The stat the Pokémon has.
 * @property effort: The effort points (EV) the Pokémon has in the stat.
 * @property base_stat: The base value of the stat.
 * */
export type PokemonStat = {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
};
/**
 * @property slot: The order the Pokémon's types are listed in.
 * @property type: The type the referenced Pokémon has.
 * */
export type PokemonType = {
    slot: number;
    type: NamedAPIResource;
};
/**
 * @property generation: The last generation in which the referenced pokémon had the listed types.
 * @property types: The types the referenced pokémon had up to and including the listed generation.
 * */
export type PokemonTypePast = {
    generation: NamedAPIResource;
    types: PokemonType;
};
/**
 * @property slot - The order the Pokémon's types are listed in.
 * @property type	- The type the referenced Form has.
 */
export type PokemonFormType = {
    slot: number;
    type: NamedAPIResource;
};
