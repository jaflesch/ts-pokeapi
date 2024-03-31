"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// // should parse data!!!
// export const fetchPokemon = async (
//   idOrName: string | number,
// ): Promise<Pokemon> => {
//   const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
//   const data: Pokemon = await result.json();
//   return data;
// };
// type Stats = {
//   hp: number;
//   attack: number;
//   defense: number;
//   specialAttack: number;
//   specialDefense: number;
//   speed: number;
// };
// type FetchPokemonStatsDto = Stats & {
//   total: number;
//   effort: Array<{
//     value: number;
//     stat: keyof Stats;
//   }>;
// };
// export const fetchPokemonStats = async (
//   idOrName: number | string,
// ): Promise<FetchPokemonStatsDto> => {
//   const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
//   const { stats }: Pokemon = await result.json();
//   const baseStat = {
//     hp: 0,
//     attack: 0,
//     defense: 0,
//     specialAttack: 0,
//     specialDefense: 0,
//     speed: 0,
//   };
//   let total = 0;
//   const effort: FetchPokemonStatsDto['effort'] = [];
//   stats.map((s) => {
//     const { name } = s.stat;
//     const key = (
//       name === 'special-attack'
//         ? 'specialAttack'
//         : name === 'special-defense'
//           ? 'specialDefense'
//           : name
//     ) as keyof Stats;
//     total += s.base_stat;
//     baseStat[key] = s.base_stat;
//     if (s.effort) {
//       effort.push({
//         value: s.effort,
//         stat: key,
//       });
//     }
//   });
//   return {
//     ...baseStat,
//     total,
//     effort,
//   };
// };
// // returns PokéAPI raw data;
// interface TypeMap {
//   pokemon: Pokemon;
//   'pokemon-species': PokemonSpecie;
// }
// export const pokeapi = async <T extends keyof TypeMap>(
//   path: T,
//   value?: string | number | ,
// ): Promise<TypeMap[T][]> => {
//   const result = await fetch(`https://pokeapi.co/api/v2/${path}/${value}`);
//   const data = await result.json();
//   return data;
// };
// function pp()
// DEBUG
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const n = yield (0, _1.pokeapi)('pokemon-location-area', { debug: true }).getAll(0);
        }
        catch (err) {
            console.log('#### ERRO', err.message);
        }
        // console.log('@@@@ N', n);
        const m = yield (0, _1.pokeapi)('pokemon', { debug: true }).getAll();
        // console.log('@@@@ M', m);
        // const o = await pokeapi('pokemon', { debug: true }).getAll(');
        // console.log('@@@@ N', o);
        const q = yield (0, _1.pokeapi)('pokemon', { debug: true }).getAll({
            offset: 70,
            limit: 1,
        });
        const w = yield (0, _1.pokeapi)('pokemon', { debug: true }).count();
        console.log('@@@@ N', w);
        // n = await pokeapi('pokemon-location-area').getAll();
        // console.log('@@@@ N', n);
        // console.log('@@@@@:', poke, pokes, pokesR, count);
        // await getPokemonByName('1');
        // await getPokemonByName('150');
    });
})();
//# sourceMappingURL=pokemon.js.map