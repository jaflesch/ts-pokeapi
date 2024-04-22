"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNatureName = void 0;
const core_1 = require("../core");
const getNatureName = (increase, decrease) => {
    if (increase === core_1.PokemonStatId.ATTACK ||
        increase === core_1.PokemonStatName.ATTACK) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return 'Hardy';
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return 'Lonely';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return 'Adamant';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return 'Naughty';
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return 'Brave';
        }
    }
    else if (increase === core_1.PokemonStatId.DEFENSE ||
        increase === core_1.PokemonStatName.DEFENSE) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return 'Bold';
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return 'Docile';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return 'Impish';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return 'Lax';
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return 'Relaxed';
        }
    }
    else if (increase === core_1.PokemonStatId.SPECIAL_ATTACK ||
        increase === core_1.PokemonStatName.SPECIAL_ATTACK) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return 'Modest';
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return 'Mild';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return 'Bashful';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return 'Rash';
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return 'Quiet';
        }
    }
    else if (increase === core_1.PokemonStatId.SPECIAL_DEFENSE ||
        increase === core_1.PokemonStatName.SPECIAL_DEFENSE) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return 'Calm';
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return 'Gentle';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return 'Careful';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return 'Quirky';
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return 'Sassy';
        }
    }
    else if (increase === core_1.PokemonStatId.SPEED ||
        increase === core_1.PokemonStatName.SPEED) {
        if (decrease === core_1.PokemonStatId.ATTACK ||
            decrease === core_1.PokemonStatName.ATTACK) {
            return 'Timid';
        }
        else if (decrease === core_1.PokemonStatId.DEFENSE ||
            decrease === core_1.PokemonStatName.DEFENSE) {
            return 'Hasty';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_ATTACK ||
            decrease === core_1.PokemonStatName.SPECIAL_ATTACK) {
            return 'Jolly';
        }
        else if (decrease === core_1.PokemonStatId.SPECIAL_DEFENSE ||
            decrease === core_1.PokemonStatName.SPECIAL_DEFENSE) {
            return 'Naive';
        }
        else if (decrease === core_1.PokemonStatId.SPEED ||
            decrease === core_1.PokemonStatName.SPEED) {
            return 'Serious';
        }
    }
};
exports.getNatureName = getNatureName;
//# sourceMappingURL=nature.js.map