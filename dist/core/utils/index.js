"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceIdFromURL = void 0;
const api_1 = require("../constants/api");
const getResourceIdFromURL = (url) => {
    return Number(url.replace(api_1.BASE_URL, '').split('/')[1]);
};
exports.getResourceIdFromURL = getResourceIdFromURL;
//# sourceMappingURL=index.js.map