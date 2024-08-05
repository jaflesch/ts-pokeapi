---
sidebar_position: 6
---

# Locations

## Location

Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.

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
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`region`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource) or `null`</td>
      <td>Yes</td>
      <td>The region this location can be found in</td>
    </tr>
    <tr>
      <td>`games_indices`</td>
      <td>[`Array<GenerationGameIndex>`](../utils/#generationgameindex)</td>
      <td>Yes</td>
      <td>A list of game indices relevent to this location by generation</td>
    </tr>
    <tr>
      <td>`areas`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>Areas that can be found within this location</td>
    </tr>
  </tbody>
</table>

## LocationArea

Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.

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
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`location`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The region this location area can be found in.</td>
    </tr>
    <tr>
      <td>`encounter_method_rates`</td>
      <td>[`Array<EncounterMethodRate>`](#encountermethodrate)</td>
      <td>Yes</td>
      <td>A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game</td>
    </tr>
    <tr>
      <td>`pokemon_encounters`</td>
      <td>[`Array<PokemonEncounter>`](#pokemonencounter)</td>
      <td>Yes</td>
      <td>A list of Pokémon that can be encountered in this area along with version specific details about the encounter</td>
    </tr>
  </tbody>
</table>

### EncounterMethodRate

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
      <td>`encounter_method`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The method in which Pokémon may be encountered in an area</td>
    </tr>
    <tr>
      <td>`version_details`</td>
      <td>[`EncounterVersionDetail`](#encounterversiondetail)</td>
      <td>Yes</td>
      <td>The chance of the encounter to occur on a version of the game</td>
    </tr>
  </tbody>
</table>

### EncounterVersionDetail

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
      <td>The method in which Pokémon may be encountered in an area</td>
    </tr>
    <tr>
      <td>`version`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The chance of the encounter to occur on a version of the game</td>
    </tr>
  </tbody>
</table>

### PokemonEncounter

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
      <td>`pokemon`</td>
       <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon being encountered</td>
    </tr>
    <tr>
      <td>`version_details`</td>
      <td>[`VersionEncounterDetail`](../utils#versionencounterdetail)</td>
      <td>Yes</td>
      <td>A list of versions and encounters with Pokémon that might happen in the referenced location area</td>
    </tr>
  </tbody>
</table>

## PalParkArea

Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to [Pal Park](https://bulbapedia.bulbagarden.net/wiki/Pal_Park).

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
      <td>`pokemon_encounters`</td>
      <td>[`PalParkEncounterSpecie`](#palparkencounterspecie)</td>
      <td>Yes</td>
      <td>A list of Pokémon encountered in this pal park area along with details.</td>
    </tr>
  </tbody>
</table>

### PalParkEncounterSpecie

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
      <td>`base_score`</td>
       <td>`number`</td>
      <td>Yes</td>
      <td>The base score given to the player when this Pokémon is caught during a pal park run</td>
    </tr>
    <tr>
      <td>`rate`</td>
       <td>`number`</td>
      <td>Yes</td>
      <td>The base rate for encountering this Pokémon in this pal park area</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
       <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon species being encountered</td>
    </tr>
  </tbody>
</table>

## Region

A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.

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
      <td>`main_generation`</td>
       <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation this region was introduced in</td>
    </tr>
    <tr>
      <td>`locations`</td>
       <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of locations that can be found in this region</td>
    </tr>
    <tr>
      <td>`pokedexes`</td>
       <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of pokédexes that catalogue Pokémon in this region</td>
    </tr>
    <tr>
      <td>`version_groups`</td>
       <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of version groups where this region can be visited</td>
    </tr>
  </tbody>
</table>