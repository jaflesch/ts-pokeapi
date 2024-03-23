"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParameterRangeError = void 0;
class InvalidParameterRangeError extends Error {
    constructor(parameter, minValue, maxValue) {
        super();
        this.parameter = parameter;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.message = `${parameter} parameter must be a value between ${minValue} and ${maxValue}`;
        this.name = 'InvalidParameterRangeError';
        this.stack = new Error().stack;
    }
}
exports.InvalidParameterRangeError = InvalidParameterRangeError;
InvalidParameterRangeError.INVALID_PARAMETER_RANGE = 'Invalid parameter range';
//# sourceMappingURL=InvalidParameterRangeError.js.map