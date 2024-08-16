---
sidebar_position: 1000
---

# Validation

This module allows easy validation of common parameters across functions from [Stats](../stats), such as Pokémon levels, Effort Values (EVs), Individual Values (IVs) etc.

## Methods

### isValidPokemonLevel
Returns true if given value is a valid Pokémon level.

#### Signature
```typescript
isValidPokemonLevel(level: number) => boolean
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
      <td>`level`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's level.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidPokemonLevel(0) // false
isValidPokemonLevel(100) // true
isValidPokemonLevel(101) // false
```

### isValidBaseStat
Returns true if given value is a valid Pokémon base stat.

#### Signature
```typescript
isValidBaseStat(baseStat: number) => boolean
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
      <td>`baseStat`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Base stat of Pokémon.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidBaseStat(0) // false
isValidBaseStat(100) // true
```

### isValidIV
Returns true if given value is a valid Pokémon Individual Value (IV).

#### Signature
```typescript
isValidIV(iv: number) => boolean
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
      <td>`iv`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's IV.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidIV(0) // true
isValidIV(31) // true
isValidIV(32) // false
```

### isValidEV
Returns true if given value is a valid Pokémon Effort Value (EV).

#### Signature
```typescript
isValidEV(ev: number) => boolean
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
      <td>`ev`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's EV.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidEV(0) // true
isValidEV(255) // true
isValidEV(256) // false
```

### isValidTotalEVs
Returns true if given value is a valid sum of all Pokémon Effort Values (EV).

#### Signature
```typescript
isValidTotalEVs(totalEvs: number) => boolean
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
      <td>`totalEvs`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The sum of all Pokémon's EVs.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidTotalEVs(510) // true
isValidTotalEVs(511) // false
```

### isValidIVPriorGen3
Returns true if given value is a valid Pokémon Individual Value (IV) prior Generation III games.

#### Signature
```typescript
isValidIVPriorGen3(iv: number) => boolean
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
      <td>`iv`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's IV.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidIVPriorGen3(0) // true
isValidIVPriorGen3(15) // true
isValidIVPriorGen3(16) // false
```

### isValidEVPriorGen3
Returns true if given value is a valid Pokémon Effort Value (EV) prior Generation III games.

#### Signature
```typescript
isValidEVPriorGen3(ev: number) => boolean
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
      <td>`ev`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's IV.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidEVPriorGen3(0) // true
isValidEVPriorGen3(65535) // true
isValidEVPriorGen3(65536) // false
```

### isValidEffortLevel
Returns true if given value is a valid Effort Level on Pokémon Legends Arceus game.

#### Signature
```typescript
isValidEffortLevel(effortLevel: number) => boolean
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
      <td>The Pokémon's Effort Level.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidEffortLevel(0) // true
isValidEffortLevel(10) // true
isValidEffortLevel(11) // false
```

### isValidAV
Returns true if given value is a valid Pokémon Awakening Value (AV).

#### Signature
```typescript
isValidAV(av: number) => boolean
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
      <td>`av`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The Pokémon's AV.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidAV(0) // true
isValidAV(200) // true
isValidAV(201) // false
```

### isValidTotalAVs
Returns true if given value is a valid sum of all Pokémon Awakening Values (AV).

#### Signature
```typescript
isValidTotalAVs(totalAvs: number) => boolean
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
      <td>`totalAvs`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The sum of all Pokémon's AVs.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidTotalAVs(0) // true
isValidTotalAVs(1200) // true
isValidTotalAVs(1201) // false
```

### isValidFrienshipValue
Returns true if given value is a valid friendship value.

#### Signature
```typescript
isValidFrienshipValue(friendship: number) => boolean
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
      <td>The Pokémon's friendship value.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean.

#### Example

```typescript
isValidFrienshipValue(0) // true
isValidFrienshipValue(200) // true
isValidFrienshipValue(256) // false
```
