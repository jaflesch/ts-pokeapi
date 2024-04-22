"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNatureName = void 0;
const core_1 = require("../core");
/**
 * Returns Pokémon Nature regarding increased and decreased stats. Valid stats are only Attack, Defense, Special Attack, Special Defense, and Speed.
 * @param { PokemonStatId | PokemonStatName} increase - Increased stat of nature.
 * @param { PokemonStatId | PokemonStatName} decrease - Decreased stat of nature.
 * @returns {NatureName} Nature name.
 */
const getNatureName = (increase, decrease) => {
    if (increase === core_1.PokemonStatId.ATTACK ||
        increase === core_1.PokemonStatName.ATTACK) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return core_1.NatureName.HARDY;
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return core_1.NatureName.LONELY;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return core_1.NatureName.ADAMANT;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return core_1.NatureName.NAUGHTY;
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return core_1.NatureName.BRAVE;
        }
        else
            return null;
    }
    else if (increase === core_1.PokemonStatId.DEFENSE ||
        increase === core_1.PokemonStatName.DEFENSE) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return core_1.NatureName.BOLD;
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return core_1.NatureName.DOCILE;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return core_1.NatureName.IMPISH;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return core_1.NatureName.LAX;
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return core_1.NatureName.RELAXED;
        }
        else
            return null;
    }
    else if (increase === core_1.PokemonStatId.SPECIAL_ATTACK ||
        increase === core_1.PokemonStatName.SPECIAL_ATTACK) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return core_1.NatureName.MODEST;
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return core_1.NatureName.MILD;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return core_1.NatureName.BASHFUL;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return core_1.NatureName.RASH;
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return core_1.NatureName.QUIET;
        }
        else
            return null;
    }
    else if (increase === core_1.PokemonStatId.SPECIAL_DEFENSE ||
        increase === core_1.PokemonStatName.SPECIAL_DEFENSE) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return core_1.NatureName.CALM;
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return core_1.NatureName.GENTLE;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return core_1.NatureName.CAREFUL;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return core_1.NatureName.QUIRKY;
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return core_1.NatureName.SASSY;
        }
        else
            return null;
    }
    else if (increase === core_1.PokemonStatId.SPEED ||
        increase === core_1.PokemonStatName.SPEED) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return core_1.NatureName.TIMID;
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return core_1.NatureName.HASTY;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return core_1.NatureName.JOLLY;
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return core_1.NatureName.NAIVE;
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return core_1.NatureName.SERIOUS;
        }
        else
            return null;
    }
    else
        return null;
};
exports.getNatureName = getNatureName;
//# sourceMappingURL=nature.js.map