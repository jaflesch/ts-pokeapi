import { PokemonTypeId } from '../core';
import { PokemonTypeName, PokemonTypesArrayIndex } from './constants';
export declare const formatTypeIdToTypeIndex: (typeId: PokemonTypeId) => PokemonTypesArrayIndex;
export declare const formatTypeIndexToTypeId: (typeIndex: PokemonTypesArrayIndex) => PokemonTypeId;
export declare const formatTypeIndexToName: (typeIndex: PokemonTypesArrayIndex) => PokemonTypeName;
export declare const formatTypeNameToIndex: (typeName: keyof typeof PokemonTypesArrayIndex) => PokemonTypesArrayIndex;
export declare const formatTypeNameToId: (typeName: keyof typeof PokemonTypeId) => PokemonTypeId;
export declare const formatTypeIdToName: (typeId: PokemonTypeId) => PokemonTypeName;
