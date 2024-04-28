"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefensiveMatchups = exports.getOffensiveMatchups = void 0;
const constants_1 = require("./constants");
const getOffensiveMatchups = (index) => {
    const normal = [];
    const noEffect = [];
    const superEffective = [];
    const notEffective = [];
    for (let i = 0; i < constants_1.TYPES_MATCHUP_MATRIX[index].length; i++) {
        switch (constants_1.TYPES_MATCHUP_MATRIX[index][i]) {
            case 0:
                noEffect.push(i);
                break;
            case 1:
                normal.push(i);
                break;
            case 0.5:
                notEffective.push(i);
                break;
            case 2:
                superEffective.push(i);
                break;
        }
    }
    return {
        normal,
        noEffect,
        notEffective,
        superEffective,
    };
};
exports.getOffensiveMatchups = getOffensiveMatchups;
const getDefensiveMatchups = (index) => {
    const normal = [];
    const noEffect = [];
    const superEffective = [];
    const notEffective = [];
    for (let i = 0; i < constants_1.TYPES_MATCHUP_MATRIX.length; i++) {
        switch (constants_1.TYPES_MATCHUP_MATRIX[i][index]) {
            case 0:
                noEffect.push(i);
                break;
            case 1:
                normal.push(i);
                break;
            case 0.5:
                notEffective.push(i);
                break;
            case 2:
                superEffective.push(i);
                break;
        }
    }
    return {
        normal,
        noEffect,
        notEffective,
        superEffective,
    };
};
exports.getDefensiveMatchups = getDefensiveMatchups;
//# sourceMappingURL=index.js.map