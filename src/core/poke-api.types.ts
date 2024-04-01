import * as Model from './models';

export interface TypeMap {
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

export type TypeMapKeys = keyof TypeMap;

export interface QueryParams {
  limit: number;
  offset: number;
}

export type EndpointParams = QueryParams & { param?: string | number };

export type UnnamedPaginationResource =
  | 'machine'
  | 'characteristic'
  | 'contest-effect'
  | 'evolution-chain'
  | 'super-contest-effect';

export type GetAllParams<T> = T extends 'pokemon-location-area'
  ? number | string
  : Partial<QueryParams> | void;

export type GetByName<T extends TypeMapKeys> = Promise<
  T extends UnnamedPaginationResource ? never : TypeMap[T]
>;

export type GetAll<T> = Promise<
  T extends 'pokemon-location-area'
    ? TypeMap[T]
    : Model.PaginatedResult['results']
>;
export type Count<T> = Promise<
  T extends 'pokemon-location-area' ? never : number
>;

export type Paginate<T extends TypeMapKeys> = Promise<
  T extends 'pokemon-location-area' ? never : Model.PaginatedResult
>;

export interface PokeApiConfig {
  debug?: boolean;
  [key: string]: unknown;
}

export interface PokeApiProps<T extends TypeMapKeys> {
  get(idOrName: number | string): Promise<TypeMap[T]>;
  getAll(params?: GetAllParams<T>): GetAll<T>;
  getById(id: number): Promise<TypeMap[T]>;
  getByName(name: string): GetByName<T>;
  count(): Count<T>;
  paginate(params?: Partial<QueryParams>): Paginate<T>;
}
