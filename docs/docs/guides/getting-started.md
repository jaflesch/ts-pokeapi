---
sidebar_position: 1
---

# Getting started


## Instalation

Install [@jaflesch/ts-pokeapi](https://www.npmjs.com/package/@jaflesch/ts-pokeapi) through your prefered package manager:

```bash npm2yarn
npm install @jaflesch/ts-pokeapi
```


## Basic Usage

[TS-PokéAPI](https://www.npmjs.com/package/@jaflesch/ts-pokeapi) provides two ways for fetching data to suit your needs: the **object-oriented** approach and the **procedural** approach. 

### Object-oriented

We recommend the object-oriented approach when you want to keep reusing the same endpoint for fetching data, but changing API configurations between fetching; extending the `class PokeApi` itself, or keeping the object-oriented pattern of your project.

```typescript
import { PokeApi } from '@jaflesch/ts-pokeapi';

const api = new PokeApi('pokemon');
const pokemon = await api.get(25);
console.log(pokemon.name); // Outputs "pikachu"
```

### Procedural

We recommend the procedural approach when you a fast and more imediate way for fetching data form given endpoint, without handling and/or extending API configurations in your project.

```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const pokemon = await pokeapi('pokemon').get(906);
console.log(pokemon.name); // Outputs "sprigatito"
```

## Type annotations

### PokéAPI response

For each PokéAPI endpoint response, there is an `interface` that represents that response. In other words, when you fetch some data with `PokeApi` class or `pokeapi()` function, the response object is mapped and you can, safely, access any properties you want for parse the retrieved data.

Also, every `interface` is an exportable module, which you can use for your own type annotations.

:::info
More details of every interface can be found [here](../../category/interfaces/)
:::

### Resource enumerables

Sometimes, you may want to fetch data by the actual `id` of a resource. Since there is various resources for many endpoints, [TS-PokeAPI](https://www.npmjs.com/package/@jaflesch/ts-pokeapi) provides enumerables with the resouce id to aid you in a more legible and maintanable way to fetch data.

The two code below provides the same outputs.
```typescript
import { pokeapi } from '@jaflesch/ts-pokeapi';

const pokemon = await pokeapi('pokemon').get(1);
console.log(pokemon.name); // Outputs "bulbasaur"
```
```typescript
import { pokeapi, PokemonId } from '@jaflesch/ts-pokeapi';

const pokemon = await pokeapi('pokemon').get(PokemonId.BULBASAUR);
console.log(pokemon.name); // Outputs "bulbasaur"
```

:::info
More details of every enumerable can be found [here](../pokeapi-class#pokeapiendpoint)
:::

## Pokémon utils

[TS-PokéAPI](https://www.npmjs.com/package/@jaflesch/ts-pokeapi) also provides a handful of utilities functions for Pokémon universe. For instance, there are main series Pokémon games formulas, such as stat calculation, stat validation, catching chance, damage output etc; Pokémon Showdown parsers and validators for competitive team building; and miscelaneous content which we are futher improving.

:::info
More details of every utility can be found at [Math](../../category/math), [Pokémon Types](../../category/pokémon-types), and [Utils](../../category/utils) modules.
:::