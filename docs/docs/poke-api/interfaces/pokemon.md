---
sidebar_position: 9
---

# Pokémon

## Pokemon

Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`base_experience`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base experience gained for defeating this Pokémon</td>
    </tr>
    <tr>
      <td>`height`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The height of this Pokémon in decimetres</td>
    </tr>
    <tr>
      <td>`weight`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The weight of this Pokémon in hectograms</td>
    </tr>
    <tr>
      <td>`is_default`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Set for exactly one Pokémon used as the default for each species</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Order for sorting. Almost national order, except families are grouped together</td>
    </tr>
    <tr>
      <td>`abilities`</td>
      <td>[`Array<PokemonAbility>`](#pokemonability)</td>
      <td>Yes</td>
      <td>A list of abilities this Pokémon could potentially have</td>
    </tr>
    <tr>
      <td>`forms`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)`</td>
      <td>Yes</td>
      <td>A list of forms this Pokémon can take on</td>
    </tr>
    <tr>
      <td>`game_indices`</td>
      <td>[`Array<VersionGameIndex>`](../utils#versiongameindex)</td>
      <td>Yes</td>
      <td>A list of game indices relevent to Pokémon item by generation</td>
    </tr>
    <tr>
      <td>`held_items`</td>
      <td>[`Array<PokemonHeldItem>`](#pokemonhelditem)</td>
      <td>Yes</td>
      <td>A list of items this Pokémon may be holding when encountered</td>
    </tr>
    <tr>
      <td>`location_area_encounters`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>A link to a list of location areas, as well as encounter details pertaining to specific versions.</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<PokemonMove>`](#pokemonmove)</td>
      <td>Yes</td>
      <td>A list of moves along with learn methods and level details pertaining to specific version groups</td>
    </tr>
    <tr>
      <td>`past_types`</td>
      <td>[`Array<PokemonTypePast>`](#pokemontypepast)</td>
      <td>Yes</td>
      <td>A list of details showing types this pokémon had in previous generations.</td>
    </tr>
    <tr>
      <td>`sprites`</td>
      <td>[`PokemonSprites`](#pokemonsprites)</td>
      <td>Yes</td>
      <td>A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites</td>
    </tr>
    <tr>
      <td>`species`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The species this Pokémon belongs to.</td>
    </tr>
    <tr>
      <td>`stats`</td>
      <td>[`Array<PokemonStat>`](#pokemonstat)</td>
      <td>Yes</td>
      <td>A list of base stat values for this Pokémon</td>
    </tr>
    <tr>
      <td>`types`</td>
      <td>[`Array<PokemonType>`](#pokemontype)</td>
      <td>Yes</td>
      <td>A list of details showing types this Pokémon has</td>
    </tr>
  </tbody>
</table>

### PokemonAbility

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`is_hidden`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this is a hidden ability</td>
    </tr>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The slot this ability occupies in this Pokémon species</td>
    </tr>
    <tr>
      <td>`ability`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The ability the Pokémon may have</td>
    </tr>
  </tbody>
</table>

### PokemonHeldItem

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`item`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The item the referenced Pokémon holds</td>
    </tr>
    <tr>
      <td>`version_details`</td>
      <td>[`Array<PokemonHeldItemVersion>`](#pokemonhelditemversion)</td>
      <td>Yes</td>
      <td>The details of the different versions in which the item is held</td>
    </tr>
  </tbody>
</table>

### PokemonHeldItemVersion

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`version`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version in which the item is held</td>
    </tr>
    <tr>
      <td>`rarity`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>How often the item is held</td>
    </tr>
  </tbody>
</table>

### PokemonMove

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`move`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The move the Pokémon can learn</td>
    </tr>
    <tr>
      <td>`version_group_details`</td>
      <td>[`Array<PokemonMovieVersion>`](#pokemonmovieversion)</td>
      <td>Yes</td>
      <td>The details of the version in which the Pokémon can learn the move</td>
    </tr>
  </tbody>
</table>

### PokemonMovieVersion

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`move_learn_method`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The method by which the move is learned</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group in which the move is learned</td>
    </tr>
    <tr>
      <td>`level_learned_at`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The minimum level to learn the move</td>
    </tr>
  </tbody>
</table>

### PokemonSprites
<!--
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
export interface PokemonSprites {
  front_default: string;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: {
    [key: string]: {
      back_default?: string | null;
      back_female?: string | null;
      back_shiny?: string | null;
      back_shiny_female?: string | null;
      front_default: string;
      front_female?: string | null;
      front_shiny?: string | null;
      front_shiny_female?: string | null;
    };
  };
}
-->
### PokemonStat

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat the Pokémon has</td>
    </tr>
    <tr>
      <td>`effort`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The effort points (EV) the Pokémon has in the stat</td>
    </tr>
    <tr>
      <td>`base_stat`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base value of the stat</td>
    </tr>
  </tbody>
</table>


### PokemonType

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The order the Pokémon's types are listed in</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The type the referenced Pokémon has</td>
    </tr>
  </tbody>
</table>


### PokemonTypePast

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The last generation in which the referenced pokémon had the listed types</td>
    </tr>
    <tr>
      <td>`types`</td>
      <td>[`Array<PokemonType>`](#pokemontype)</td>
      <td>Yes</td>
      <td>The types the referenced pokémon had up to and including the listed generation</td>
    </tr>
  </tbody>
</table>

## Ability

Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`is_main_series`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this ability originated in the main series of the video games</td>
    </tr>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation this ability originated in</td>
    </tr>
    <tr>
      <td>`effect_entries`</td>
      <td>[`Array<VerboseEffect>`](../utils#verboseeffect)</td>
      <td>Yes</td>
      <td>The effect of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`effect_changes`</td>
      <td>[`Array<AbilityEffectChange>`](#abilityeffectchange)</td>
      <td>Yes</td>
      <td>The list of previous effects this ability has had across version groups</td>
    </tr>
    <tr>
      <td>`flavor_text_entries`</td>
      <td>[`Array<AbilityFlavorText>`](#abilityflavortext)</td>
      <td>Yes</td>
      <td>The flavor text of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`AbilityPokemon`](#abilitypokemon)</td>
      <td>Yes</td>
      <td>A list of Pokémon that could potentially have this ability</td>
    </tr>
  </tbody>
</table>

### AbilityEffectChange

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`effect_entries`</td>
      <td>[`Array<Effect>`](../utils#effect)</td>
      <td>Yes</td>
      <td>The previous effect of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group in which the previous effect of this ability originated</td>
    </tr>
  </tbody>
</table>

### AbilityFlavorText

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`flavor_text`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The previous effect of this ability listed in different languages</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this text resource is in</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group that uses this flavor text</td>
    </tr>
  </tbody>
</table>

### AbilityPokemon

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`is_hidden`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this a hidden ability for the referenced Pokémon</td>
    </tr>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Pokémon have 3 ability 'slots' which hold references to possible abilities they could have. This is the slot of this ability for the referenced pokemon</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon this ability could belong to</td>
    </tr>
  </tbody>
</table>

## Characteristic

Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`gene_modulo`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The remainder of the highest stat/IV divided by 5</td>
    </tr>
    <tr>
      <td>`possible_values`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5</td>
    </tr>
    <tr>
      <td>`highest_stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat which results in this characteristic</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The descriptions of this characteristic listed in different languages</td>
    </tr>
  </tbody>
</table>

## EggGroup

Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Named>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of all Pokémon species that are members of this egg group</td>
    </tr>
  </tbody>
</table>

## Gender

Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`pokemon_species_details`</td>
      <td>[`Array<PokemonSpecieGender>`](#pokemonspeciegender)</td>
      <td>Yes</td>
      <td>A list of Pokémon species that can be this gender and how likely it is that they will be</td>
    </tr>
    <tr>
      <td>`required_for_evolution`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of Pokémon species that required this gender in order for a Pokémon to evolve into them</td>
    </tr>
  </tbody>
</table>

### PokemonSpecieGender

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`rate`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The chance of this Pokémon being female, in eighths; or -1 for genderless</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A Pokémon species that can be the referenced gender</td>
    </tr>
  </tbody>
</table>

## GrowthRate

Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`formula`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The formula used to calculate the rate at which the Pokémon species gains level</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>The descriptions of this characteristic listed in different languages</td>
    </tr>
    <tr>
      <td>`levels`</td>
      <td>[`Array<GrowthRateExperienceLevel>`](#growthrateexperiencelevel)</td>
      <td>Yes</td>
      <td>A list of levels and the amount of experienced needed to atain them based on this growth rate</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of Pokémon species that gain levels at this growth rate</td>
    </tr>
  </tbody>
</table>

### GrowthRateExperienceLevel

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`level`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The level gained</td>
    </tr>
    <tr>
      <td>`experience`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The amount of experience required to reach the referenced level</td>
    </tr>
  </tbody>
</table>

## Nature

Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`decreased_stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat decreased by 10% in Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`increased_stat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The stat increased by 10% in Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`hates_flavor`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The flavor hated by Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`likes_flavor`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The flavor liked by Pokémon with this nature</td>
    </tr>
    <tr>
      <td>`pokeathlon_stat_changes`</td>
      <td>[`NatureStatChange`](#naturestatchange)</td>
      <td>Yes</td>
      <td>A list of Pokéathlon stats this nature effects and how much it effects them</td>
    </tr>
    <tr>
      <td>`move_battle_style_preferences`</td>
      <td>[`MoveBattleStylePreference`](#movebattlestylepreference)</td>
      <td>Yes</td>
      <td>A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent</td>
    </tr>
  </tbody>
</table>

### NatureStatChange

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`max_change`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The amount of change</td>
    </tr>
    <tr>
      <td>`pokeathlon_stat`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The stat being affected</td>
    </tr>
  </tbody>
</table>

### MoveBattleStylePreference

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`low_hp_preference`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Chance of using the move, in percent, if HP is under one half</td>
    </tr>
    <tr>
      <td>`high_hp_preference`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Chance of using the move, in percent, if HP is over one half</td>
    </tr>
    <tr>
      <td>`move_battle_style`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The move battle style</td>
    </tr>
  </tbody>
</table>

## PokeAthlonStat

Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Name`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`affecting_natures`</td>
      <td>[`NaturePokeathlonStatAffectSets`](#naturepokeathlonstataffectsets)</td>
      <td>Yes</td>
      <td>A detail of natures which affect this Pokéathlon stat positively or negatively.</td>
    </tr>
  </tbody>
</table>


### NaturePokeathlonStatAffectSets
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`increase`</td>
      <td>[`NaturePokeathlonStatAffect`](#naturepokeathlonstataffect)</td>
      <td>Yes</td>
      <td>A list of natures and how they change the referenced Pokéathlon stat.</td>
    </tr>
    <tr>
      <td>`decrease`</td>
      <td>[`NaturePokeathlonStatAffect`](#naturepokeathlonstataffect)</td>
      <td>Yes</td>
      <td>A list of natures and how they change the referenced Pokéathlon stat.</td>
    </tr>
  </tbody>
</table>


### NaturePokeathlonStatAffect
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`max_change`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The maximum amount of change to the referenced Pokéathlon stat.</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The nature causing the change.</td>
    </tr>
  </tbody>
</table>



## PokemonColor

Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_entries`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of the Pokémon species that have this color.</td>
    </tr>
  </tbody>
</table>

## PokemonForm
Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name.</td>
    </tr>
    <tr>
      <td>`form_order`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The order in which forms should be sorted within a species' forms.</td>
    </tr>
    <tr>
      <td>`is_default`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>True for exactly one form used as the default for each Pokémon.</td>
    </tr>
    <tr>
      <td>`is_battle_only`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this form can only happen during battle.</td>
    </tr>
    <tr>
      <td>`is_mega`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this form requires mega evolution.</td>
    </tr>
    <tr>
      <td>`form_name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name of this form.</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon that can take on this form.</td>
    </tr>
    <tr>
      <td>`types`</td>
      <td>[`Array<PokemonFormType>`](#pokemonformtype)</td>
      <td>Yes</td>
      <td>A list of details showing types this Pokémon form has.</td>
    </tr>
    <tr>
      <td>`sprites`</td>
      <td>[`PokemonFormSprites`](#pokemonformsprites)</td>
      <td>Yes</td>
      <td>A list of details showing types this Pokémon form has.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Name`](../utils#name)</td>
      <td>Yes</td>
      <td>The form specific full name of this Pokémon form, or empty if the form does not have a specific name.</td>
    </tr>
    <tr>
      <td>`form_names`</td>
      <td>[`Name`](../utils#name)</td>
      <td>Yes</td>
      <td>The form specific form name of this Pokémon form, or empty if the form does not have a specific name.</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group this Pokémon form was introduced in.</td>
    </tr>
  </tbody>
</table>


### PokemonFormType
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The order the Pokémon's types are listed in.</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>[`<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The type the referenced Form has.</td>
    </tr>
  </tbody>
</table>

### PokemonFormSprites
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`front_default`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The default depiction of this Pokémon form from the front in battle.</td>
    </tr>
    <tr>
      <td>`back_default`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The default depiction of this Pokémon form from the back in battle</td>
    </tr>
    <tr>
      <td>`front_shiny`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The shiny depiction of this Pokémon form from the front in battle.
      .</td>
    </tr>
    <tr>
      <td>`back_shiny`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The shiny depiction of this Pokémon form from the back in battle.</td>
    </tr>
  </tbody>
</table>

## PokemonHabitat
Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_entries`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of the Pokémon species that can be found in this habitat</td>
    </tr>
  </tbody>
</table>

## PokemonLocationArea
Pokémon Location Areas are ares where Pokémon can be found.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`location_area`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The location area the referenced Pokémon can be encountered in.</td>
    </tr>
    <tr>
      <td>`version_details`</td>
      <td>[`Array<VersionEncounterDetail>`](../utils#versionencounterdetail)</td>
      <td>Yes</td>
      <td>A list of versions and encounters with the referenced Pokémon that might happen.</td>
    </tr>
  </tbody>
</table>

## PokemonShape
Shapes used for sorting Pokémon in a Pokédex.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`awesome_names`</td>
      <td>[`Array<AwesomeName>`](#awesomename)</td>
      <td>Yes</td>
      <td>The "scientific" name of this Pokémon shape listed in different languages.</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of the Pokémon species that can be found in this habitat</td>
    </tr>
  </tbody>
</table>

### AwesomeName

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`awesome_name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized "scientific" name for an API resource in a specific language</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this "scientific" name is in</td>
    </tr>
  </tbody>
</table>

## PokemonSpecie
A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is [Wormadam](https://bulbapedia.bulbagarden.net/wiki/Wormadam_(Pok%C3%A9mon)); Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage.</td>
    </tr>
    <tr>
      <td>`gender_rate`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The chance of this Pokémon being female, in eighths; or -1 for genderless.</td>
    </tr>
    <tr>
      <td>`capture_rate`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon.</td>
    </tr>
    <tr>
      <td>`base_happiness`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>A detail of natures which affect this stat positively or negatively.</td>
    </tr>
    <tr>
      <td>`is_baby`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this is a baby Pokémon.</td>
    </tr>
    <tr>
      <td>`is_legendary`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this is a legendary Pokémon.</td>
    </tr>
    <tr>
      <td>`is_mythical`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this is a mythical Pokémon.</td>
    </tr>
    <tr>
      <td>`hatch_counter`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>One must walk 255 × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's.</td>
    </tr>
    <tr>
      <td>`has_gender_differences`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this Pokémon has visual gender differences.</td>
    </tr>
    <tr>
      <td>`forms_switchable`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this Pokémon has multiple forms and can switch between them.</td>
    </tr>
    <tr>
      <td>`growth_rate`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The rate at which this Pokémon species gains levels.</td>
    </tr>
    <tr>
      <td>`pokedex_numbers`</td>
      <td>[`Array<PokemonSpecieDexEntry>`](#pokemonspeciedexentry)</td>
      <td>Yes</td>
      <td>A list of Pokedexes and the indexes reserved within them for this Pokémon species.</td>
    </tr>
    <tr>
      <td>`egg_groups`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of egg groups this Pokémon species is a member of.</td>
    </tr>
    <tr>
      <td>`color`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The color of this Pokémon for Pokédex search.</td>
    </tr>
    <tr>
      <td>`shape`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The shape of this Pokémon for Pokédex search.</td>
    </tr>
    <tr>
      <td>`evolves_from_species`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon species that evolves into this Pokemon_species.</td>
    </tr>
    <tr>
      <td>`evolution_chain`</td>
      <td>[`APIResource`](../utils#apiresource)</td>
      <td>Yes</td>
      <td>The evolution chain this Pokémon species is a member of.</td>
    </tr>
    <tr>
      <td>`habitat`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The habitat this Pokémon species can be encountered in.</td>
    </tr>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation this Pokémon species was introduced in.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`pal_park_encounters`</td>
      <td>[`PalParkEncounterArea`](#palparkencounterarea)</td>
      <td>Yes</td>
      <td>A list of encounters that can be had with this Pokémon species in pal park.</td>
    </tr>
    <tr>
      <td>`flavor_text_entries`</td>
      <td>[`Array<FlavorText>`](../utils#flavortext)</td>
      <td>Yes</td>
      <td>A list of flavor text entries for this Pokémon species.</td>
    </tr>
    <tr>
      <td>`forms_descriptions`</td>
      <td>[`Array<Description>`](../utils#description)</td>
      <td>Yes</td>
      <td>Descriptions of different forms Pokémon take on within the Pokémon species.</td>
    </tr>
    <tr>
      <td>`genera`</td>
      <td>[`Genus`](#genus)</td>
      <td>Yes</td>
      <td>The genus of this Pokémon species listed in multiple languages.</td>
    </tr>
    <tr>
      <td>`varieties`</td>
      <td>[`PokemonSpecieVariety`](#pokemonspecievariety)</td>
      <td>Yes</td>
      <td>A list of the Pokémon that exist within this Pokémon species.</td>
    </tr>
  </tbody>
</table>

### PokemonSpecieDexEntry
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`entry_number`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The index number within the Pokédex.</td>
    </tr>
    <tr>
      <td>`pokedex`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokédex the referenced Pokémon species can be found in.</td>
    </tr>
  </tbody>
</table>

### PalParkEncounterArea
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`rate`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base rate for encountering the referenced Pokémon in this pal park area.</td>
    </tr>
    <tr>
      <td>`base_score`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base score given to the player when the referenced Pokémon is caught during a pal park run.</td>
    </tr>
    <tr>
      <td>`area`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The pal park area where this encounter happens.</td>
    </tr>
  </tbody>
</table>

### Genus
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`genus`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized genus for the referenced Pokémon species.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this genus is in.</td>
    </tr>
  </tbody>
</table>

### PokemonSpecieVariety
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`is_default`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether this variety is the default variety.</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon variety.</td>
    </tr>
  </tbody>
</table>

## PokemonStat
Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Name`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`game_index`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>ID the games use for this stat.</td>
    </tr>
    <tr>
      <td>`is_battle_only`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether this stat only exists within a battle.</td>
    </tr>
    <tr>
      <td>`affecting_moves`</td>
      <td>[`MoveStatAffectSet`](#movestataffectset)</td>
      <td>Yes</td>
      <td>A detail of moves which affect this stat positively or negatively.</td>
    </tr>
    <tr>
      <td>`affecting_natures`</td>
      <td>[`NatureStatAffectSet`](#naturestataffectset)</td>
      <td>Yes</td>
      <td>A detail of natures which affect this stat positively or negatively.</td>
    </tr>
    <tr>
      <td>`characteristics`</td>
      <td>[`APIResource`](../utils#apiresource)</td>
      <td>Yes</td>
      <td>A list of characteristics that are set on a Pokémon when its highest base stat is this stat.</td>
    </tr>
    <tr>
      <td>`move_damage_class`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The class of damage this stat is directly related to.</td>
    </tr>
  </tbody>
</table>

### MoveStatAffectSet
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`increase`</td>
      <td>[`Array<MoveStatAffect>`](#movestataffect)</td>
      <td>Yes</td>
      <td>A list of moves and how they change the referenced stat.</td>
    </tr>
    <tr>
      <td>`decrease`</td>
      <td>[`Array<MoveStatAffect>`](#movestataffect)</td>
      <td>Yes</td>
      <td>A list of moves and how they change the referenced stat.</td>
    </tr>
  </tbody>
</table>

### MoveStatAffect
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`change`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The maximum amount of change to the referenced stat.</td>
    </tr>
    <tr>
      <td>`move`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The move causing the change.</td>
    </tr>
  </tbody>
</table>

### NatureStatAffectSet
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`increase`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of natures and how they change the referenced stat.</td>
    </tr>
    <tr>
      <td>`decrease`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of nature sand how they change the referenced stat.</td>
    </tr>
  </tbody>
</table>

## PokemonType
Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The identifier for this resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this resource.</td>
    </tr>
    <tr>
      <td>`damage_relations`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>A detail of how effective this type is toward others and vice versa.</td>
    </tr>
    <tr>
      <td>`past_damage_relations`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>A list of details of how effective this type was toward others and vice versa in previous generations.</td>
    </tr>
    <tr>
      <td>`game_indices`</td>
      <td>[`Array<GenerationGameIndex>`](../utils#generationgameindex)</td>
      <td>Yes</td>
      <td>A list of game indices relevent to this item by generation.</td>
    </tr>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation this type was introduced in.</td>
    </tr>
    <tr>
      <td>`move_damage_class`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The class of damage inflicted by this type.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of details of Pokémon that have this type.</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves that have this type.</td>
    </tr>
  </tbody>
</table>

### TypePokemon
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`slot`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The order the Pokémon's types are listed in.</td>
    </tr>
    <tr>
      <td>`pokemon`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon that has the referenced type.</td>
    </tr>
  </tbody>
</table>

### TypeRelations
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`no_damage_to`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of types this type has no effect on.</td>
    </tr>
    <tr>
      <td>`half_damage_to`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of types this type is not very effect against.</td>
    </tr>
    <tr>
      <td>`double_damage_to`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of types this type is very effect against.</td>
    </tr>
    <tr>
      <td>`no_damage_from`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of types that have no effect on this type.</td>
    </tr>
    <tr>
      <td>`half_damage_from`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of types that are not very effective against this type.</td>
    </tr>
    <tr>
      <td>`double_damage_from`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of types that are very effective against this type.</td>
    </tr>
  </tbody>
</table>

### TypeRelationsPast
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The last generation in which the referenced type had the listed damage relations.</td>
    </tr>
    <tr>
      <td>`no_damage_from`</td>
      <td>[`TypeRelations`](#typerelations)</td>
      <td>Yes</td>
      <td>The damage relations the referenced type had up to and including the listed generation.</td>
    </tr>
  </tbody>
</table>
