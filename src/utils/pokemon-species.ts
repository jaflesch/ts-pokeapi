type PokemonSpecieIdentifier = number | string;

/** Returns wheter given Pokémon is a Ultra Beast or not.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon is a Ultra Beast, false otherwise.
 */
export const isUltraBeast = (pokemon: PokemonSpecieIdentifier): boolean => {
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

  return (
    (pokemon >= 793 && pokemon <= 799) || (pokemon >= 803 && pokemon <= 806)
  );
};

/** Returns wheter given Pokémon evolves from a
 * {@link https://bulbapedia.bulbagarden.net/wiki/Moon_Stone Moon Stone}.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon evolves, false otherwise.
 */
export const evolvesFromMoonStone = (
  pokemon: PokemonSpecieIdentifier,
): boolean => {
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

/** Returns wheter given Pokémon has
 * {@link https://bulbapedia.bulbagarden.net/wiki/Comatose_(Ability) Comatose} ability.
 * @param {PokemonSpecieIdentifier} pokemon - A PokéAPI Pokémon resource id (or name) from given Pokémon.
 * @returns {CatchComboBonus} True if Pokémon has the ability, false otherwise.
 */
export const hasComatoseAbility = (
  pokemon: PokemonSpecieIdentifier,
): boolean => {
  return pokemon === 'komala' || pokemon === 775;
};
