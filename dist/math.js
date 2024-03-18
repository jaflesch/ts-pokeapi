"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGoPowerStatValue = exports.getPriorGenIIIStatValue = exports.getMinStatValue = exports.getMaxStatValue = exports.getStatValue = void 0;
const constants_1 = require("./constants");
const InvalidParameterValueError_1 = require("./errors/InvalidParameterValueError");
const getStatValue = (params) => {
    var _a, _b;
    const iv = (_a = params.iv) !== null && _a !== void 0 ? _a : constants_1.MAX_IV_VALUE;
    if (iv < constants_1.MIN_IV_VALUE || iv > constants_1.MAX_IV_VALUE) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`IV parameter must be a value between 0 and ${constants_1.MAX_IV_VALUE}`);
    }
    const evValue = ((_b = params.ev) !== null && _b !== void 0 ? _b : 0) / 4;
    if (evValue < constants_1.MIN_EV_VALUE || evValue > constants_1.MAX_EV_VALUE / 4) {
        throw new InvalidParameterValueError_1.InvalidParameterValueError(`EV parameter must be a value between 0 and ${constants_1.MAX_EV_VALUE}`);
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
    if (params.hp) {
        return result + params.level + 10;
    }
    else {
        return result + 5;
    }
};
exports.getPriorGenIIIStatValue = getPriorGenIIIStatValue;
const getGoPowerStatValue = (params) => {
    // to do...
};
exports.getGoPowerStatValue = getGoPowerStatValue;
//# sourceMappingURL=math.js.map