---
sidebar_position: 2
---

# PokeApi class

The PokeApi class is the main feature of this package. It allows easy and customizable ways for fetching data from PokéApi database. As stated [here](../getting-started#procedural), you can also use the same interface in a procedural approach if you like.

Since the procedural approach uses the same core from object-oriented approach, this page focus on the class API: parameters, properties, methods, and how to extend and customize it.

## Parameters

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Required</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`endpoint`</td>
      <td>[`PokeApiEndpoint`](#endpoint)</td>
      <td>Yes</td>
      <td>The endpoint from PokéAPI resource.</td>
    </tr>
    <tr>
      <td>`configuration`</td>
      <td>[`PokeApiConfig`](#pokeapiconfig)</td>
      <td>Yes</td>
      <td>An object to customize the class behaviour.</td>
    </tr>
  </tbody>
</table>


## Logging

Logging is an excelent tool for debugging applications. In PokeApi class, is very simple to display both request and response logs. To allow logging, just set `debug: true`.

The following code:
```typescript
import { Pokeapi } from '@jaflesch/ts-pokeapi';

const api = new PokeApi('pokemon', { 
  debug: true,  // Will output logs
});

await api.get('pikachu');
```

Outputs:
```typescript
/*
  [GET] https://pokeapi.co/api/v2/pokemon/pikachu
  [STATUS] 200
*/
```

::::info
The logging format follows the template:
#### Request
`'[${httpMethod}] ${pokeApiResourceURL}'`

#### Response
`'[STATUS] ${statusCode}'`
::::

## Interceptors

Interceptors are middleware that allows common patterns around retrying, caching, logging, and authentication to be abstracted away from individual requests. They are functions which you can run for each request, and have broad capabilities to affect the contents and overall flow of requests and responses. TS-PokéAPI provides an `interceptor` property that allows customization for both request and response callbacks. 

- The `interceptor.request` callback receives an URL string and HTTP method as parameters, which can be used to access the proper methods of libraries instances. 
- The `interceptor.response` callback receives the returning data from request and must adapt the library instance data to match at least the property `.data` from [Fetch API Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) object.
- The `interceptor.statusKey` is an optional parameter to help PokeApi class map the status code key utilized by library instance. Default value is `status` (same as Fetch API), but in some libraries the values diff, so further configuration is needed.

The following code shows the `PokeApiConfig.interceptor` property:
```typescript
export interface PokeApiConfig {
  // ...
  interceptor?: {
    request: (url: string, method: string) => unknown,
    response: (response: unknown) => Response,
    statusKey: 'a-status-key', 
  }
},
```

The nex subsections show how easily you can extend PokeApi class interceptors with the library of your choice. This is helpful if you wish to add more complex patterns such as cache and retry.

### axios-cache-interceptor

```bash npm2yarn
npm install axios axios-cache-interceptor
```

```typescript
import Axios from 'axios';
import { CacheAxiosResponse, setupCache } from 'axios-cache-interceptor';

const instance = Axios.create();
const axios = setupCache(instance);

new PokeApi(endpoint, {
  interceptor: {
    request: url => axios.get(url),
    response: (resp: CacheAxiosResponse) => resp.data,
  },
});
```

### got
Human-friendly and powerful HTTP request library for Node.js

```bash npm2yarn
npm install got
```

::::warning
This package is native ESM and no longer provides a CommonJS export. If your project uses CommonJS, you'll have to convert to ESM or use the dynamic `import()` function. You can also use Got v11 instead which is pretty stable, or also switch to package `got-cjs`.

```bash npm2yarn
npm install got-cjs
```
::::

```typescript
import got, {Response} from 'got';

new PokeApi(endpoint, {
  interceptor: {
  request: url => got.get(url),
  response: (resp: Response<string>) => JSON.parse(resp.body),
  statusKey: 'statusCode',
});
```


### superagent
Small progressive client-side HTTP request library, and Node.js module with the same API, supporting many high-level HTTP client features.

```bash npm2yarn
npm install superagent @types/superagent
```

```typescript
import { Response } from 'superagent';
const superagent = require('superagent');

new PokeApi(endpoint, {
  interceptor: {
    request: url => superagent.get(url),
    response: (resp: Response) => JSON.parse(resp.text),
  },
});
```

### Creating your own interceptor

If none of above solutions works for you and/or you need more control over your implementation, just choose your desired approach and extend it with your logic:

#### Class-based approach
```typescript
import { PokeApi } from "@jaflesch/poke-api";
import { PokeApiProps, TypeMapKeys } from "@jaflesch/poke-api.types";

// Class-based approach
export class MyCustomClass<T extends TypeMapKeys> extends PokeApi<T> implements PokeApiProps<T> {
  constructor(endpoint: T) {
    super(endpoint);
    return new PokeApi(endpoint, {
      interceptor: {
        request: (url, method) => {
          // Your interceptor request logic here
        },
        response: resp => {
          // Your interceptor responde logic here
        },
        statusKey: 'a-custom-status-property', 
      },
    });
  }
}
```

#### Procedural approach
```typescript
import { pokeapi } from "@jaflesch/poke-api";
import { PokeApiProps, TypeMapKeys } from "@jaflesch/poke-api.types";

export const myPokeapi = <T extends TypeMapKeys>(endpoint: T) => {
  return pokeapi(endpoint, {
    interceptor: {
      interceptor: {
        request: (url, method) => {
          // Your interceptor request logic here
        },
        response: resp => {
          // Your interceptor responde logic here
        },
        statusKey: 'a-custom-status-property', 
      },
  }});
}
```

## Type Definitions

### PokeApiEndpoint

<table className='full-width'>
  <thead className='left upc'>
    <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <td>enum(`'berry'`, `'berry-firmness'`, `'berry-flavor'`, `'contest-type'`, `'contest-effect'`, `'super-contest-effect'`, `'encounter-method'`, `'encounter-condition'`, `'encounter-condition-value'`, `'evolution-chain'`, `'evolution-trigger'`, `'generation'`, `'pokedex'`, `'version'`, `'version-group'`, `'item'`, `'item-attribute'`, `'item-category'`, `'item-fling-effect'`, `'item-pocket'`, `'location'`, `'location-area'`, `'pal-park-area'`, `'region'`, `'machine'`, `'move'`, `'move-ailment'`, `'move-battle-style'`, `'move-category'`, `'move-damage-class'`, `'move-learn-method'`, `'move-target'`, `'ability'`, `'characteristic'`, `'egg-group'`, `'gender'`, `'growth-rate'`, `'nature'`, `'pokeathlon-stat'`, `'pokemon'`, `'pokemon-location-area'`, `'pokemon-color'`, `'pokemon-form'`, `'pokemon-habitat'`, `'pokemon-shape'`, `'pokemon-species'`, `'stat'`, `'type'`, `'language'`)</td>
      </tr>
  </tbody>
</table>

### PokeApiConfig

<table class="full-width">
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
      <td>`debug`</td>
      <td>`boolean`</td>
      <td>No</td>
      <td>Wheter enable request and response loggings.</td>
    </tr>
    <tr>
      <td>`interceptor`</td>
      <td>`object`</td>
      <td>No</td>
      <td>An object to customize interceptor request and response callbacks.</td>
    </tr>
    <tr>
      <td>`interceptor.request`</td>
      <td>`(url: string, method?: string) => unknown`</td>
      <td>Yes</td>
      <td>The request interceptor callback.</td>
    </tr>
    <tr>
      <td>`interceptor.response`</td>
      <td>`(response: unknown) => Response`</td>
      <td>Yes</td>
      <td>The response interceptor callback.</td>
    </tr>
    <tr>
      <td>`interceptor.statusKey`</td>
      <td>`string`</td>
      <td>No</td>
      <td>The type of move that will produce the damage.</td>
    </tr>

  </tbody>
</table>
