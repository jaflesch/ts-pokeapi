import { ResourceNotFoundError } from '../errors';
import * as Model from './models';
import { BASE_URL, ResponseStatus } from './constants/api';

interface TypeMap {
  berry: Model.Berry;
  'berry-firmness': Model.BerryFirmness;
  'berry-flavor': Model.BerryFlavor;
  'contest-type': Model.ContestType;
  'contest-effect': Model.ContestEffect;
  'super-contest-effect': Model.SuperContestEffect;
  'encounter-method': Model.EncounterMethod;
  'encounter-condition': Model.EncounterCondition;
  'encounter-condition-value': Model.EncounterConditionValue;
  'evolution-chain': Model.EvolutionChain;
  'evolution-trigger': Model.EvolutionTrigger;
  generation: Model.Generation;
  pokedex: Model.Pokedex;
  version: Model.Version;
  'version-group': Model.VersionGroup;
  item: Model.Item;
  'item-attribute': Model.ItemAttribute;
  'item-category': Model.ItemCategory;
  'item-fling-effect': Model.ItemFlingEffect;
  'item-pocket': Model.ItemPocket;
  location: Model.Location;
  'location-area': Model.LocationArea;
  'pal-park-area': Model.PalParkArea;
  region: Model.Region;
  machine: Model.Machine;
  move: Model.Move;
  'move-ailment': Model.MoveAilment;
  'move-battle-style': Model.MoveBattleStyle;
  'move-category': Model.MoveCategory;
  'move-damage-class': Model.MoveDamageClass;
  'move-learn-method': Model.MoveLearnMethod;
  'move-target': Model.MoveTarget;
  ability: Model.Ability;
  characteristic: Model.Characteristic;
  'egg-group': Model.EggGroup;
  gender: Model.Gender;
  'growth-rate': Model.GrowthRate;
  nature: Model.Nature;
  'pokeathlon-stat': Model.PokeathlonStat;
  pokemon: Model.Pokemon;
  'pokemon-location-area': Model.PokemonLocationArea;
  'pokemon-color': Model.PokemonColor;
  'pokemon-form': Model.PokemonForm;
  'pokemon-habitat': Model.PokemonHabitat;
  'pokemon-shape': Model.PokemonShape;
  'pokemon-species': Model.PokemonSpecie;
  stat: Model.PokemonStat;
  type: Model.PokemonType;
  language: Model.Language;
}

type TypeMapKeys = keyof TypeMap;

export interface QueryParams {
  limit: number;
  offset: number;
}

type EndpointParams = QueryParams & { param?: string | number };

type UnnamedPaginationResource =
  | 'machine'
  | 'characteristic'
  | 'contest-effect'
  | 'evolution-chain'
  | 'super-contest-effect';

type GetAllParams<T> = T extends 'pokemon-location-area'
  ? number | string
  : Partial<QueryParams> | void;

type GetAll<T> = Promise<
  T extends 'pokemon-location-area'
    ? TypeMap[T]
    : Model.PaginatedResult['results']
>;
type Count<T> = Promise<T extends 'pokemon-location-area' ? never : number>;

type Paginate<T extends TypeMapKeys> = Promise<
  T extends 'pokemon-location-area' ? never : Model.PaginatedResult
>;

interface PokeApiProps<T extends TypeMapKeys> {
  get(idOrName: number | string): Promise<TypeMap[T]>;
  getAll(params?: GetAllParams<T>): GetAll<T>;
  getById(id: number): Promise<TypeMap[T]>;
  getByName(
    name: string,
  ): Promise<T extends UnnamedPaginationResource ? never : TypeMap[T]>;
  count(): Count<T>;
  paginate(params?: Partial<QueryParams>): Paginate<T>;
}

type PokeApiConfig = {
  debug?: boolean;
  [key: string]: unknown;
};

export class PokeApi<T extends keyof TypeMap> implements PokeApiProps<T> {
  private endpoint = '';
  private urlParam = '';
  private hasPagination = true;

  constructor(
    endpoint: T,
    readonly config?: PokeApiConfig,
  ) {
    this.config = config;
    this.endpoint = endpoint;
    this.urlParam = '';
  }

  async get(idOrName: string | number): Promise<TypeMap[T]> {
    const result = await this.fetchResource(
      `${this.getResourceURL({ param: idOrName })}`,
    );
    this.validateStatus(result.status);

    return result.json();
  }

  async getById(id: number): Promise<TypeMap[T]> {
    const result = await this.fetchResource(
      `${this.getResourceURL({ param: id })}`,
    );
    this.validateStatus(result.status);

    return result.json();
  }

  async getByName(
    name: string,
  ): Promise<T extends UnnamedPaginationResource ? never : TypeMap[T]> {
    const result = await this.fetchResource(
      `${this.getResourceURL({
        param: name,
      })}`,
    );
    this.validateStatus(result.status);

    return result.json();
  }

  async getAll(params?: GetAllParams<T>): GetAll<T> {
    const result = await this.fetchResource(this.getResourceURL(params));
    this.validateStatus(result.status);

    if (this.hasPagination) {
      const raw = await result.json();
      return raw.results;
    }

    return result.json();
  }

  async count(): Count<T> {
    const result = await this.fetchResource(this.getResourceURL());
    this.validateStatus(result.status);

    const raw = await result.json();
    return raw.count;
  }

  async paginate(params?: Partial<QueryParams>): Paginate<T> {
    const result = await this.fetchResource(this.getResourceURL(params));
    this.validateStatus(result.status);

    return result.json();
  }

  private getResourceURL(
    params: Partial<EndpointParams> | number | string | void,
  ) {
    if (this.endpoint === 'pokemon-location-area') {
      this.endpoint = 'pokemon';
      this.urlParam = '/encounters';
      this.hasPagination = false;
    }

    let url = '';
    if (typeof params === 'string' || typeof params === 'number') {
      url = `${BASE_URL}${this.endpoint}/${params}${this.urlParam}`;
    } else {
      if (params && params.param !== undefined) {
        url = `${BASE_URL}${this.endpoint}/${params.param}${this.urlParam}`;
      } else {
        const queryParams = new URLSearchParams();
        if (params?.offset) {
          queryParams.append('offset', String(params.offset));
        }
        if (params?.limit) {
          queryParams.append('limit', String(params.limit));
        }

        url = `${BASE_URL}${this.endpoint}${queryParams.size > 0 ? '?' + queryParams.toString() : ''}${this.urlParam}`;
      }
    }
    this.logger(`[GET] ${url}`);

    return url;
  }

  private validateStatus(statusCode: number) {
    this.logger(`[STATUS] ${statusCode ?? 'UNKNOWN'}`);

    if (statusCode === ResponseStatus.NOT_FOUND) {
      throw new ResourceNotFoundError();
    }
  }

  private async fetchResource(url: string) {
    return fetch(url);
  }

  private logger(message: string) {
    if (this.config?.debug) {
      console.log(message);
    }
  }
}

export const pokeapi = <T extends keyof TypeMap>(
  endpoint: T,
  config?: PokeApiConfig,
): PokeApi<T> => {
  return new PokeApi(endpoint, config);
};
