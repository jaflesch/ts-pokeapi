import * as Model from './models';
/**
 * An auxiliary type for mapping and PokéApi resource endpoint to a response Model.
 * @interface TypeMap
 */
export interface TypeMap {
    /** `Berry` model for `/berry` resource endpoint.
     * @type {Model.Berry}
     */
    berry: Model.Berry;
    /** `BerryFirmness` model for `/berry-firmness` resource endpoint.
     * @type {Model.BerryFirmness}
     */
    'berry-firmness': Model.BerryFirmness;
    /** `BerryFlavor` model for `/berry-flavor` resource endpoint.
     * @type {Model.BerryFlavor}
     */
    'berry-flavor': Model.BerryFlavor;
    /** `ContestType` model for `/contest-type` resource endpoint.
     * @type {Model.ContestType}
     */
    'contest-type': Model.ContestType;
    /** `ContestEffect` model for `/contest-effect` resource endpoint.
     * @type {Model.ContestEffect}
     */
    'contest-effect': Model.ContestEffect;
    /** `SuperContestEffect` model for `/super-contest-effect` resource endpoint.
     * @type {Model.SuperContestEffect}
     */
    'super-contest-effect': Model.SuperContestEffect;
    /** `EncounterMethod` model for `/encounter-method` resource endpoint.
     * @type {Model.EncounterMethod}
     */
    'encounter-method': Model.EncounterMethod;
    /** `EncounterCondition` model for `/encounter-condition` resource endpoint.
     * @type {Model.EncounterCondition}
     */
    'encounter-condition': Model.EncounterCondition;
    /** `EncounterConditionValue` model for `/encounter-condition-value` resource endpoint.
     * @type {Model.EncounterConditionValue}
     */
    'encounter-condition-value': Model.EncounterConditionValue;
    /** `EvolutionChain` model for `/evolution-chain` resource endpoint.
     * @type {Model.EvolutionChain}
     */
    'evolution-chain': Model.EvolutionChain;
    /** `EvolutionTrigger` model for `/evolution-trigger` resource endpoint.
     * @type {Model.EvolutionTrigger}
     */
    'evolution-trigger': Model.EvolutionTrigger;
    /** `Generation` model for `/generation` resource endpoint.
     * @type {Model.Generation}
     */
    generation: Model.Generation;
    /** `Pokedex` model for `/pokedex` resource endpoint.
     * @type {Model.Pokedex}
     */
    pokedex: Model.Pokedex;
    /** `Version` model for `/version` resource endpoint.
     * @type {Model.Version}
     */
    version: Model.Version;
    /** `VersionGroup` model for `/version-group` resource endpoint.
     * @type {Model.VersionGroup}
     */
    'version-group': Model.VersionGroup;
    /** `Item` model for `/item` resource endpoint.
     * @type {Model.Item}
     */
    item: Model.Item;
    /** `ItemAttribute` model for `/item-attribute` resource endpoint.
     * @type {Model.ItemAttribute}
     */
    'item-attribute': Model.ItemAttribute;
    /** `ItemCategory` model for `/item-category` resource endpoint.
     * @type {Model.ItemCategory}
     */
    'item-category': Model.ItemCategory;
    /** `ItemFlingEffect` model for `/item-fling-effect` resource endpoint.
     * @type {Model.ItemFlingEffect}
     */
    'item-fling-effect': Model.ItemFlingEffect;
    /** `ItemPocket` model for `/item-pocket` resource endpoint.
     * @type {Model.ItemPocket}
     */
    'item-pocket': Model.ItemPocket;
    /** `Location` model for `/location` resource endpoint.
     * @type {Model.Location}
     */
    location: Model.Location;
    /** `LocationArea` model for `/location-area` resource endpoint.
     * @type {Model.LocationArea}
     */
    'location-area': Model.LocationArea;
    /** `PalParkArea` model for `/pal-park-area` resource endpoint.
     * @type {Model.PalParkArea}
     */
    'pal-park-area': Model.PalParkArea;
    /** `Region` model for `/region` resource endpoint.
     * @type {Model.Region}
     */
    region: Model.Region;
    /** `Machine` model for `/machine` resource endpoint.
     * @type {Model.Machine}
     */
    machine: Model.Machine;
    /** `Move` model for `/move` resource endpoint.
     * @type {Model.Move}
     */
    move: Model.Move;
    /** `MoveAilment` model for `/move-ailment` resource endpoint.
     * @type {Model.MoveAilment}
     */
    'move-ailment': Model.MoveAilment;
    /** `MoveBattleStyle` model for `/move-battle-style` resource endpoint.
     * @type {Model.MoveBattleStyle}
     */
    'move-battle-style': Model.MoveBattleStyle;
    /** `MoveCategory` model for `/move-category` resource endpoint.
     * @type {Model.MoveCategory}
     */
    'move-category': Model.MoveCategory;
    /** `MoveDamageClass` model for `/move-damage-class` resource endpoint.
     * @type {Model.MoveDamageClass}
     */
    'move-damage-class': Model.MoveDamageClass;
    /** `MoveLearnMethod` model for `/move-learn-method` resource endpoint.
     * @type {Model.MoveLearnMethod}
     */
    'move-learn-method': Model.MoveLearnMethod;
    /** `MoveTarget` model for `/move-target` resource endpoint.
     * @type {Model.MoveTarget}
     */
    'move-target': Model.MoveTarget;
    /** `Ability` model for `/ability` resource endpoint.
     * @type {Model.Ability}
     */
    ability: Model.Ability;
    /** `Characteristic` model for `/characteristic` resource endpoint.
     * @type {Model.Characteristic}
     */
    characteristic: Model.Characteristic;
    /** `EggGroup` model for `/egg-group` resource endpoint.
     * @type {Model.EggGroup}
     */
    'egg-group': Model.EggGroup;
    /** `Gender` model for `/gender` resource endpoint.
     * @type {Model.Gender}
     */
    gender: Model.Gender;
    /** `GrowthRate` model for `/growth-rate` resource endpoint.
     * @type {Model.GrowthRate}
     */
    'growth-rate': Model.GrowthRate;
    /** `Nature` model for `/nature` resource endpoint.
     * @type {Model.Nature}
     */
    nature: Model.Nature;
    /** `PokeathlonStat` model for `/pokeathlon-stat` resource endpoint.
     * @type {Model.PokeathlonStat}
     */
    'pokeathlon-stat': Model.PokeathlonStat;
    /** `Pokemon` model for `/pokemon` resource endpoint.
     * @type {Model.Pokemon}
     */
    pokemon: Model.Pokemon;
    /** `PokemonLocationArea` model for `/pokemon-location-area` resource endpoint.
     * @type {Model.PokemonLocationArea}
     */
    'pokemon-location-area': Model.PokemonLocationArea;
    /** `PokemonColor` model for `/pokemon-color` resource endpoint.
     * @type {Model.PokemonColor}
     */
    'pokemon-color': Model.PokemonColor;
    /** `PokemonForm` model for `/pokemon-form` resource endpoint.
     * @type {Model.PokemonForm}
     */
    'pokemon-form': Model.PokemonForm;
    /** `PokemonHabitat` model for `/pokemon-habitat` resource endpoint.
     * @type {Model.PokemonHabitat}
     */
    'pokemon-habitat': Model.PokemonHabitat;
    /** `PokemonShape` model for `/pokemon-shape` resource endpoint.
     * @type {Model.PokemonShape}
     */
    'pokemon-shape': Model.PokemonShape;
    /** `PokemonSpecie` model for `/pokemon-species` resource endpoint.
     * @type {Model.PokemonSpecie}
     */
    'pokemon-species': Model.PokemonSpecie;
    /** `PokemonStat` model for `/stat` resource endpoint.
     * @type {Model.PokemonStat}
     */
    stat: Model.PokemonStat;
    /** `PokemonType` model for `/type` resource endpoint.
     * @type {Model.PokemonType}
     */
    type: Model.PokemonType;
    /** `Language` model for `/language` resource endpoint.
     * @type {Model.Language}
     */
    language: Model.Language;
}
export type TypeMapKeys = keyof TypeMap;
/**
 * Available query params for pagination resource list.
 * @interface QueryParams
 * @property {number} - The size of resource list page.
 * @property {number} - The number of offset resource from resource list.
 */
export interface QueryParams {
    limit: number;
    offset: number;
}
export type EndpointParams = QueryParams & {
    param?: string | number;
};
/**
 * List of all PokéApi resources that returns only resource url data without name.
 */
export type UnnamedPaginationResource = 'machine' | 'characteristic' | 'contest-effect' | 'evolution-chain' | 'super-contest-effect';
/**
 * List of all PokéApi resources that has a subcollection endpoint.
 */
export type SubCollectionResource = 'pokemon-location-area';
/**
 * PokeApiProps interface `.get()` method parameter type definition.
 * @template T PokéApi resource endpoint
 */
export type GetParams<T extends TypeMapKeys> = T extends UnnamedPaginationResource ? number : number | string;
/**
 * PokeApiProps interface `.getAll()` method parameter type definition.
 * @template T PokéApi resource endpoint
 */
export type GetAllParams<T> = T extends SubCollectionResource ? number | string : Partial<QueryParams> | void;
/**
 * PokeApiProps interface `.getByName()` method return type definition.
 * @template T PokéApi resource endpoint
 */
export type GetByNameReturn<T extends TypeMapKeys> = Promise<T extends UnnamedPaginationResource ? never : TypeMap[T]>;
/**
 * PokeApiProps interface `.getAll()` method return type definition.
 * @template T PokéApi resource endpoint
 */
export type GetAllReturn<T> = Promise<T extends SubCollectionResource ? TypeMap[T] : Model.PaginatedResult['results']>;
/**
 * PokeApiProps interface `.count()` method return type definition.
 * @template T PokéApi resource endpoint
 */
export type CountReturn<T> = Promise<T extends SubCollectionResource ? never : number>;
/**
 * PokeApiProps interface `.paginate()` method return type definition.
 * @template T PokéApi resource endpoint
 */
export type PaginateReturn<T extends TypeMapKeys> = Promise<T extends SubCollectionResource ? never : Model.PaginatedResult>;
/**
 * PokéApi interface
 * @export
 * @interface PokeApiConfig
 * @typedef {PokeApiConfig}
 */
export interface PokeApiConfig {
    /**
     * Description placeholder
     * @date 4/2/2024 - 7:05:50 PM
     *
     * @type {Model.?boolean}
     */
    debug?: boolean;
    /**
     * Description placeholder
     * @date 4/2/2024 - 7:05:50 PM
     */
    [key: string]: unknown;
}
/**
 * The PokéApi class interface and methods for fetching data.
 * @interface PokeApiProps
 * @template T - The PokéApi resource endpoint.
 */
export interface PokeApiProps<T extends TypeMapKeys> {
    /**
     * Method that fetches a single record of given PokéApi resource endpoint.
     * @template T - PokéApi resource endpoint.
     * @param {number | string} idOrName - The desired id or name for given PokéApi resource.
     * If PokéApi resource is in type `UnnamedPaginationResource`
     * fetching data is only available via its id.
     *
     * @returns {Promise<TypeMap[T]>} Promise with given single PokéApi resource.
     */
    get(idOrName: GetParams<T>): Promise<TypeMap[T]>;
    /**
     * Method that fetches a list of records of given PokéApi resource endpoint.
     * @template T - PokéApi resource endpoint.
     * @param {Partial<QueryParams> | void | string | number} [params] - If resource is in type `SubCollectionResource`,
     * a `number` or `string` must be provided. Otherwise, the parameter is optinal, and can be partially completed with `QueryParams` or `void`.
     * @returns {Promise<TypeMap[T] | NamedAPIResource>} Promise with given single PokéApi resource if resource is in type `SubCollectionResource` or a Promise with paginated result.
     */
    getAll(params?: GetAllParams<T>): GetAllReturn<T>;
    /**
     * Method that fetches a single record of given PokéApi resource endpoint by its id.
     * @template T - PokéApi resource endpoint.
     * @param {number} id - The desired resource id for given PokéApi resource.
     * @returns {Promise<TypeMap[T]>} Promise with given single PokéApi resource.
     */
    getById(id: number): Promise<TypeMap[T]>;
    /**
     * Method that fetches a single record of given PokéApi resource endpoint by its name (if possible).
     * @template T - PokéApi resource endpoint.
     * @param {string} name - The desired resource name for given PokéApi resource.
     * @returns {Promise<TypeMap[T]>} Promise with given single PokéApi resource if resource is not in `UnnamedPaginationResource`, otherwise `never`.
     */
    getByName(name: string): GetByNameReturn<T>;
    /**
     * Method that fetches the total number of records for given PokéApi resource (if possible).
     * @template T - PokéApi resource endpoint.
     * @returns {Promise<TypeMap[T]>} Promise with total number of records for given PokéApi resource, if resource is not in `SubCollectionResource`, otherwise `never`.
     */
    count(): CountReturn<T>;
    /**
     * Method that fetches a paginated result for given PokéApi resource (if possible).
     * @template T - PokéApi resource endpoint.
     * @param {Partial<QueryParams>} [params] - Optional parameter for setting resouce list limit and offset values.
     * @returns {Promise<TypeMap[T]>} Promise with paginated result number of records for given PokéApi resource, if resource is not in `SubCollectionResource`, otherwise `never`.
     */
    paginate(params?: Partial<QueryParams>): PaginateReturn<T>;
}
