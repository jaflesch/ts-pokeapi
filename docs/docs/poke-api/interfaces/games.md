---
sidebar_position: 4
---

# Games

## Generation

A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.

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
      <td>`main_region`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The main region travelled in this generation</td>
    </tr>
    <tr>
      <td>`abilities`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of abilities that were introduced in this generation</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves that were introduced in this generation</td>
    </tr>
    <tr>
      <td>`types`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of types that were introduced in this generation</td>
    </tr>
  </tbody>
  <tr>
      <td>`pokemon_species`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of Pokémon species that were introduced in this generation</td>
    </tr>
    <tr>
      <td>`version_groups`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of version groups that were introduced in this generation</td>
    </tr>
</table>

## Pokedex

A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex) for greater detail.

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
      <td>`is_main_series`</td>
      <td>`boolean`</td>
      <td>Yes</td>
      <td>Whether or not this Pokédex originated in the main series of the video games</td>
    </tr>
    <tr>
      <td>`region`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The region this Pokédex catalogues Pokémon for</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils/#description)</td>
      <td>Yes</td>
      <td>The description of this resource listed in different languages</td>
    </tr>
  </tbody>
  <tr>
      <td>`pokemon_entries`</td>
      <td>[`Array<PokemonEntry>`](#pokemonentry)</td>
      <td>Yes</td>
      <td>A list of Pokémon catalogued in this Pokédex and their indexes</td>
    </tr>
    <tr>
      <td>`version_groups`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of version groups this Pokédex is relevant to</td>
    </tr>
</table>

### PokemonEntry

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
      <td>The index of this Pokémon species entry within the Pokédex</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The Pokémon species being encountered.</td>
    </tr>
  </tbody>
</table>

## Version

Version groups categorize highly similar versions of the games.

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
      <td>[`Array<Names>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages</td>
    </tr>
    <tr>
      <td>`pokemon_species`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The version group this version belongs to</td>
    </tr>
  </tbody>
</table>

## VersionGroup

Version groups categorize highly similar versions of the games.

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
      <td>`order`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Order for sorting. Almost by date of release, except similar versions are grouped together</td>
    </tr>
    <tr>
      <td>`generation`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The generation this version was introduced in</td>
    </tr>
    <tr>
      <td>`move_learn_methods`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of methods in which Pokémon can learn moves in this version group</td>
    </tr>
    <tr>
      <td>`pokedexes`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of Pokédexes introduces in this version group</td>
    </tr>
    <tr>
      <td>`regions`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of regions that can be visited in this version group</td>
    </tr>
    <tr>
      <td>`versions`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The versions this version group owns</td>
    </tr>
  </tbody>
</table>

