"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatus = void 0;
// to do: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["CONTINUE"] = 100] = "CONTINUE";
    ResponseStatus[ResponseStatus["SWITCHING_PROTOCOL"] = 101] = "SWITCHING_PROTOCOL";
    ResponseStatus[ResponseStatus["OK"] = 200] = "OK";
    ResponseStatus[ResponseStatus["CREATED"] = 201] = "CREATED";
    ResponseStatus[ResponseStatus["ACCEPTED"] = 202] = "ACCEPTED";
    ResponseStatus[ResponseStatus["MULTIPLE_CHOICE"] = 300] = "MULTIPLE_CHOICE";
    ResponseStatus[ResponseStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    ResponseStatus[ResponseStatus["FOUND"] = 302] = "FOUND";
    ResponseStatus[ResponseStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    ResponseStatus[ResponseStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    ResponseStatus[ResponseStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    ResponseStatus[ResponseStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    ResponseStatus[ResponseStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    ResponseStatus[ResponseStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    ResponseStatus[ResponseStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    ResponseStatus[ResponseStatus["CONFLICT"] = 409] = "CONFLICT";
    ResponseStatus[ResponseStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    ResponseStatus[ResponseStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    ResponseStatus[ResponseStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    ResponseStatus[ResponseStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    ResponseStatus[ResponseStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
})(ResponseStatus || (exports.ResponseStatus = ResponseStatus = {}));
//# sourceMappingURL=response-status.enum.js.map