"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasComatoseAbility = exports.evolvesFromMoonStone = exports.isUltraBeast = void 0;
/** Returns wheter given Pokémon is a Ultra Beast or not.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon is a Ultra Beast, false otherwise.
 */
const isUltraBeast = (pokemon) => {
    if (typeof pokemon === 'string') {
        return [
            'nihilego',
            'buzzwole',
            'pheromosa',
            'xurkitree',
            'celesteela',
            'kartana',
            'guzzlord',
            'poipole',
            'naganadel',
            'stakataka',
            'blacephalon',
        ].includes(pokemon);
    }
    return ((pokemon >= 793 && pokemon <= 799) || (pokemon >= 803 && pokemon <= 806));
};
exports.isUltraBeast = isUltraBeast;
/** Returns wheter given Pokémon evolves from a
 * {@link https://bulbapedia.bulbagarden.net/wiki/Moon_Stone Moon Stone}.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon evolves, false otherwise.
 */
const evolvesFromMoonStone = (pokemon) => {
    return [
        30,
        33,
        35,
        39,
        300,
        517,
        'nidorina',
        'nidorino',
        'clefairy',
        'jigglypuff',
        'skitty',
        'munna',
    ].includes(pokemon);
};
exports.evolvesFromMoonStone = evolvesFromMoonStone;
/** Returns wheter given Pokémon has
 * {@link https://bulbapedia.bulbagarden.net/wiki/Comatose_(Ability) Comatose} ability.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon has the ability, false otherwise.
 */
const hasComatoseAbility = (pokemon) => {
    return pokemon === 'komala' || pokemon === 775;
};
exports.hasComatoseAbility = hasComatoseAbility;
//# sourceMappingURL=pokemon-species.js.map