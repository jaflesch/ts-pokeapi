---
sidebar_position: 1
---

# PokeApi

The `PokeApi` is a wrapper class that allows fetching and handling resources from [PokéAPI/v2](https://pokeapi.co/docs/v2) endpoints. All the methods returns typed interfaces regarding the desired PokéAPI resource. For example, a `'/pokemon'` endpoint, can return one single `interface` [`Pokemon`](../interfaces/pokemon) resource, or many paginated resources, according to which method was used.

## Methods
### get()
Fetches a single record of given PokéApi resource endpoint.

#### Signature
```typescript
async get<T>(idOrName: number | string) => Promise<PokeApiResource<T>>
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
      <td>`idOrName`</td>
      <td>`number` or `string`</td>
      <td>Yes</td>
      <td>
      The desired id or name for given PokéApi resource. If PokéApi resource is in type [`UnnamedPaginationResource`)](/docs/poke-api/interfaces/utils#unnamedpaginationresource), fetching data is only available via its id.
      </td>
    </tr>
  </tbody>
</table>


#### Returns
Promise with given single PokéApi resource.

#### Example

```typescript
const abilityById = await pokeapi('ability').get(1);
const abilityByName = await pokeapi('ability').get('sturdy');
const contestEffectOnlyById = await pokeapi('contest-effect').get(1);

// TS Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const contestEffectByName = await pokeapi('contest-effect').get('foo'); 
```

### getbyId()
Fetches a single record of given PokéApi resource endpoint by its **id**.

#### Signature
```typescript
async getById<T>(id: number) => Promise<PokeApiResource<T>>
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
      <td>`id`</td>
      <td>`number`</td>
      <td>Yes</td>
      <td>The desired resource id for given PokéApi resource</td>
    </tr>
  </tbody>
</table>


#### Returns
Promise with given single PokéApi resource.

#### Example

```typescript
const item = await pokeapi('item').getById(1);
```

### getByName()
Fetches a single record of given PokéApi resource endpoint by its **name** (if possible).

#### Signature
```typescript
async getByName<T>(name: string) => Promise<PokeApiResource<T> | never>
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
      <td>`name`</td>
      <td>`string`</td>
      <td>Yes</td>
      <td>The desired resource name for given PokéApi resource</td>
    </tr>
  </tbody>
</table>


#### Returns
Promise with given single PokéApi resource or `never` (if resource is in [`UnnamedPaginationResource`)](/docs/poke-api/interfaces/utils#unnamedpaginationresource).

#### Example

```typescript
const pokemon = await pokeapi('pokemon').getByName('charizard');

// contestEffect will be of type `never`, since ContestEffect resources don't have names.
const contestEffect = await pokeapi('contest-effect').getByName('foo');
```



### getAll()
Fetches a list of records of given PokéApi resource endpoint.

#### Signature
```typescript
async getAll<T>(
  params?: Partial<QueryParams> | void | string | number
) => Promise<NamedAPIResource | PokeApiResource<T>>
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
      <td>`Partial<QueryParams>`, `void`, `string`, or `number`</td>
      <td>Yes / No</td>
      <td>
        If resource is in type [`SubCollectionResource`](/docs/poke-api/interfaces/utils#subcollectionresource), a `number` or `string` must be provided. Otherwise, the parameter is optinal, and can be partially completed with `QueryParams` or `void`.
      </td>
    </tr>
  </tbody>
</table>


#### Returns
Promise with [`NamedAPIResource`](/docs/poke-api/interfaces/utils#namedapiresource) or, if given PokéApi resource endpoint is a sub-collection, a single PokéApi resource.

#### Example

```typescript
// optional param
const pokemon = await pokeapi('pokemon').getAll();

// query params
const pokemonWithQueryParams = await pokeapi('pokemon').getAll({ offset: 10, limit: 5 });

// required since PokemonLocationArea resource is a sub-collection
const pokemonLocationArea = await pokemon('pokemon-location-area').getAll(1);
```

### count()
Fetches the total number of records for given PokéApi resource (if possible)

#### Signature
```typescript
async count<T>() => Promise<number | never>
```

#### Returns
Promise with total number of records for given PokéApi resource, if resource is not in [`SubCollectionResource`](/docs/poke-api/interfaces/utils#subcollectionresource), otherwise `never`.

#### Example

```typescript
const pokemon = await pokeapi('pokemon').count();

// returns never since PokemonLocationArea resource is a sub-collection
const pokemonLocationArea = await pokemon('pokemon-location-area').count();
```

### paginate()
Fetches a paginated result for given PokéApi resource (if possible).

#### Signature
```typescript
async paginate<T>(params?: Partial<QueryParams>) => Promise<PaginatedResult | never>
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
      <td>`Partial<QueryParams>`</td>
      <td>No</td>
      <td>Optional parameter for setting resouce list limit and offset values</td>
    </tr>
  </tbody>
</table>


#### Returns
Promise with paginated result number of records for given PokéApi resource, if resource is not in [`SubCollectionResource`](/docs/poke-api/interfaces/utils#subcollectionresource), otherwise `never`.

#### Example

```typescript
const pokemon = await pokeapi('pokemon').paginate();
const pokemonWithParams = await pokeapi('pokemon').paginate({ limit: 10, offset: 100 });

// returns never since PokemonLocationArea resource is a sub-collection
const pokemonLocationArea = await pokemon('pokemon-location-area').paginate();
```

## Type Definitions

### PokeApiResource&lt;T&gt;

A generic interface for mapping the PokéAPI endpoint to their respective response interface model. 

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

Since `T` can only be valid endpoints for PokéAPI, all possible values for `T` are described on `PokeApiResourceKeys`, which are:
- `'berry'`
- `'berry-firmness'`
- `'berry-flavor'`
- `'contest-type'`
- `'contest-effect'`
- `'super-contest-effect'`
- `'encounter-method'`
- `'encounter-condition'`
- `'encounter-condition-value'`
- `'evolution-chain'`
- `'evolution-trigger'`
- `'generation'`
- `'pokedex'`
- `'version'`
- `'version-group'`
- `'item'`
- `'item-attribute'`
- `'item-category'`
- `'item-fling-effect'`
- `'item-pocket'`
- `'location'`
- `'location-area'`
- `'pal-park-area'`
- `'region'`
- `'machine'`
- `'move'`
- `'move-ailment'`
- `'move-battle-style'`
- `'move-category'`
- `'move-damage-class'`
- `'move-learn-method'`
- `'move-target'`
- `'ability'`
- `'characteristic'`
- `'egg-group'`
- `'gender'`
- `'growth-rate'`
- `'nature'`
- `'pokeathlon-stat'`
- `'pokemon'`
- `'pokemon-location-area'`
- `'pokemon-color'`
- `'pokemon-form'`
- `'pokemon-habitat'`
- `'pokemon-shape'`
- `'pokemon-species'`
- `'stat'`
- `'type'`
- `'language'`

:::info

Since `T` extends a key of `PokeApiResourceKeys`, we can guarantee the `PokeApi` class instance is valid and has the correct endpoint response interface associated.
:::


### QueryParams

Query parameters for retrieving PokéAPI paginated resources.

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>Object</td>
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
      <td>`offset`</td>
      <td> No </td>
      <td>`number`</td>
    </tr>
  <tr>
  <td>`limit`</td>
  <td> No </td>
  <td>`number`</td>
  </tr>
  </tbody>
</table>
