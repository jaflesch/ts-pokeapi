"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
const format = ({ pokemon, level = 100, shiny, gender, ivs, evs, tera, item, moves, nature, ability, nickname, happiness, }) => {
    var _a, _b;
    let formatedText = '';
    let pokemonName = '';
    if (typeof pokemon === 'object') {
        pokemonName =
            (_b = (_a = pokemon.names.find((n) => n.language.name === 'en')) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : pokemon.names[0].name;
    }
    else {
        pokemonName = pokemon;
    }
    if (nickname) {
        formatedText += `${nickname} (${pokemonName})`;
    }
    else {
        formatedText += pokemonName;
    }
    if (gender && gender !== 'genderless') {
        formatedText += ` (${gender === 'male' ? 'M' : 'F'})`;
    }
    if (item) {
        formatedText += ` @ ${item}`;
    }
    if (ability) {
        formatedText += `\nAbility: ${ability}`;
    }
    if (level) {
        formatedText += `\nLevel: ${level}`;
    }
    if (shiny !== undefined) {
        formatedText += `\nShiny: ${shiny === true ? 'Yes' : 'No'}`;
    }
    if (happiness) {
        formatedText += `\nHappiness: ${happiness}`;
    }
    if (tera) {
        formatedText += `\nTera Type: ${tera}`;
    }
    const formatedEvs = [];
    if (evs) {
        if (evs.hp !== undefined) {
            formatedEvs.push(`${evs.hp} HP`);
        }
        if (evs.attack !== undefined) {
            formatedEvs.push(`${evs.attack} Atk`);
        }
        if (evs.defense !== undefined) {
            formatedEvs.push(`${evs.defense} Def`);
        }
        if (evs.specialAttack !== undefined) {
            formatedEvs.push(`${evs.specialAttack} SpA`);
        }
        if (evs.specialDefense !== undefined) {
            formatedEvs.push(`${evs.specialDefense} SpD`);
        }
        if (evs.speed !== undefined) {
            formatedEvs.push(`${evs.speed} Spe`);
        }
    }
    if (formatedEvs.length > 0) {
        formatedText += `\nEVs: ${formatedEvs.join(' / ')}`;
    }
    if (nature) {
        formatedText = `\n${nature} Nature`;
    }
    const formatedIvs = [];
    if (ivs) {
        if (ivs.hp !== undefined) {
            formatedIvs.push(`${ivs.hp} HP`);
        }
        if (ivs.attack !== undefined) {
            formatedIvs.push(`${ivs.attack} Atk`);
        }
        if (ivs.defense !== undefined) {
            formatedIvs.push(`${ivs.defense} Def`);
        }
        if (ivs.specialAttack !== undefined) {
            formatedIvs.push(`${ivs.specialAttack} SpA`);
        }
        if (ivs.specialDefense !== undefined) {
            formatedIvs.push(`${ivs.specialDefense} SpD`);
        }
        if (ivs.speed !== undefined) {
            formatedIvs.push(`${ivs.speed} Spe`);
        }
    }
    if (formatedIvs.length > 0) {
        formatedText += `\nIVs: ${formatedIvs.join(' / ')}`;
    }
    formatedText += `\n${moves.map((move) => `- ${move}`).join('\n')}`;
    return formatedText;
};
exports.format = format;
//# sourceMappingURL=format.js.map