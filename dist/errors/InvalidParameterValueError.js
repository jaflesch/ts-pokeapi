"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidParameterValueError = void 0;
class InvalidParameterValueError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = 'InvalidParameterValueError';
        this.stack = new Error().stack;
    }
}
exports.InvalidParameterValueError = InvalidParameterValueError;
InvalidParameterValueError.INVALID_PARAMETER_VALUE = 'Invalid parameter value';
//# sourceMappingURL=InvalidParameterValueError.js.map