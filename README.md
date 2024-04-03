# TS-PokéAPI

## Summary

**TS-PokeApi** is a zero dependency Typescript package with type annotations and fetching methods for PokéAPI v2 endpoints. This package also provides useful Pokémon's games calculations in general, e.g.: damage, stats, catch rate etc.

For more detailed examples of endpoints, parameters, server responses and payloads of PokéApi, please check the [documentation on their website](https://pokeapi.co/docs/v2).

## Installation

To install run the following command with NPM

```bash
npm install @jaflesch/ts-pokeapi
```

or Yarn
```bash
yarn add @jaflesch/ts-pokeapi
```

## Usage

Basic usage with Object Oriented approach
```typescript
import { PokeApi } from '@jaflesch/ts-pokeapi';

const api = new PokeApi('pokemon');
const pokemon = await api.get(25);
console.log(pokemon.name); // Outputs "pikachu"
```

Or with with procedural approach
```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const pokemon = await pokeapi('pokemon').get(906);
console.log(pokemon.name); // Outputs "sprigatito"
```

## API

* __Methods:__
  * [`get()`](#get-resource)
  * [`getById()`](#get-by-id)
  * [`getByName()`](#get-by-name)
  * [`getAll()`](#get-all)
  * [`count()`](#count)
  * [`paginate()`](#paginate)

### Method
#### Get Resource <a name="get-resource"></a>
Fetches a single record of given PokéApi resource endpoint.

##### Signature
```typescript
async get<T>(idOrName: number | string) => Promise<PokeApiResource<T>>
```

| Parameter | Type  | Required | Description |
| -| - | - | - |
| `idOrName` | `number` or `string` | Yes | The desired id or name for given PokéApi resource. If PokéApi resource is in type `UnnamedPaginationResource`, fetching data is only available via its id. |


##### Returns
Promise with given single PokéApi resource.

##### Example

```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const abilityById = await pokeapi('ability').get(1);
const abilityByName = await pokeapi('ability').get('sturdy');
const contestEffectOnlyById = await pokeapi('contest-effect').get(1);

// TS Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const contestEffectByName = await pokeapi('contest-effect').get('foo'); 
```

#### Get Resource by Id <a name="get-by-id"></a>
Fetches a single record of given PokéApi resource endpoint by its **id**.

##### Signature
```typescript
async getById<T>(id: number) => Promise<PokeApiResource<T>>
```

| Parameter | Type  | Required | Description |
| -| - | - | - |
| `id` | `number` | Yes | The desired resource id for given PokéApi resource |


##### Returns
Promise with given single PokéApi resource.

##### Example

```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const item = await pokeapi('item').getById(1);
```

#### Get Resource by Name <a name="get-by-name"></a>
Fetches a single record of given PokéApi resource endpoint by its **name** (if possible).

##### Signature
```typescript
async getByName<T>(id: number) => Promise<PokeApiResource<T> | never>
```

| Parameter | Type  | Required | Description |
| -| - | - | - |
| `name` | `string` | Yes | The desired resource name for given PokéApi resource |


##### Returns
Promise with given single PokéApi resource or `never` (if resource is in `UnnamedPaginationResource`).

##### Example

```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const pokemon = await pokeapi('pokemon').getByName('charizard');

// contestEffect will be of type `never`, since ContestEffect resources don't have names.
const contestEffect = await pokeapi('contest-effect').getByName('foo');
```



#### Get all Resources <a name="get-all"></a>
Fetches a list of records of given PokéApi resource endpoint.

##### Signature
```typescript
async getAll<T>(
  params?: Partial<QueryParams> | void | string | number
) => Promise<NamedAPIResource | PokeApiResource<T>>
```

| Parameter | Type  | Required | Description |
| -| - | - | - |
| `params` | `Partial<QueryParams>`, `void`, `string`, or `number` | Yes / No | If resource is in type `SubCollectionResource`, a `number` or `string` must be provided. Otherwise, the parameter is optinal, and can be partially completed with `QueryParams` or `void`. |


##### Returns
Promise with `NamedAPIResource` or, if given PokéApi resource endpoint is a sub-collection, a single PokéApi resource.

##### Example

```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

// optional param
const pokemon = await pokeapi('pokemon').getAll();

// query params
const pokemonWithQueryParams = await pokeapi('pokemon').getAll({ offset: 10, limit: 5 });

// required since PokemonLocationArea resource is a sub-collection
const pokemonLocationArea = await pokemon('pokemon-location-area').getAll(1);
```

#### Count Resource <a name="count"></a>
Fetches the total number of records for given PokéApi resource (if possible)

##### Signature
```typescript
async count<T>() => Promise<number | never>
```

##### Returns
Promise with total number of records for given PokéApi resource, if resource is not in `SubCollectionResource`, otherwise `never`.

##### Example

```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const pokemon = await pokeapi('pokemon').count();

// returns never since PokemonLocationArea resource is a sub-collection
const pokemonLocationArea = await pokemon('pokemon-location-area').count();
```

#### Paginate Resources <a name="paginate"></a>
Fetches a paginated result for given PokéApi resource (if possible).

##### Signature
```typescript
async paginate<T>(params?: Partial<QueryParams>) => Promise<PaginatedResult | never>
```

| Parameter | Type  | Required | Description |
| -| - | - | - |
| `Partial<QueryParams>` | No | Optional parameter for setting resouce list limit and offset values |


##### Returns
Promise with paginated result number of records for given PokéApi resource, if resource is not in `SubCollectionResource`, otherwise `never`.

##### Example

```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const pokemon = await pokeapi('pokemon').paginate();
const pokemonWithParams = await pokeapi('pokemon').paginate({ limit: 10, offset: 100 });

// returns never since PokemonLocationArea resource is a sub-collection
const pokemonLocationArea = await pokemon('pokemon-location-area').paginate();
```

> Full documentation @ Docusaurus coming soon. Thank you for understanding and support!
## Credits

- [Jean Flesch](https://github.com/jaflesch)
