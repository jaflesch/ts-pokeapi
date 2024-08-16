---
sidebar_position: 1
---

# Berries

Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.

## Berry

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
      <td>`growth_time`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>Time it takes the tree to grow one stage, in hours. Berry trees go through four of these growth stages before they can be picked.</td>
    </tr>
    <tr>
      <td>`max_harvest`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The maximum number of these berries that can grow on one tree in Generation IV.</td>
    </tr>
    <tr>
      <td>`size`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The size of this Berry, in millimeters.</td>
    </tr>
    <tr>
      <td>`smoothness`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The smoothness of this Berry, used in making Pokéblocks or Poffins.</td>
    </tr>
    <tr>
      <td>`soil_dryness`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The speed at which this Berry dries out the soil as it grows. A higher rate means the soil dries more quickly.</td>
    </tr>
    <tr>
      <td>`firmness`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The firmness of this berry, used in making Pokéblocks or Poffins.</td>
    </tr>
    <tr>
      <td>flavors</td>
      <td>[`Array<BerryFlavorMap>`](#berryflavormap) </td>
      <td>Yes</td>
      <td>A list of references to each flavor a berry can have and the potency of each of those flavors in regard to this berry.</td>
    </tr>
    <tr>
      <td>item</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>Berries are actually items. This is a reference to the item specific data for this berry.</td>
    </tr>
    <tr>
      <td>`natural_gift_power`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The power of the move [Natural Gift](https://bulbapedia.bulbagarden.net/wiki/Natural_Gift_(move)) when used with this Berry.</td>
    </tr>
    <tr>
      <td>natural_gift_type</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The type inherited by [Natural Gift](https://bulbapedia.bulbagarden.net/wiki/Natural_Gift_(move)) when used with this Berry.</td>
    </tr>
  </tbody>
</table>

### BerryFlavorMap

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
      <td>potency</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The potency of the flavor.</td>
    </tr>
    <tr>
      <td>flavor</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The flavor of the berry.</td>
    </tr>
  </tbody>
</table>

## BerryFlavor

Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.

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
      <td>`berries`</td>
      <td>[`Array<FlavorBerryMap>`](#flavorberrymap)</td>
      <td>Yes</td>
      <td>A list of the berries with this flavor.</td>
    </tr>
    <tr>
      <td>`contest_type`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The contest type that correlates with this berry flavor.</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<Name>`](../utils/#name)</td>
      <td>Yes</td>
      <td>The name of this resource listed in different languages.</td>
    </tr>
  </tbody>
</table>

### FlavorBerryMap

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
      <td>`potency`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The potency of the flavor.</td>
    </tr>
    <tr>
      <td>`berry`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The berry associated with the flavor.</td>
    </tr>
  </tbody>
</table>

## BerryFirmness

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
      <td>`berries`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of the berries with this firmness.</td>
    </tr>
  </tbody>
</table>