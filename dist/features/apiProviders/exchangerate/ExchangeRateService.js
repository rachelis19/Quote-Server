"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateService = void 0;
const common_1 = require("@nestjs/common");
let ExchangeRateService = class ExchangeRateService {
    constructor(http) {
        this.http = http;
    }
    async getQuote(from_currency_code, to_currency_code) {
        const response = await this.http.get(`latest/${from_currency_code}`);
        const rates = response.data['conversion_rates'];
        const quote = rates[to_currency_code];
        return { quote: quote, providerName: this.getName() };
    }
    async currenciesSupported() {
        const { data } = await this.http.get('codes');
        return { providerName: this.getName(), currencies: data.supported_codes.map(codes => codes[0]) };
    }
    getName() {
        return 'ExchangeRate-API';
    }
};
ExchangeRateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('exchange-http')),
    __metadata("design:paramtypes", [Function])
], ExchangeRateService);
exports.ExchangeRateService = ExchangeRateService;
//# sourceMappingURL=ExchangeRateService.js.map