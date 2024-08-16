---
sidebar_position: 10
---

# Stats

A stat refers to any of several parameters pertaining to Pokémon that can affect turn order, move success, and damage output during a battle. With exception to the HP stat, a Pokémon's stat can also be temporarily raised or lowered in stages during battle through various effects.

::::info
See more on [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Stat).
::::

## Methods
### getStatValue()
Returns the Pokémon's final stat value regarding parameters sent.

#### Signature
```typescript
getStatValue(params: GetStatValueParams) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`GetStatValueParams`](#getstatvalueparams)</td>
      <td>Yes</td>
      <td>
      The general parameters used for Pokémon's stat calculation.
      </td>
    </tr>
    <tr>
      <td>`params.base`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
      </td>
    </tr>
    <tr>
      <td>`params.ev`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's Effort Value (EV) for given stat.
      </td>
    </tr>
    <tr>
      <td>`params.iv`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's Individual Value (IV) for given stat.
      </td>
    </tr>
    <tr>
      <td>`params.isHp`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating HP stat value for given Pokémon.
      </td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's level.
      </td>
    </tr>
    <tr>
      <td>`params.nature`</td>
      <td>[`NatureStatType`](#naturestattype)</td>
      <td>No</td>
      <td>
      If the Pokémon has a hindering, neutral, or enhancing nature.
      </td>
    </tr>
    <tr>
      <td>`params.isShedinja`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating a stat for [Shedinja](https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon)).
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokémon's final stat value.

#### Examples

```typescript
getStatValue({
  base: 100,
  ev: 255,
}); // returns 328

getStatValue({
  base: 100,
  ev: 255,
  isHp: true,
}); // returns 404

getStatValue({
  base: 100,
  iv: 0,
  isHp: true,
}); // returns 310

getStatValue({
  base: 100,
  isHp: true,
  isShedinja: true,
}); // returns 1
```

### getMaxStatValue()
Returns the Pokémon's final maximum possible stat value regarding parameters sent.

#### Signature
```typescript
getMaxStatValue(params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>`](#getstatvalueparams)</td>
      <td>Yes</td>
      <td>
      The general parameters used for Pokémon's maximum possible stat calculation.
      </td>
    </tr>
    <tr>
      <td>`params.base`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
      </td>
    </tr>
    <tr>
      <td>`params.isHp`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating HP stat value for given Pokémon.
      </td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's level.
      </td>
    </tr>
    <tr>
      <td>`params.isShedinja`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating a stat for [Shedinja](https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon)).
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokémon's final maximum possible stat value.

#### Example

```typescript
getMaxStatValue({
  base: 100,
}); // returns 328

getMaxStatValue({
  base: 100,
  isHp: true,
}); // returns 404
```

### getMinStatValue()
Returns the Pokémon's final minimum possible stat value regarding parameters sent.

#### Signature
```typescript
getMinStatValue(params: Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`Omit<GetStatValueParams, 'iv' | 'ev' | 'nature'>`](#getstatvalueparams)</td>
      <td>Yes</td>
      <td>
      The general parameters used for Pokémon's maximum possible stat calculation.
      </td>
    </tr>
    <tr>
      <td>`params.base`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
      </td>
    </tr>
    <tr>
      <td>`params.isHp`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating HP stat value for given Pokémon.
      </td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's level.
      </td>
    </tr>
    <tr>
      <td>`params.isShedinja`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating a stat for [Shedinja](https://bulbapedia.bulbagarden.net/wiki/Shedinja_(Pok%C3%A9mon)).
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokémon's final minimum possible stat value.

#### Example

```typescript
getMinStatValue({
  base: 100,
}); // returns 184

getMinStatValue({
  base: 100,
  isHp: true,
}); // returns 310
```

### getPriorGenIIIStatValue()
Returns the Pokémon's final stat value regarding parameters sent for Pokémon Red, Blue, Yellow, Gold, Silver, and Crystal games.

#### Signature
```typescript
getPriorGenIIIStatValue(params: Omit<GetStatValueParams, 'nature' | 'isShedinja'>) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`Omit<GetStatValueParams, 'nature' | 'isShedinja'>`](#getstatvalueparams)</td>
      <td>Yes</td>
      <td>
      The general parameters used for Pokémon's stat calculation.
      </td>
    </tr>
    <tr>
      <td>`params.base`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
      </td>
    </tr>
    <tr>
      <td>`params.ev`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's Effort Value (EV) for given stat.
      </td>
    </tr>
    <tr>
      <td>`params.iv`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's Individual Value (IV) for given stat.
      </td>
    </tr>
    <tr>
      <td>`params.isHp`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating HP stat value for given Pokémon.
      </td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's level.
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokémon's final stat value.

#### Example

```typescript
getPriorGenIIIStatValue({
  isHp: true,
  level: 81,
  base: 35,
  iv: 7,
  ev: 22850,
}); // returns 189
```


### getLegendsArceusStatValue()
Returns the Pokémon's final stat value regarding parameters sent for Pokémon Legends Arceus game.

#### Signature
```typescript
getLegendsArceusStatValue(params: GetLegendsArceusStatValueParams) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`GetLegendsArceusStatValueParams`](#getlegendsarceusstatvalueparams)</td>
      <td>Yes</td>
      <td>The general parameters used for Pokémon's stat calculation.</td>
    </tr>
    <tr>
      <td>`params.base`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).
      </td>
    </tr>
    <tr>
      <td>`params.effortLevel`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>
      The Pokémon's Effort Level for given stat.
      </td>
    </tr>
    <tr>
      <td>`params.nature`</td>
      <td>[`NatureStatType`](#naturestattype)</td>
      <td>Yes</td>
      <td>
      If the Pokémon has a hindering, neutral, or enhancing nature.
      </td>
    </tr>
    <tr>
      <td>`params.isHp`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>
      True if evaluating HP stat value for given Pokémon.
      </td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>
      The Pokémon's level.
      </td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokémon's final stat value.

#### Example

```typescript
getLegendsArceusStatValue({
  isHp: true,
  level: 100,
  base: 120,
  effortLevel: 10,
}); // returns 490

getLegendsArceusStatValue({
  level: 100,
  base: 120,
  effortLevel: 10,
}) // returns 390
```


### getPLAEfforLevelMultiplier()
Returns the Pokémon's Effort Level Multiplier for Pokémon Legends Arceus game.

#### Signature
```typescript
getPLAEfforLevelMultiplier(effortLevel: number) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`effortLevel`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's Effort Level (a number between 0 and 10).</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the multiplier for given effort level.

#### Example

```typescript
getPLAEfforLevelMultiplier(0); // returns 0
getPLAEfforLevelMultiplier(10); // returns 25
```


### getLetsGoPikachuStatValue()
Returns the Pokémon's final stat value regarding parameters sent for Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.

#### Signature
```typescript
getLetsGoPikachuStatValue(params: GetLetsGoPikachuStatValueParams) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>[`GetLetsGoPikachuStatValueParams`](#getletsgopikachustatvalueparams)</td>
      <td>Yes</td>
      <td>The general parameters used for Pokémon's stat calculation.</td>
    </tr>
    <tr>
      <td>`params.base`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's base stat value (HP, Attack, Defense, Special Attack, Special Defense, or Speed).</td>
    </tr>
    <tr>
      <td>`params.isHp`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>True if evaluating HP stat value for given Pokémon.</td>
    </tr>
    <tr>
      <td>`params.av`</td>
      <td>`number</td>
      <td>No</td>
      <td>The Pokémon's Awakening Value (AV), also known as Go Power bonus, for given stat.</td>
    </tr>
    <tr>
      <td>`params.iv`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's Individual Vale (IV) for given stat.</td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's level.</td>
    </tr>
    <tr>
      <td>`params.friendship`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's friendship level.</td>
    </tr>
    <tr>
      <td>`params.nature`</td>
      <td>[`NatureStatType`](#naturestattype)</td>
      <td>No</td>
      <td>If the Pokémon has a hindering, neutral, or enhancing nature.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokemon's final stat value.

#### Example
```typescript
getLetsGoPikachuStatValue({
  isHp: true,
  level: 100,
  base: 100,
}); // returns 341
```

### getLGPFriendshipMultiplier()
Returns the Pokémon's Effort Level Multiplier in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.

#### Signature
```typescript
getLGPFriendshipMultiplier(friendship: number) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`friendship`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's friendship Level.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the Pokémon's friendship level.

#### Example
```typescript
getLGPFriendshipMultiplier(0); // returns 1
getLGPFriendshipMultiplier(255); // returns 1.1
```

### getCPValue()
Returns the Pokémon's Combat Power in Pokémon: Let's Go, Pikachu! and Let's Go, Eevee! games.

#### Signature
```typescript
getCPValue(params: GetCPValueParams) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`params`</td>
      <td>`object`</td>
      <td>Yes</td>
      <td>The general parameters used for Pokémon's stat calculation.</td>
    </tr>
    <tr>
      <td>`params.stat`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's base stats.</td>
    </tr>
    <tr>
      <td>`params.stat.hp`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's HP stat value.</td>
    </tr>
    <tr>
      <td>`params.stat.attack`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's Attack stat value.</td>
    </tr>
    <tr>
      <td>`params.stat.defense`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's Defense stat value.</td>
    </tr>
    <tr>
      <td>`params.stat.specialAttack`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's Special Attack stat value.</td>
    </tr>
    <tr>
      <td>`params.stat.specialDefense`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's Special Defense stat value.</td>
    </tr>
    <tr>
      <td>`params.stat.speed`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's Speed stat value.</td>
    </tr>
    <tr>
      <td>`params.totalAv`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's total Awakening Values.</td>
    </tr>
    <tr>
      <td>`params.level`</td>
      <td>`number`</td>
      <td>No</td>
      <td>The Pokémon's level.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number representing the Pokémon's Combat Power.

#### Example

```typescript
getCPValue({
  level: 50,
  totalAv: 0,
  stat: {
    hp: 110,
    attack: 75,
    defense: 60,
    specialAttack: 70,
    specialDefense: 70,
    speed: 110,
  },
}); // returns 1485
```


### getStatWithStage()
Returns the final Pokémon's stat value after applying a scale of stage multipliers.

::::info
See more on [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Stat_modifier).
::::

#### Signature
```typescript
getStatWithStage(statValue: number, multiplier: StageMultiplier) => number
```

<table class="full-width">
  <thead class="upc">
    <tr>
      <th width="15%">Parameter</th>
      <th width="15%">Type</th>
      <th width="15%">Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`statValue`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon stat value to apply stage multiplier.</td>
    </tr>
    <tr>
      <td>`multiplier`</td>
      <td>[`StageMultiplier`](#stagemultiplier)</td>
      <td>Yes</td>
      <td>The stage multiplier to apply on Pokémon stat.</td>
    </tr>
  </tbody>
</table>


#### Returns
A number with the stat after stage multiplier applied.

#### Example
```typescript
getStatWithStage(300, 1); // returns 450
getStatWithStage(300, -2); // returns 75
```

## Type Definitions

### GetStatValueParams

An interface to determine the Pokémon's final stat value with [`getStatValue()`](#getstatvalue).

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
      <td>`base`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`iv`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`ev`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`isHp`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`isShedinja`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td> No </td>
      <td>[`NatureStatType`](#naturestattype)</td>
    </tr>
  </tbody>
</table>

### GetLegendsArceusStatValueParams

An interface to determine the Pokémon's final stat value with [`getLegendsArceusStatValue()`](#getlegendsarceusstatvalue).

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
      <td>`base`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`effortLevel`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`isHp`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td> No </td>
      <td>[`NatureStatType`](#naturestattype)</td>
    </tr>
  </tbody>
</table>


### GetLetsGoPikachuStatValueParams

An interface to determine the Pokémon's final stat value with [`getLetsGoPikachuStatValue()`](#getletsgopikachustatvalue).

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
      <td>`base`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`iv`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`av`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`friendship`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`isHp`</td>
      <td> No </td>
      <td>`boolean`</td>
    </tr>
    <tr>
      <td>`nature`</td>
      <td> No </td>
      <td>[`NatureStatType`](#naturestattype)</td>
    </tr>
  </tbody>
</table>


### GetCPValueParams

An interface to determine the Pokémon's Combat Power value with [`getCPValue()`](#getcpvalue).

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
      <td>`stat`</td>
      <td> Yes </td>
      <td>`object`</td>
    </tr>
    <tr>
      <td>`stat.hp`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.attack`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.defense`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.specialAttack`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.specialDefense`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`stat.speed`</td>
      <td> Yes </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`level`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
    <tr>
      <td>`totalAv`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
  </tbody>
</table>

### NatureStatType

A string value describing how the Nature affects the stat.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>enum(`'enhancing'`, `'hindering'`, `'neutral'`)</td>
      </tr>
  </tbody>
</table>


### StageMultiplier

A number value representing the stat stage multiplier.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>enum(`-6`, `-5`, `-4`, `-3`, `-2`, `-1`, `1`, `2`, `3`, `4`, `5`, `6`)</td>
      </tr>
  </tbody>
</table>
