"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
exports.default = {
    provide: 'exchange-http',
    useFactory: (configService) => axios_1.default.create({
        baseURL: `https://v6.exchangerate-api.com/v6/${configService.get('EXCHANGE_RATE_API_KEY')}/`,
    }),
    inject: [config_1.ConfigService]
};
//# sourceMappingURL=httpExchangeRateInstnace.js.map