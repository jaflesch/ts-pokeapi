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
}); // returns 'Adamant'
```


## Type Definitions

### GetNatureNameParam

An enumeration of stats from [PokemonStatId](#example) and [PokemonStatName](#example), excluding HP, Accuracy, and Evasion.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th width="50%">Name</th>
      <th>Value</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>`PokemonStatId.ATTACK`</td>
        <td>`2`</td>
      </tr>
      <tr>
        <td>`PokemonStatId.DEFENSE`</td>
        <td>`3`</td>
      </tr>
      <tr>
        <td>`PokemonStatId.SPECIAL_ATTACK`</td>
        <td>`4`</td>
      </tr>
      <tr>
        <td>`PokemonStatId.SPECIAL_DEFENSE`</td>
        <td>`5`</td>
      </tr>
      <tr>
        <td>`PokemonStatId.SPEED`</td>
        <td>`6`</td>
      </tr>
      <tr>
        <td>`PokemonStatName.ATTACK`</td>
        <td>`'attack'`</td>
      </tr>
      <tr>
        <td>`PokemonStatName.DEFENSE`</td>
        <td>`'defense'`</td>
      </tr>
      <tr>
        <td>`PokemonStatName.SPECIAL_ATTACK`</td>
        <td>`'special-attack'`</td>
      </tr>
      <tr>
        <td>`PokemonStatName.SPECIAL_DEFENSE`</td>
        <td>`'special-defense'`</td>
      </tr>
      <tr>
        <td>`PokemonStatName.SPEED`</td>
        <td>`'speed'`</td>
      </tr>
  </tbody>
</table>

### NatureName

An enumeration of all Pokémon natures.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th width="50%">Name</th>
      <th>Value</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>`NatureName.ADAMANT`</td>
        <td>`'Adamant'`</td>
      </tr>
      <tr>
        <td>`NatureName.BASHFUL`</td>
        <td>`'Bashful'`</td>
      </tr>
      <tr>
        <td>`NatureName.BOLD`</td>
        <td>`'Bold'`</td>
      </tr>
      <tr>
        <td>`NatureName.BRAVE`</td>
        <td>`'Brave'`</td>
      </tr>
      <tr>
        <td>`NatureName.CALM`</td>
        <td>`'Calm'`</td>
      </tr>
      <tr>
        <td>`NatureName.CAREFUL`</td>
        <td>`'Careful'`</td>
      </tr>
      <tr>
        <td>`NatureName.DOCILE`</td>
        <td>`'Docile'`</td>
      </tr>
      <tr>
        <td>`NatureName.GENTLE`</td>
        <td>`'Gentle'`</td>
      </tr>
      <tr>
        <td>`NatureName.HARDY`</td>
        <td>`'Hardy'`</td>
      </tr>
      <tr>
        <td>`NatureName.HASTY`</td>
        <td>`'Hasty'`</td>
      </tr>
      <tr>
        <td>`NatureName.IMPISH`</td>
        <td>`'Impish'`</td>
      </tr>
      <tr>
        <td>`NatureName.JOLLY`</td>
        <td>`'Jolly'`</td>
      </tr>
      <tr>
        <td>`NatureName.LAX`</td>
        <td>`'Lax'`</td>
      </tr>
      <tr>
        <td>`NatureName.LONELY`</td>
        <td>`'Lonely'`</td>
      </tr>
      <tr>
        <td>`NatureName.MILD`</td>
        <td>`'Mild'`</td>
      </tr>
      <tr>
        <td>`NatureName.MODEST`</td>
        <td>`'Modest'`</td>
      </tr>
      <tr>
        <td>`NatureName.NAIVE`</td>
        <td>`'Naive'`</td>
      </tr>
      <tr>
        <td>`NatureName.NAUGHTY`</td>
        <td>`'Naughty'`</td>
      </tr>
      <tr>
        <td>`NatureName.QUIET`</td>
        <td>`'Quiet'`</td>
      </tr>
      <tr>
        <td>`NatureName.QUIRKY`</td>
        <td>`'Quirky'`</td>
      </tr>
      <tr>
        <td>`NatureName.RASH`</td>
        <td>`'Rash'`</td>
      </tr>
      <tr>
        <td>`NatureName.RELAXED`</td>
        <td>`'Relaxed'`</td>
      </tr>
      <tr>
        <td>`NatureName.SASSY`</td>
        <td>`'Sassy'`</td>
      </tr>
      <tr>
        <td>`NatureName.SERIOUS`</td>
        <td>`'Serious'`</td>
      </tr>
      <tr>
        <td>`NatureName.TIMID`</td>
        <td>`'Timid'`</td>
      </tr>
  </tbody>
</table>