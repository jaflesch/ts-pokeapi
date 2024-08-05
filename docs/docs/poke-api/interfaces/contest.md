---
sidebar_position: 2
---

# Contests

## ContestType

Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.

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
      <td>`berry_flavor`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The berry flavor that correlates with this contest type</td>
    </tr>
    <tr>
      <td>`names`</td>
      <td>[`Array<ContestName>`](#contestname)</td>
      <td>Yes</td>
      <td>The name of this contest type listed in different languages</td>
    </tr>
  </tbody>
</table>

### ContestName

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
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The name for this contest</td>
    </tr>
    <tr>
      <td>`color`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The color associated with this contest's name</td>
    </tr>
    <tr>
      <td>`language`</td>
      <td>[`NamedAPIResource`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>The language that this name is in</td>
    </tr>
  </tbody>
</table>

## ContestEffect

Contest effects refer to the effects of moves when used in contests.

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
      <td>`appeal`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The base number of hearts the user of this move gets</td>
    </tr>
    <tr>
      <td>`jam`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`effect_entries`</td>
      <td>[`Array<Effect>`](../utils/#effect)</td>
      <td>Yes</td>
      <td>The name for this resource</td>
    </tr>
    <tr>
      <td>`flavor_text_entries`</td>
      <td>[`Array<FlavorText>`](../utils/#flavortext)</td>
      <td>Yes</td>
      <td>The flavor text of this contest effect listed in different languages</td>
    </tr>
  </tbody>
</table>

## SuperContestEffect

Super contest effects refer to the effects of moves when used in super contests.

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
      <td>`appeal`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The level of appeal this super contest effect has</td>
    </tr>
    <tr>
      <td>`flavor_text_entries`</td>
      <td>[`Array<FlavorText>`](../utils/#flavortext)</td>
      <td>Yes</td>
      <td>The flavor text of this super contest effect listed in different languages</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td>[`Array<NamedAPIResource>`](../utils/#namedapiresource)</td>
      <td>Yes</td>
      <td>A list of moves that have the effect when used in super contests</td>
    </tr>
  </tbody>
</table>