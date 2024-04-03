import * as Types from './poke-api.types';
type Keys = Types.TypeMapKeys;
export declare class PokeApi<T extends Keys> implements Types.PokeApiProps<T> {
    readonly config?: Types.PokeApiConfig | undefined;
    private endpoint;
    private urlParam;
    private hasPagination;
    constructor(endpoint: T, config?: Types.PokeApiConfig | undefined);
    get(idOrName: Types.GetParams<T>): Promise<Types.TypeMap[T]>;
    getById(id: number): Promise<Types.TypeMap[T]>;
    getByName(name: string): Types.GetByNameReturn<T>;
    getAll(params: Types.GetAllParams<T>): Types.GetAllReturn<T>;
    count(): Types.CountReturn<T>;
    paginate(params?: Partial<Types.QueryParams>): Types.PaginateReturn<T>;
    private getResourceURL;
    private validateStatus;
    private fetchResource;
    private logger;
}
export declare const pokeapi: <T extends keyof Types.TypeMap>(endpoint: T, config?: Types.PokeApiConfig) => PokeApi<T>;
export {};
