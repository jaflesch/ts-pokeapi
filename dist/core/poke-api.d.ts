import * as Model from './models';
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
    'item-atribute': Model.ItemAttribute;
    'item-category': Model.ItemCategory;
    'item-fling-effect': Model.ItemFlingEffect;
    'itme-pocket': Model.ItemPocket;
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
    'pokemon-form': Model.PokemonEncounter;
    'pokemon-habitat': Model.PokemonHabitat;
    'pokemon-shape': Model.PokemonShape;
    'pokemon-species': Model.PokemonSpecie;
    stat: Model.PokemonStat;
    type: Model.PokemonType;
    language: Model.Language;
}
export interface QueryParams {
    limit: number;
    offset: number;
}
type GetAllResources<T> = T extends 'pokemon-location-area' ? number | string : Partial<QueryParams> | void;
type TypeMapKeys = keyof TypeMap;
interface PokeApiProps<T extends TypeMapKeys> {
    get(idOrName: number | string): Promise<TypeMap[T]>;
    getAll(params?: GetAllResources<T>): Promise<Model.PaginatedResult['results']>;
    getById(id: number): Promise<TypeMap[T]>;
    getByName(name: string): Promise<TypeMap[T]>;
    count(): Promise<number>;
    paginate(params?: Partial<QueryParams>): Promise<Model.PaginatedResult>;
}
type PokeApiConfig = {
    debug?: boolean;
    [key: string]: unknown;
};
export declare class PokeApi<T extends keyof TypeMap> implements PokeApiProps<T> {
    readonly config?: PokeApiConfig | undefined;
    private endpoint;
    private urlParam;
    private hasPagination;
    constructor(endpoint: T, config?: PokeApiConfig | undefined);
    get(idOrName: string | number): Promise<TypeMap[T]>;
    getById(id: number): Promise<TypeMap[T]>;
    getByName(name: string): Promise<TypeMap[T]>;
    getAll(params: GetAllResources<T>): Promise<Model.PaginatedResult['results']>;
    count(): Promise<number>;
    paginate(params?: Partial<QueryParams>): Promise<Model.PaginatedResult>;
    private getResourceURL;
    private validateStatus;
    private fetchResource;
}
export declare const pokeapi: <T extends keyof TypeMap>(endpoint: T, config?: PokeApiConfig) => PokeApi<T>;
export {};
