---
sidebar_position: 1
---

# Constants

## Type Definitions

### PokemonTypesArrayIndex

An enumeration of `number` corresponding to indexes for Pokémon types, base in order presented on chart at [Pokémon DB](https://pokemondb.net/type).

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
      <td>PokemonTypeName.NORMAL</td>
      <td>`0`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FIRE</td>
      <td>`1`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.WATER</td>
      <td>`2`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.ELECTRIC</td>
      <td>`3`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.GRASS</td>
      <td>`4`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.ICE</td>
      <td>`5`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FIGHTING</td>
      <td>`6`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.POISON</td>
      <td>`7`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.GROUND</td>
      <td>`8`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FLYING</td>
      <td>`9`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.PSYCHIC</td>
      <td>`10`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.BUG</td>
      <td>`11`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.ROCK</td>
      <td>`12`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.GHOST</td>
      <td>`13`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.DRAGON</td>
      <td>`14`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.DARK</td>
      <td>`15`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.STEEL</td>
      <td>`16`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FAIRY</td>
      <td>`17`</td>
    </tr>
  </tbody>
</table>


### PokemonTypeName

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
      <td>PokemonTypeName.NORMAL</td>
      <td>`'NORMAL'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FIRE</td>
      <td>`'FIRE'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.WATER</td>
      <td>`'WATER'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.ELECTRIC</td>
      <td>`'ELECTRIC'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.GRASS</td>
      <td>`'GRASS'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.ICE</td>
      <td>`'ICE'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FIGHTING</td>
      <td>`'FIGHTING'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.POISON</td>
      <td>`'POISON'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.GROUND</td>
      <td>`'GROUND'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FLYING</td>
      <td>`'FLYING'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.PSYCHIC</td>
      <td>`'PSYCHIC'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.BUG</td>
      <td>`'BUG'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.ROCK</td>
      <td>`'ROCK'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.GHOST</td>
      <td>`'GHOST'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.DRAGON</td>
      <td>`'DRAGON'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.DARK</td>
      <td>`'DARK'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.STEEL</td>
      <td>`'STEEL'`</td>
    </tr>
    <tr>
      <td>PokemonTypeName.FAIRY</td>
      <td>`'FAIRY'`</td>
    </tr>
  </tbody>
</table>

### AlterSuperEffectiveDamageAbility

An enumeration of `string` values for each Pokémon ability that affects damage calculation when the move has super-effective damage.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>enum(`'filter'`, `'prism-armor'`, `'solid-rock'`, `'wonder-guard'`)</td>
    </tr>
  </tbody>
</table>

### AlterDamageAbility

An enumeration of `string` values for each Pokémon ability that affects damage calculation.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
      enum([`AlterSuperEffectiveDamageAbility`](#altersupereffectivedamageability), `'dry-skin'`, `'earth-eater'`, `'flash-fire'`, `'fluffy'`, `'heatproof'`, `'levitate'`, `'lightning-rod'`, `'motor-drive'`, `'purifying-salt'`, `'sap-sipper'`, `'storm-drain'`, `'thick-fat'`, `'volt-absorb'`, `'water-absorb'`, `'water-bubble'`, `'well-baked-body'`, `'wind-rider'`)
      </td>
    </tr>
  </tbody>
</table>