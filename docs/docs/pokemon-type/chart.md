---
sidebar_position: 3
---

# Type Chart

Types are properties applied to Pokémon and their moves, which affect the power of moves in battles. As of Generation IX, there are 19 types, with 18 regular types and the special Stellar type. Most of the types were introduced during Generation I, but the _Dark_ and _Steel_ types were introduced in Generation II, the _Fairy_ type was introduced in Generation VI, and the _Stellar_ type was introduced in Generation IX.

::::info
See more on [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Type).
::::

## Methods

### getPokemonTypeChartAttack()
Returns types which given type's attack has no effet, is normal, not effective, and super effective. Also, returns an array of PokemonTypesArrayIndex with damage multiples for given type. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
getPokemonTypeChartAttack(index: PokemonTypesArrayIndex) => TypeChartReturn
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
      <td>`index`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>An index from Pokémon types chart matrix.</td>
    </tr>
  </tbody>
</table>


#### Returns
An object with complete type chart, and normal, no effect, super effective, not effective types against given type.

#### Examples

```typescript
getPokemonTypeChartAttack(PokemonTypesArrayIndex.FIRE); // returns 328
```

### getPokemonTypeChartAttackPros()
Returns only types which given type's attack has super effective damage. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
getPokemonTypeChartAttackPros(index: PokemonTypesArrayIndex) => PokemonTypesArrayIndex[]
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
      <td>`index`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>An index from Pokémon types chart matrix.</td>
    </tr>
  </tbody>
</table>


#### Returns
An array of indexes from Pokémon types chart where given Pokémon type is super effective.

#### Examples

```typescript
getPokemonTypeChartAttackPros(PokemonTypesArrayIndex.FIRE); // returns 328
```


### getPokemonTypeChartAttackCons()
Returns only types which given type's attack has no effect or not effective damage. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
getPokemonTypeChartAttackCons(index: PokemonTypesArrayIndex) => TypeChartReturnDamageReduction
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
      <td>`index`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>An index from Pokémon types chart matrix.</td>
    </tr>
  </tbody>
</table>


#### Returns
An object with array of indexes from Pokémon types chart where given Pokémon type is not effective nor has effect.

#### Examples

```typescript
getPokemonTypeChartAttackCons(PokemonTypesArrayIndex.FIRE); // returns 328
```


### getPokemonTypeChartDefense()
Returns types which given type's defense has no effet, is normal, not effective, and super effective. Also, returns an array of PokemonTypesArrayIndex with damage multiples for given type. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
getPokemonTypeChartDefense(index: PokemonTypesArrayIndex) => TypeChartReturn
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
      <td>`index`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>An index from Pokémon types chart matrix.</td>
    </tr>
  </tbody>
</table>


#### Returns
An object with array of indexes from Pokémon types chart.

#### Examples

```typescript
getPokemonTypeChartDefense(PokemonTypesArrayIndex.FIRE); // returns 328
```


### getPokemonTypeChartDefensePros()
Returns only types which given type's defense has resistance. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
getPokemonTypeChartDefensePros(index: PokemonTypesArrayIndex) => TypeChartReturnDamageReduction
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
      <td>`index`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>An index from Pokémon types chart matrix.</td>
    </tr>
  </tbody>
</table>


#### Returns
An object with array of indexes from Pokémon types chart.

#### Examples

```typescript
getPokemonTypeChartDefensePros(PokemonTypesArrayIndex.FIRE); // returns 328
```


### getPokemonTypeChartDefenseCons()
Returns only types which given type's defense has weakness. See more about the `TYPES_CHART_MATRIX` at [PokemonDB](https://pokemondb.net/type). The index 0 stands for NORMAL type, index 1 stands for FIRE type etc.

#### Signature
```typescript
getPokemonTypeChartDefenseCons(index: PokemonTypesArrayIndex) => PokemonTypesArrayIndex[]
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
      <td>`index`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>An index from Pokémon types chart matrix.</td>
    </tr>
  </tbody>
</table>


#### Returns
An object with array of indexes from Pokémon types chart.

#### Examples

```typescript
getPokemonTypeChartDefenseCons(PokemonTypesArrayIndex.FIRE); // returns 328
```


### getAttackMultipleByTypeChart()
Returns the damage multiplier considering the attacking move type, the targeted Pokémon types and ability.

#### Signature
```typescript
getAttackMultipleByTypeChart(
  moveType: PokemonTypesArrayIndex,
  targetType: PokemonTypesArrayIndex[],
  targetAbility?: AlterDamageAbility,
) => number
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
      <td>`moveType`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>The type of move that will produce the damage.</td>
    </tr>
    <tr>
      <td>`targetTypes`</td>
      <td>[`Array<PokemonTypesArrayIndex>`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>The types of target Pokémon which will receive the damage.</td>
    </tr>
    <tr>
      <td>`targetAbility`</td>
      <td>[`AlterDamageAbility`](../constants#alterdamageability)</td>
      <td>No</td>
      <td>A string of few selected abilities which affect damage calculation.</td>
    </tr>
  </tbody>
</table>


#### Returns
The damage multiplier.

#### Examples

```typescript
getAttackMultipleByTypeChart(
  PokemonTypesArrayIndex.GROUND, 
  [PokemonTypesArrayIndex.FIRE, PokemonTypesArrayIndex.ELECTRIC],
  'levitate'
); // returns 0
```


### getPokemonTypeMatchups()
Returns a detailed offensive an defensive data from given PokéAPI Pokémon resource. It also returns the Pokémon types converted from Type resource id to `PokemonTypesArrayIndex`.

#### Signature
```typescript
getAttackMultipleByTypeChart(pokemon: Pokemon, verbose?: boolean) => GetPokemonTypeMatchupsReturn
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
      <td>`pokemon`</td>
      <td>[`Pokemon`](../../poke-api/interfaces/pokemon#pokemon)</td>
      <td>Yes</td>
      <td>The PokéAPI Pokémon resource.</td>
    </tr>
    <tr>
      <td>`verbose`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>True if defensive data will return the type names instead of its indexes.</td>
    </tr>
  </tbody>
</table>


#### Returns
An [`GetPokemonTypeMatchupsReturn`](#getpokemontypematchupsreturn) object with detailed offensive an defensive data.

#### Examples

```typescript
const pokemon = pokeapi('charizard').get();
getPokemonTypeMatchups(pokemon, true);
```

### isMoveNullifyByAbility()
Returns true if ability is immune to type of given move; false otherwise.

#### Signature
```typescript
isMoveNullifyByAbility(move: PokemonTypesArrayIndex, ability: AlterDamageAbility) => boolean
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
      <td>`moveType`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>The type of attacking move.</td>
    </tr>
    <tr>
      <td>`ability`</td>
      <td>[`AlterDamageAbility`](../constants#alterdamageability)</td>
      <td>Yes</td>
      <td>A string of few selected abilities which affect damage calculation.</td>
    </tr>
  </tbody>
</table>


#### Returns
A boolean with value true if ability receives no damage from given move type.

#### Examples

```typescript
isMoveNullifyByAbility(PokemonTypesArrayIndex.WATER, 'storm-drain'); // returns true
```


### damageMultipleByAbility()
Returns the damage multiple of attacking move by oponent's ability.

#### Signature
```typescript
damageMultipleByAbility(move: PokemonTypesArrayIndex, ability: AlterDamageAbility) => number
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
      <td>`moveType`</td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
      <td>Yes</td>
      <td>The type of attacking move.</td>
    </tr>
    <tr>
      <td>`ability`</td>
      <td>[`AlterDamageAbility`](../constants#alterdamageability)</td>
      <td>Yes</td>
      <td>A string of few selected abilities which affect damage calculation.</td>
    </tr>
  </tbody>
</table>


#### Returns
The damage multiple.

#### Examples

```typescript
damageMultipleByAbility(PokemonTypesArrayIndex.GHOST, 'purifying-salt'); // returns 0.5
```


### superEffectiveDamageMultipleByAbility()
Returns the correct super effective damage multiple applied to a oponent's ability.

#### Signature
```typescript
superEffectiveDamageMultipleByAbility(multiple: number, ability: AlterDamageAbility) => number
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
      <td>`multiple`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The current damage multiplier.</td>
    </tr>
    <tr>
      <td>`ability`</td>
      <td>[`AlterDamageAbility`](../constants#alterdamageability)</td>
      <td>Yes</td>
      <td>A string of few selected abilities which affect damage calculation.</td>
    </tr>
  </tbody>
</table>


#### Returns
The super effective damage multiple.

#### Examples

```typescript
superEffectiveDamageMultipleByAbility(0.5, 'wonder-guard'); // returns 0
superEffectiveDamageMultipleByAbility(1, 'wonder-guard'); // returns 0
superEffectiveDamageMultipleByAbility(2, 'wonder-guard'); // returns 2

superEffectiveDamageMultipleByAbility(1, 'prism-armor'); // returns 1
superEffectiveDamageMultipleByAbility(2, 'prism-armor'); // returns 0.75
```


## Type Definitions

### TypeChartReturn

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
      <td>`normal`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`noEffect`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`notEffective`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`superEffective`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`chart`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
  </tbody>
</table>


### TypeChartReturnDamageReduction

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
      <td>`noEffect`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`notEffective`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
  </tbody>
</table>


### GetPokemonTypeMatchupsReturn

An interface to determine the Pokémon's final stat value with [`getPokemonTypeMatchups()`](#getpokemontypematchups).

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
      <td>`types`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`offensive`</td>
      <td> Yes </td>
      <td>`Array<object>`</td>
    </tr>
    <tr>
      <td>`offensive.normal`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`offensive.noEffect`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`offensive.notEffective`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`offensive.superEffective`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`offensive.chart`</td>
      <td> Yes </td>
      <td>[`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`offensive.typeIndex`</td>
      <td> Yes </td>
      <td>[`PokemonTypesArrayIndex`](../constants#pokemontypesarrayindex)</td>
    </tr>
    <tr>
      <td>`offensive.name`</td>
      <td> Yes </td>
      <td>`string`</td>
    </tr>
    <tr>
      <td>`defensive`</td>
      <td> Yes </td>
      <td>`Array<object>`</td>
    </tr>
    <tr>
      <td>`defensive.ability`</td>
      <td> Yes </td>
      <td>`string`</td>
    </tr>
    <tr>
      <td>`defensive.normal`</td>
      <td> Yes </td>
      <td>
        [`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex), or
        [`Array<[PokemonTypeName]>`](../constants#pokemontypename)
      </td>
    </tr>
    <tr>
      <td>`defensive.noEffect`</td>
      <td> Yes </td>
      <td>
        [`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex), or
        [`Array<[PokemonTypeName]>`](../constants#pokemontypename)
      </td>
    </tr>
    <tr>
      <td>`defensive.weakness`</td>
      <td> Yes </td>
      <td>
        [`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex), or
        [`Array<[PokemonTypeName]>`](../constants#pokemontypename)
      </td>
    </tr>
    <tr>
      <td>`defensive.resistance`</td>
      <td> Yes </td>
      <td>
        [`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex), or
        [`Array<[PokemonTypeName]>`](../constants#pokemontypename)
      </td>
    </tr>
    <tr>
      <td>`defensive.doubleWeakness`</td>
      <td> Yes </td>
      <td>
        [`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex), or
        [`Array<[PokemonTypeName]>`](../constants#pokemontypename)
      </td>
    </tr>
    <tr>
      <td>`defensive.doubleResistance`</td>
      <td> Yes </td>
      <td>
        [`Array<[PokemonTypesArrayIndex]>`](../constants#pokemontypesarrayindex), or
        [`Array<[PokemonTypeName]>`](../constants#pokemontypename)
      </td>
    </tr>
  </tbody>
</table>
