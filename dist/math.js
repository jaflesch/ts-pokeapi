"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLGPFriendshipMultiplier = exports.getLetsGoPikachuStatValue = exports.getPLAEfforLevelMultiplier = exports.getLegendsArceusStatValue = exports.getPriorGenIIIStatValue = exports.getMinStatValue = exports.getMaxStatValue = exports.getStatValue = void 0;
const constants_1 = require("./constants");
const InvalidParameterValueError_1 = require("./errors/InvalidParameterValueError");
const getStatValue = (params) => {
    var _a, _b;
    const iv = (_a = params.iv) !== null && _a !== void 0 ? _a : constants_1.MAX_IV_VALUE;
    if (iv < constants_1.MIN_IV_VALUE || iv > constants_1.MAX_IV_VALUE) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`IV parameter must be a value between ${constants_1.MIN_IV_VALUE} and ${constants_1.MAX_IV_VALUE}`);
    }
    const evValue = ((_b = params.ev) !== null && _b !== void 0 ? _b : 0) / 4;
    if (evValue < constants_1.MIN_EV_VALUE || evValue > constants_1.MAX_EV_VALUE / 4) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`EV parameter must be a value between ${constants_1.MIN_EV_VALUE} and ${constants_1.MAX_EV_VALUE}`);
    }
    const natureCoeficient = params.nature === 'enhancing'
        ? 1.1
        : params.nature === 'hindering'
            ? 0.9
            : 1;
    const result = ((2 * params.base + iv + Math.floor(evValue)) * params.level) / 100;
    if (params.isHp) {
        if (params.isShedinja) {
            return 1;
        }
        return Math.floor(result) + params.level + 10;
    }
    return Math.floor((Math.floor(result) + 5) * natureCoeficient);
};
exports.getStatValue = getStatValue;
const getMaxStatValue = (params) => {
    return (0, exports.getStatValue)(Object.assign(Object.assign({}, params), { iv: constants_1.MAX_IV_VALUE, ev: constants_1.MAX_EV_VALUE, nature: 'enhancing' }));
};
exports.getMaxStatValue = getMaxStatValue;
const getMinStatValue = (params) => {
    return (0, exports.getStatValue)(Object.assign(Object.assign({}, params), { iv: constants_1.MIN_IV_VALUE, ev: constants_1.MIN_EV_VALUE, nature: 'hindering' }));
};
exports.getMinStatValue = getMinStatValue;
const getPriorGenIIIStatValue = (params) => {
    var _a, _b;
    const iv = (_a = params.iv) !== null && _a !== void 0 ? _a : constants_1.MAX_IV_VALUE_PRIOR_GEN3;
    if (iv < constants_1.MIN_IV_VALUE_PRIOR_GEN3 || iv > constants_1.MAX_IV_VALUE_PRIOR_GEN3) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`IV parameter must be a value between 0 and ${constants_1.MAX_IV_VALUE_PRIOR_GEN3}`);
    }
    const evValue = (_b = params.ev) !== null && _b !== void 0 ? _b : 0;
    if (evValue < constants_1.MIN_EV_VALUE_PRIOR_GEN3 || evValue > constants_1.MAX_EV_VALUE_PRIOR_GEN3) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`EV parameter must be a value between 0 and ${constants_1.MAX_EV_VALUE_PRIOR_GEN3}`);
    }
    const baseIv = (params.base + iv) * 2;
    const evSqrt = Math.floor(Math.ceil(Math.sqrt(evValue)) / 4);
    const result = Math.floor(((baseIv + evSqrt) * params.level) / 100);
    if (params.isHp) {
        return result + params.level + 10;
    }
    else {
        return result + 5;
    }
};
exports.getPriorGenIIIStatValue = getPriorGenIIIStatValue;
const getLegendsArceusStatValue = (params) => {
    var _a, _b;
    const level = (_a = params.level) !== null && _a !== void 0 ? _a : 100;
    const effortLevel = (_b = params.effortLevel) !== null && _b !== void 0 ? _b : 0;
    const effortLevelBonus = Math.round((Math.sqrt(params.base) * (0, exports.getPLAEfforLevelMultiplier)(effortLevel) + level) /
        2.5);
    const nature = params.nature === 'enhancing'
        ? 1.1
        : params.nature === 'hindering'
            ? 0.9
            : 1;
    if (params.isHp) {
        const base = (level / 100 + 1) * params.base + level;
        return Math.floor(base) + effortLevelBonus;
    }
    const base = Math.floor(Math.floor(((level / 50 + 1) * params.base) / 1.5) * nature);
    return base + effortLevelBonus;
};
exports.getLegendsArceusStatValue = getLegendsArceusStatValue;
const getPLAEfforLevelMultiplier = (effortLevel) => {
    if (effortLevel < 0 || effortLevel > 10) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`Effort level parameter must be a value between ${constants_1.MIN_EFFORT_LEVEL_PLA} and ${constants_1.MAX_EFFORT_LEVEL_PLA}`);
    }
    const multiplier = [0, 2, 3, 4, 7, 8, 9, 14, 15, 16, 25];
    return multiplier[effortLevel];
};
exports.getPLAEfforLevelMultiplier = getPLAEfforLevelMultiplier;
const getLetsGoPikachuStatValue = (params) => {
    var _a, _b, _c, _d;
    const av = (_a = params.av) !== null && _a !== void 0 ? _a : 0;
    if (av < constants_1.MIN_AWAKENING_VALUE || av > constants_1.MAX_AWAKENING_VALUE) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`AV parameter must be a value between ${constants_1.MIN_AWAKENING_VALUE} and ${constants_1.MAX_AWAKENING_VALUE}`);
    }
    const iv = (_b = params.iv) !== null && _b !== void 0 ? _b : 31;
    if (iv < constants_1.MIN_AWAKENING_VALUE || iv > constants_1.MAX_AWAKENING_VALUE) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`IV parameter must be a value between ${constants_1.MIN_IV_VALUE} and ${constants_1.MAX_IV_VALUE}`);
    }
    const friendship = (_c = params.friendship) !== null && _c !== void 0 ? _c : 0;
    if (friendship < constants_1.MIN_FRIENDSHIP_VALUE || friendship > constants_1.MAX_FRIENDSHIP_VALUE) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`IV parameter must be a value between ${constants_1.MIN_FRIENDSHIP_VALUE} and ${constants_1.MAX_FRIENDSHIP_VALUE}`);
    }
    const level = (_d = params.level) !== null && _d !== void 0 ? _d : 100;
    const nature = params.nature === 'enhancing'
        ? 1.1
        : params.nature === 'hindering'
            ? 0.9
            : 1;
    const base = Math.floor(((2 * params.base + iv) * level) / 100);
    if (params.isHp) {
        return base + level + 10 + av;
    }
    return (Math.floor((base + 5) * nature * (0, exports.getLGPFriendshipMultiplier)(friendship)) +
        av);
};
exports.getLetsGoPikachuStatValue = getLetsGoPikachuStatValue;
const getLGPFriendshipMultiplier = (friendship) => {
    return 1 + Math.floor((10 * friendship) / 255) / 100;
};
exports.getLGPFriendshipMultiplier = getLGPFriendshipMultiplier;
//# sourceMappingURL=math.js.map