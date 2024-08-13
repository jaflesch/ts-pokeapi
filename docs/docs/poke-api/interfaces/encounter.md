---
sidebar_position: 3
---

# Encounters

Wild Pokémon are encountered in most parts of the Pokémon world, most commonly outside of cities and towns, often in tall grass, in caves, or on water. A Trainer may choose to battle a wild Pokémon or run from it. If a Trainer chooses to battle, they may either attempt to catch the Pokémon with a Poké Ball or to defeat it outright.

## EncounterMethod

Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Wild_Pok%C3%A9mon) for greater detail.

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
      <td>A good value for sorting.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
  </tbody>
</table>

## EncounterCondition

Conditions which affect what pokemon might appear in the wild, e.g., day or night.

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
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`values`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of possible values for this encounter condition.</td>
    </tr>
  </tbody>
</table>

## EncounterConditionValue

Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.

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
      <td>[`Array<Name>`](../utils#name)</td>
      <td>Yes</td>
      <td>The name of this contest type listed in different languages.</td>
    </tr>
    <tr>
      <td>`condition`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The condition this encounter condition value pertains to.</td>
    </tr>
    
  </tbody>
</table>