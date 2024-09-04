type PokemonSpecieIdentifier = number | string;
/** Returns wheter given Pokémon is a Ultra Beast or not.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon is a Ultra Beast, false otherwise.
 */
export declare const isUltraBeast: (pokemon: PokemonSpecieIdentifier) => boolean;
/** Returns wheter given Pokémon evolves from a
 * {@link https://bulbapedia.bulbagarden.net/wiki/Moon_Stone Moon Stone}.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon evolves, false otherwise.
 */
export declare const evolvesFromMoonStone: (pokemon: PokemonSpecieIdentifier) => boolean;
/** Returns wheter given Pokémon has
 * {@link https://bulbapedia.bulbagarden.net/wiki/Comatose_(Ability) Comatose} ability.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon has the ability, false otherwise.
 */
export declare const hasComatoseAbility: (pokemon: PokemonSpecieIdentifier) => boolean;
export {};
