# Changelog

Here we write upgrading notes for brands. It's a team effort to make them as
straightforward as possible.

## 0.5.0 - 2024-07-28

### Added
- Pokémon Showdown text template helpe  
- Base Power Calculation by Pokémon HP

### Changed
- Module importing hierarchy

### Fixed
- PokéAPI Pokémon Type resource tests after database update (Items, and Machines)

## 0.4.1 - 2024-05-19

### Changed
- Types `CatchComboReward` and `GetNatureNameParam` are now exported in Catch Combo and Stats modules, respectively

### Fixed
- Code coverage tests for many library functions, methods, and modules

## 0.4.0 - 2024-05-12

### Added
- Nature name by increased and decreased stat
- Pokémon Types matchup and chart methods

### Fixed
- PokéAPI Pokémon Type resource tests after database update


## 0.3.0 - 2024-04-21

### Added
- Catch Combo Bonus formulas
- Base Power Calculation by Pokémon Weight
- Base Power Calculation by Pokémon Speed
- Stat Modifier Formula

### Changed
- CodeCov uncovered custom Exception classes

### Fixed
- Pokémon interface properties type annotation

## 0.2.0 - 2024-04-02
 
### Added
- `PokeApi` class for data fetching
- `pokeapi()` function for data fetching
- Enumerables Ids of PokéAPI resources
- PokéAPI constants for URLs and endpoints
- New Exception for PokéAPI Resource not found

### Changed
- PokéAPI modules from `type` to `interface` (when applicable)
- Math and Validation module folder structure

### Fixed
- Some PokéAPI model small inconsistences
- Minor typos in files and documentations

## 0.1.2 - 2024-03-25
 
### Added
- Friendship formula
- Stat calculation formula for Pokémon Legends Arceus
- Stat calculation formula for Pokémon: Let's Go Pikachu and Let's Go Eevee
- Combat Power (CP) formula for Pokémon: Let's Go Pikachu and Let's Go Eevee
- Validation module

### Changed
- Changed `getStatValue` function parameters names and added `isShedinja` property
- Changed directory structure for package imports

### Fixed
- EvolutionChain type gender property module import
- Empty `dist/` folder upon package release


**Full Changelog**: https://github.com/jaflesch/ts-pokeapi/compare/0.1.1...0.1.2

## 0.1.1- 2024-03-17
 
### Added
- Stats calculation formula for main Pokémon games from Generation III onwards

### Changed
- Type definitions folder structure

**Full Changelog**: https://github.com/jaflesch/ts-pokeapi/commits/0.1.1

## 0.1.0- 2023-11-26
 
### Added
- PokéAPI/v2 type definition for endpoint values