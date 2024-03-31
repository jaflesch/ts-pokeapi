"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceNotFoundError = void 0;
class ResourceNotFoundError extends Error {
    constructor() {
        super();
        this.message = `PokéAPI resource not found (HTTP 404)`;
        this.name = 'ResourceNotFoundError';
        this.stack = new Error().stack;
    }
}
exports.ResourceNotFoundError = ResourceNotFoundError;
ResourceNotFoundError.RESOURCE_NOT_FOUND = 'Resource not found';
//# sourceMappingURL=ResourceNotFoundError.js.map