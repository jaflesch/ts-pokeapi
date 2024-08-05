---
sidebar_position: 10
---

# Utillity

## Language

Languages for translations of API resource information.

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
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The identifier for this resource</td>
    </tr>
    <tr>
      <td>`official`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not the games are published in this language.</td>
    </tr>
    <tr>
      <td>`iso639`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The two-letter code of the country where this language is spoken. Note that it is not unique</td>
    </tr>
    <tr>
      <td>`iso3166`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The two-letter code of the language. Note that it is not unique</td>
    </tr>
  </tbody>
</table>
    

## Common 
### APIResource
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
      <td>`url`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The URL of the referenced resource.</td>
    </tr>
  </tbody>
</table>


### Description

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
      <td>`description`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized description for an API resource in a specific language.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this name is in.</td>
    </tr>
  </tbody>
</table>


### Effect
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
      <td>`effect`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized effect text for an API resource in a specific language.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this name is in.</td>
    </tr>
  </tbody>
</table>


### Encounter
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
      <td>`min_level`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The lowest level the Pokémon could be encountered at.</td>
    </tr>
    <tr>
      <td>`max_level`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The highest level the Pokémon could be encountered at.</td>
    </tr>
    <tr>
      <td>`condition_values`</td>
      <td>[`Array<NamedAPIResource>`](#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of condition values that must be in effect for this encounter to occur.</td>
    </tr>
    <tr>
      <td>`chance`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Percent chance that this encounter will occur.</td>
    </tr>
    <tr>
      <td>`method`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The method by which this encounter happens.</td>
    </tr>
  </tbody>
</table>


### FlavorText
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
      <td>The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this name is in.</td>
    </tr>
    <tr>
      <td>`version`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The game version this flavor text is extracted from.</td>
    </tr>
  </tbody>
</table>


### GenerationGameIndex
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
      <td>`game_index`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The internal id of an API resource within game data.</td>
    </tr>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation relevent to this game index.</td>
    </tr>
  </tbody>
</table>


### MachineVersionDetail
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
      <td>`machine`</td>
      <td>[`APIResource`](#apiresource)</td>
      <td>Yes</td>
      <td>The machine that teaches a move from an item.</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group of this specific machine.</td>
    </tr>
  </tbody>
</table>


### Name
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
      <td>`url`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The URL of the referenced resource.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this name is in.</td>
    </tr>
  </tbody>
</table>

### NamedAPIResource
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
      <td>`url`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The URL of the referenced resource.</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name of the referenced resource.</td>
    </tr>
  </tbody>
</table>


### VerboseEffect
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
      <td>`effect`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized effect text for an API resource in a specific language.</td>
    </tr>
    <tr>
      <td>`short_effect`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized effect text in brief.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this effect is in.</td>
    </tr>
  </tbody>
</table>


### VersionEncounterDetail

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
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The game version this encounter happens in.</td>
    </tr>
    <tr>
      <td>`max_chance`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The total percentage of all encounter potential.</td>
    </tr>
    <tr>
      <td>`encounter_details`</td>
      <td>[`Array<Encounter>`](#encounter)</td>
      <td>Yes</td>
      <td>A list of encounters and their specifics.</td>
    </tr>
  </tbody>
</table>


### VersionGameIndex
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
      <td>`game_ondex`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The internal id of an API resource within game data.</td>
    </tr>
    <tr>
      <td>`version`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The version relevent to this game index.</td>
    </tr>
  </tbody>
</table>



### VersionGroupFlavorText
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
      <td>`text`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The localized name for an API resource in a specific language.</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this flavor text is in.</td>
    </tr>
    <tr>
      <td>`version_group`</td>
      <td>[`NamedAPIResource`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group which uses this flavor text.</td>
    </tr>
  </tbody>
</table>


## Other

Other interfaces and data structures exclusive from TS PokéAPI to help you handle PokéAPI resource responses.

### PaginatedResult
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
      <td>`count`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The localized name for an API resource in a specific language.</td>
    </tr>
    <tr>
      <td>`next`</td>
      <td>`number`, or `null`</td>
      <td>Yes</td>
      <td>The localized name for an API resource in a specific language.</td>
    </tr>
    <tr>
      <td>`previous`</td>
      <td>`number`, or `null`</td>
      <td>Yes</td>
      <td>The localized name for an API resource in a specific language.</td>
    </tr>
    <tr>
      <td>`results`</td>
      <td>[`Array<NamedAPIResource>`](#namedapiresource)</td>
      <td>Yes</td>
      <td>The language this flavor text is in.</td>
    </tr>
  </tbody>
</table>


### RelativePhysicalStatEvolution
An enumeration of `string` values for each Pokémon type's name.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Enumerable</td>
    </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RelativePhysicalStatEvolution.ATK_GT_DEF</td>
      <td>`1`</td>
    </tr>
    <tr>
      <td>RelativePhysicalStatEvolution.ATK_EQ_DEF</td>
      <td>`0`</td>
    </tr>
    <tr>
      <td>RelativePhysicalStatEvolution.ATK_LT_DEF</td>
      <td>`-1`</td>
    </tr>
  </tbody>
</table>

### SubCollectionResource
An enumeration of `string` values for each PokéApi resources that has a subcollection endpoint.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>enum(`'pokemon-location-area'`)</td>
    </tr>
  </tbody>
</table>


### TimeOfDay

An enumeration of `string` values for each Pokémon type's name.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Enumerable</td>
    </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TimeOfDay.DAY</td>
      <td>`'day'`</td>
    </tr>
    <tr>
      <td>TimeOfDay.NIGHT</td>
      <td>`'night'`</td>
    </tr>
    <tr>
      <td>TimeOfDay.DUSK</td>
      <td>`'dusk'`</td>
    </tr>
  </tbody>
</table>

### UnnamedPaginationResource
An enumeration of `string` values for each PokéApi resources that returns only resource url data without name.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>enum(`'machine'`, `'characteristic'`, `'contest-effect'`, `'evolution-chain'`, `'super-contest-effect'`)</td>
    </tr>
  </tbody>
</table>