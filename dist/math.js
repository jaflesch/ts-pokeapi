"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoPowerStatValue = exports.getPriorGenIIIStatValue = exports.getMinStatValue = exports.getMaxStatValue = exports.getStatValue = void 0;
const InvalidParameterValueError_1 = require("./errors/InvalidParameterValueError");
const getStatValue = (params) => {
    var _a, _b;
    const iv = (_a = params.iv) !== null && _a !== void 0 ? _a : 31;
    if (iv < 0 || iv > 31) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError('IV parameter must be a value between 0 and 31');
    }
    const evValue = ((_b = params.ev) !== null && _b !== void 0 ? _b : 0) / 4;
    if (evValue < 0 || evValue > 63.75) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError('EV parameter must be a value between 0 and 252');
    }
    const natureCoeficient = params.nature === 'enhancing'
        ? 1.1
        : params.nature === 'hindering'
            ? 0.9
            : 1;
    const result = ((2 * params.base + iv + Math.floor(evValue)) * params.level) / 100;
    if (params.hp) {
        return Math.floor(result) + params.level + 10;
    }
    else {
        return Math.floor((Math.floor(result) + 5) * natureCoeficient);
    }
};
exports.getStatValue = getStatValue;
const getMaxStatValue = (params) => {
    return (0, exports.getStatValue)(Object.assign(Object.assign({}, params), { iv: 31, ev: 255, nature: 'enhancing' }));
};
exports.getMaxStatValue = getMaxStatValue;
const getMinStatValue = (params) => {
    return (0, exports.getStatValue)(Object.assign(Object.assign({}, params), { iv: 0, ev: 0, nature: 'hindering' }));
};
exports.getMinStatValue = getMinStatValue;
const getPriorGenIIIStatValue = (params) => {
    return false;
};
exports.getPriorGenIIIStatValue = getPriorGenIIIStatValue;
const getGoPowerStatValue = (params) => {
    // to do...
};
exports.getGoPowerStatValue = getGoPowerStatValue;
//# sourceMappingURL=math.js.map