"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokeapi = exports.PokeApi = void 0;
const errors_1 = require("../errors");
const api_1 = require("./constants/api");
class PokeApi {
    constructor(endpoint, config) {
        this.config = config;
        this.endpoint = '';
        this.urlParam = '';
        this.hasPagination = true;
        this.config = config;
        this.endpoint = endpoint;
        this.urlParam = '';
    }
    get(idOrName) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchResource(`${this.getResourceURL({ param: idOrName })}`);
            this.validateStatus(result.status);
            return result.json();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchResource(`${this.getResourceURL()}/${id}`);
            this.validateStatus(result.status);
            return result.json();
        });
    }
    getByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // no names!
            // CONTEST-effect
            // super-contest
            const result = yield this.fetchResource(`${this.getResourceURL()}/${name}`);
            this.validateStatus(result.status);
            return result.json();
        });
    }
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchResource(this.getResourceURL(params));
            this.validateStatus(result.status);
            if (this.hasPagination) {
                const raw = yield result.json();
                return raw.results;
            }
            return result.json();
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchResource(this.getResourceURL());
            this.validateStatus(result.status);
            const raw = yield result.json();
            return raw.count;
        });
    }
    paginate(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.fetchResource(this.getResourceURL(params));
            this.validateStatus(result.status);
            return result.json();
        });
    }
    getResourceURL(params) {
        var _a;
        if (this.endpoint === 'pokemon-location-area') {
            this.endpoint = 'pokemon';
            this.urlParam = '/encounters';
            this.hasPagination = false;
        }
        let url = '';
        if (typeof params === 'string' || typeof params === 'number') {
            url = `${api_1.BASE_URL}${this.endpoint}/${params}${this.urlParam}`;
        }
        else {
            if ((params === null || params === void 0 ? void 0 : params.param) && params.param !== undefined) {
                url = `${api_1.BASE_URL}${this.endpoint}/${params.param}${this.urlParam}`;
            }
            else {
                const queryParams = new URLSearchParams();
                if (params === null || params === void 0 ? void 0 : params.offset) {
                    queryParams.append('offset', String(params.offset));
                }
                if (params === null || params === void 0 ? void 0 : params.limit) {
                    queryParams.append('limit', String(params.limit));
                }
                url = `${api_1.BASE_URL}${this.endpoint}${queryParams.size > 0 ? '?' + queryParams.toString() : ''}${this.urlParam}`;
            }
        }
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.debug) {
            console.log('[GET]', url);
        }
        return url;
    }
    validateStatus(statusCode) {
        var _a;
        if ((_a = this.config) === null || _a === void 0 ? void 0 : _a.debug) {
            console.log('[STATUS]', statusCode !== null && statusCode !== void 0 ? statusCode : 'UNKNOWN');
        }
        if (statusCode === api_1.ResponseStatus.NOT_FOUND) {
            throw new errors_1.ResourceNotFoundError();
        }
    }
    fetchResource(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch(url);
        });
    }
}
exports.PokeApi = PokeApi;
const pokeapi = (endpoint, config) => {
    return new PokeApi(endpoint, config);
};
exports.pokeapi = pokeapi;
//# sourceMappingURL=poke-api.js.map