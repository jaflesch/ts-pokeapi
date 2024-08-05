---
sidebar_position: 1
---

# Showdown

Pokémon Showdown is an online Pokémon battle simulator. It simulates singles, doubles and triples battles in all the games out so far (Generations 1 through 9). It is a very popular environment for competitive gameplay.

::::info
For more info, visit [Pokémon ShowDown](https://pokemonshowdown.com/).
::::

## Methods
### format()
Returns a string with formatted Pokémon data as Showdown's Teambuilder user-friendly export format.

#### Signature
```typescript
format(params: FormatParams) => string
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="40%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`FormatParams`](#formatparams)</td>
      <td>Yes</td>
      <td>
      Increased stat of nature.
      </td>
    </tr>
    <tr>
      <td>`params.pokemon`</td>
      <td>`PokemonSpecie` or `string`</td>
      <td>Yes</td>
      <td>The Pokémon name</td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon level.</td>
    </tr>
    <tr>
      <td>`params.gender`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon gender.</td>
    </tr>
    <tr>
      <td>`params.happiness`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon happiness.</td>
    </tr>
    <tr>
      <td>`params.shiny`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>If the Pokémon is shiny or not.</td>
    </tr>
    <tr>
      <td>`params.tera`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon Tera type.</td>
    </tr>
    <tr>
      <td>`params.nickname`</td>
      <td>`string`</td>
      <td>No</td>
      <td>The Pokémon nickname.</td>
    </tr>
    <tr>
      <td>`params.item`</td>
      <td>`string`</td>
      <td>No</td>
      <td>The Pokémon's item.</td>
    </tr>
    <tr>
      <td>`params.ability`</td>
      <td>`string`</td>
      <td>No</td>
      <td>The Pokémon's ability.</td>
    </tr>
    <tr>
      <td>`params.moves`</td>
      <td>`string[]`</td>
      <td>No</td>
      <td>The Pokémon's list of moves.</td>
    </tr>
    <tr>
      <td>`params.nature`</td>
      <td>`NatureName`</td>
      <td>No</td>
      <td>The Pokémon's nature.</td>
    </tr>
    <tr>
      <td>`params.ivs`</td>
      <td>`object`</td>
      <td>No</td>
      <td>The Pokémon's IVs.</td>
    </tr>
    <tr>
      <td>`params.ivs.hp`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's HP IV.</td>
    </tr>
    <tr>
      <td>`params.ivs.attack`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Attack IV.</td>
    </tr>
    <tr>
      <td>`params.ivs.defense`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Defense IV.</td>
    </tr>
    <tr>
      <td>`params.ivs.specialAttack`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Special Attack IV.</td>
    </tr>
    <tr>
      <td>`params.ivs.specialDefense`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Special Defense IV.</td>
    </tr>
    <tr>
      <td>`params.ivs.speed`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Speed IV.</td>
    </tr>
    <tr>
      <td>`params.evs`</td>
      <td>`object`</td>
      <td>No</td>
      <td>The Pokémon's EVs.</td>
    </tr>
    <tr>
      <td>`params.evs.hp`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's HP EVs.</td>
    </tr>
    <tr>
      <td>`params.evs.attack`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Attack EVs.</td>
    </tr>
    <tr>
      <td>`params.evs.defense`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Defense EVs.</td>
    </tr>
    <tr>
      <td>`params.evs.specialAttack`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Special Attack EVs.</td>
    </tr>
    <tr>
      <td>`params.evs.specialDefense`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Special Defense EVs.</td>
    </tr>
    <tr>
      <td>`params.evs.speed`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Speed EVs.</td>
    </tr>
  </tbody>
</table>


#### Returns
A string.

#### Example

```typescript
const pokemon = await pokeapi('pikachu').get();
format({
  pokemon,
  level: 50,
  shiny: true,
  tera: PokemonTypeName.FLYING,
  ability: 'Static',
  item: 'Light Ball',
  moves: ['Thunder', 'Nuzzle', 'Surf', 'Charm'],
  ivs: {
    attack: 0,
  },
  evs: {
    hp: 4,
    speed: 252,
    specialAttack: 252,
  },
});
/*
  outputs:
  Pikachu @ Light Ball
  Ability: Static
  Level: 50
  Shiny: Yes
  Tera Type: Flying
  EVs: 4 HP / 252 SpA / 252 Spe
  IVs: 0 Atk
  - Thunder
  - Nuzzle
  - Surf
  - Charm
*/
```


## Type Definitions

### FormatParams

An interface to parse data into a string value with [`format()`](#format).

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Interface</td>
      </tr>
  </tbody>
</table>

#### Properties
<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Name</th>
      <th>Required</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`pokemon`</td>
      <td> Yes </td>
      <td>[`PokemonSpecie`](../poke-api/interfaces/pokemon.md#pokemonspecie) or `string`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`gender`</td>
      <td> No </td>
      <td>enum(`'male'`, `'female'`, `'genderless'`)</td>
    </tr>
    <tr>
      <td>`happiness`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`shiny`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`tera`</td>
      <td> No </td>
      <td>[`PokemonTypeName`](../../pokemon-type/constants#pokemontypename)</td>
    </tr>
    <tr>
      <td>`nickname`</td>
      <td> No </td>
      <td>`string`</td>
    </tr>
    <tr>
      <td>`item`</td>
      <td> No </td>
      <td>`string`</td>
    </tr>
    <tr>
      <td>`ability`</td>
      <td> No </td>
      <td>`string`</td>
    </tr>
    <tr>
      <td>`moves`</td>
      <td> No </td>
      <td>`[string, string?, string?, string?]`</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td> No </td>
      <td>[`NatureName`](../utils/nature.md#naturename)</td>
    </tr>
    <tr>
      <td>`ivs`</td>
      <td> No </td>
      <td>`object`</td>
    </tr>
    <tr>
      <td>`ivs.hp`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`ivs.attack`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`ivs.defense`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`ivs.specialAttack`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`ivs.specialDefense`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`ivs.speed`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`evs`</td>
      <td> No </td>
      <td>`object`</td>
    </tr>
    <tr>
      <td>`evs.hp`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`evs.attack`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`evs.defense`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`evs.specialAttack`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`evs.specialDefense`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`evs.speed`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
  </tbody>
</table>