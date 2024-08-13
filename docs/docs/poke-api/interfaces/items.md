---
sidebar_position: 5
---

# Items

An item is an object in the Pokémon games which the player can pick up, keep in their Bag, and use in some manner. They have various uses, including healing, powering up, helping one to catch Pokémon, or accessing new areas.

## Item

An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.

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
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`cost`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The price of this item in stores.</td>
    </tr>
    <tr>
      <td>`fling_power`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The power of the move [Fling](https://bulbapedia.bulbagarden.net/wiki/Fling_(move)) when used with this item.</td>
    </tr>
    <tr>
      <td>`fling_effect`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The effect of the move [Fling](https://bulbapedia.bulbagarden.net/wiki/Fling_(move)) when used with this item.</td>
    </tr>
    <tr>
      <td>`attributes`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of attributes this item has.</td>
    </tr>
    <tr>
      <td>`category`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The category of items this item falls into.</td>
    </tr>
    <tr>
      <td>`effect_entries`</td>
      <td>[`Array<VerboseEffect>`](../utils/#verboseeffect)</td>
      <td>Yes</td>
      <td>The effect of this ability listed in different languages.</td>
    </tr>
    <tr>
      <td>`flavor_text_entries`</td>
      <td>[`Array<VersionGroupFlavorText>`](../utils/#versiongroupflavortext)</td>
      <td>Yes</td>
      <td>The flavor text of this ability listed in different languages.</td>
    </tr>
    <tr>
      <td>`game_indices`</td>
      <td>[`Array<GenerationGameIndex>`](../utils/#generationgameindex)</td>
      <td>Yes</td>
      <td>A list of game indices relevent to this item by generation.</td>
    </tr>
    <tr>
      <td>`sprites`</td>
      <td>[`ItemSprites`](#itemsprites)</td>
      <td>Yes</td>
      <td>A set of sprites used to depict this item in the game.</td>
    </tr>
    <tr>
      <td>`held_by_pokemon`</td>
      <td>[`Array<ItemHolderPokemon>`](#itemholderpokemon)</td>
      <td>Yes</td>
      <td>A list of Pokémon that might be found in the wild holding this item.</td>
    </tr>
    <tr>
      <td>`baby_trigger_for`</td>
      <td>[`APIResource`](../utils/#apiresource)</td>
      <td>Yes</td>
      <td>An evolution chain this item requires to produce a bay during mating.</td>
    </tr>
    <tr>
      <td>`machines`</td>
      <td>[`Array<MachineVersionDetail>`](../utils/#machineversiondetail)</td>
      <td>Yes</td>
      <td>A list of the machines related to this item.</td>
    </tr>
  </tbody>
</table>

### ItemSprites

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
      <td>`default`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The default depiction of this item.</td>
    </tr>
  </tbody>
</table>

### ItemHolderPokemon

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
      <td>`string`</td>
      <td>Yes</td>
      <td>The Pokémon that holds this item.</td>
    </tr>
    <tr>
      <td>`version_details`</td>
      <td>[`Array<ItemHolderPokemonVersionDetail>`](#itemholderpokemonversiondetail)</td>
      <td>Yes</td>
      <td>The details for the version that this item is held in by the Pokémon.</td>
    </tr>
  </tbody>
</table>

### ItemHolderPokemonVersionDetail

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
      <td>`rarity`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>How often this Pokémon holds this item in this version</td>
    </tr>
    <tr>
      <td>`version`</td>
      <td>[`NamedAPIResource`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>The version that this item is held in by the Pokémon</td>
    </tr>
  </tbody>
</table>

## ItemAttribute

Item attributes define particular aspects of items, e.g. "usable in battle" or "consumable".

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
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`items`</td>
      <td>[`Array<NamedAPIResource>`](../utils#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of items that have this attribute.</td>
    </tr>
    <tr>
      <td>`descriptions`</td>
      <td>[`Array<Description>`](../utils/#description)</td>
      <td>Yes</td>
      <td>The description of this item attribute listed in different languages.</td>
    </tr>
  </tbody>
</table>

## ItemCategory

Item categories determine where items will be placed in the players bag.

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
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`items`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of items that are a part of this category.</td>
    </tr>
    <tr>
      <td>`pocket`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The pocket items in this category would be put in.</td>
    </tr>
  </tbody>
</table>

## ItemFlingEffect

The various effects of the move [Fling](https://bulbapedia.bulbagarden.net/wiki/Fling_(move)) when used with different items.

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
      <td>`items`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of items that have this Fling effect.</td>
    </tr>
    <tr>
      <td>`effect_entries`</td>
      <td>[`Array<Effect>`](../utils/#effect)</td>
      <td>Yes</td>
      <td>The result of this Fling effect listed in different languages.</td>
    </tr>
  </tbody>
</table>

## ItemPocket

Pockets within the players bag used for storing items by category.

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
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
    <tr>
      <td>`categories`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of item categories that are relevant to this item pocket.</td>
    </tr>
  </tbody>
</table>
