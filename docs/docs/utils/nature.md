---
sidebar_position: 1
---

# Nature

Nature is a trait that each individual Pokémon has which influences how their stats grow and determines their flavor preferences. The mechanic was introduced in Generation III. A Pokémon's Nature usually affects the value of two of its stats, ultimately increasing one of its non-HP stats (Attack, Defense, Special Attack, Special Defense, or Speed) by 10% and decreasing another by 10%.

::::info
For more info about Pokémon Natures, visit [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Nature).
::::

## Methods
### getNatureName 
Returns Pokémon Nature regarding increased and decreased stats. Valid stats are only Attack, Defense, Special Attack, Special Defense, and Speed.

#### Signature
```typescript
getNatureName(increase: GetNatureNameParam, decrease: GetNatureNameParam) => NatureName
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
      <td>`increase`</td>
      <td>[`GetNatureNameParam`](#getnaturenameparam)</td>
      <td>Yes</td>
      <td>
      Increased stat of nature.
      </td>
    </tr>
    <tr>
      <td>`decrease`</td>
      <td>[`GetNatureNameParam`](#getnaturenameparam)</td>
      <td>Yes</td>
      <td>
      Decreased stat of nature.
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A string from [`NatureName`](#naturename) enum.

#### Example

```typescript
getNatureName({
  increase: PokemonStatName.ATTACK,
  decrease: PokemonStatName.SPECIAL_ATTACK,
}); // outputs 'Adamant'
```


## Type Definitions

### GetNatureNameParam

An enumeration of stats from [PokemonStatId](#example) and [PokemonStatName](#example), excluding HP.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>PokemonStatId.ATTACK</td>
      </tr>
      <tr>
        <td>PokemonStatId.DEFENSE</td>
      </tr>
      <tr>
        <td>PokemonStatId.SPECIAL_ATTACK</td>
      </tr>
      <tr>
        <td>PokemonStatId.SPECIAL_DEFENSE</td>
      </tr>
      <tr>
        <td>PokemonStatId.SPEED</td>
      </tr>
      <tr>
        <td>PokemonStatName.ATTACK</td>
      </tr>
      <tr>
        <td>PokemonStatName.DEFENSE</td>
      </tr>
      <tr>
        <td>PokemonStatName.SPECIAL_ATTACK</td>
      </tr>
      <tr>
        <td>PokemonStatName.SPECIAL_DEFENSE</td>
      </tr>
      <tr>
        <td>PokemonStatName.SPEED</td>
      </tr>
  </tbody>
</table>

### NatureName

An enumeration of all Pokémon natures.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Types</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>NatureName.ADAMANT</td>
      </tr>
      <tr>
        <td>NatureName.BASHFUL</td>
      </tr>
      <tr>
        <td>NatureName.BOLD</td>
      </tr>
      <tr>
        <td>NatureName.BRAVE</td>
      </tr>
      <tr>
        <td>NatureName.CALM</td>
      </tr>
      <tr>
        <td>NatureName.CAREFUL</td>
      </tr>
      <tr>
        <td>NatureName.DOCILE</td>
      </tr>
      <tr>
        <td>NatureName.GENTLE</td>
      </tr>
      <tr>
        <td>NatureName.HARDY</td>
      </tr>
      <tr>
        <td>NatureName.HASTY</td>
      </tr>
      <tr>
        <td>NatureName.IMPISH</td>
      </tr>
      <tr>
        <td>NatureName.JOLLY</td>
      </tr>
      <tr>
        <td>NatureName.LAX</td>
      </tr>
      <tr>
        <td>NatureName.LONELY</td>
      </tr>
      <tr>
        <td>NatureName.MILD</td>
      </tr>
      <tr>
        <td>NatureName.MODEST</td>
      </tr>
      <tr>
        <td>NatureName.NAIVE</td>
      </tr>
      <tr>
        <td>NatureName.NAUGHTY</td>
      </tr>
      <tr>
        <td>NatureName.QUIET</td>
      </tr>
      <tr>
        <td>NatureName.QUIRKY</td>
      </tr>
      <tr>
        <td>NatureName.RASH</td>
      </tr>
      <tr>
        <td>NatureName.RELAXED</td>
      </tr>
      <tr>
        <td>NatureName.SASSY</td>
      </tr>
      <tr>
        <td>NatureName.SERIOUS</td>
      </tr>
      <tr>
        <td>NatureName.TIMID</td>
      </tr>
  </tbody>
</table>