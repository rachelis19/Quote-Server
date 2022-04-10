"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = {
    provide: 'http',
    useValue: axios_1.default.create({ baseURL: 'https://api.frankfurter.app/' })
};
//# sourceMappingURL=httpFrankfurterInstance.js.map