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
var QuoteService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteService = void 0;
const common_1 = require("@nestjs/common");
const QuoteResponse_1 = require("../../core/responses/QuoteResponse");
const exchangeRateNormalizer_1 = require("../../core/utils/exchangeRateNormalizer");
const ProviderSelectorService_1 = require("../providerSelector/ProviderSelectorService");
let QuoteService = QuoteService_1 = class QuoteService {
    constructor(providerSelectorService) {
        this.providerSelectorService = providerSelectorService;
        this.logger = new common_1.Logger(QuoteService_1.name);
    }
    async findQuote(from_currency_code, to_currency_code, amount) {
        const providers = await this.providerSelectorService.select(from_currency_code, to_currency_code, amount);
        const quotesReponse = await this.requestQuotesFromProviders(from_currency_code, to_currency_code, providers);
        this.logger.log('Choosing the best exchange rate');
        const bestQuotesProvider = quotesReponse.sort((quoteResponse_1, quoteResponse_2) => quoteResponse_1.quote - quoteResponse_2.quote)[0];
        const normalizedExchangeRate = (0, exchangeRateNormalizer_1.default)(bestQuotesProvider.quote);
        return new QuoteResponse_1.QuoteResponse()
            .setCurrencyCode(to_currency_code)
            .setAmount(Math.round(amount * normalizedExchangeRate))
            .setExchangeRate(normalizedExchangeRate)
            .setProviderName(bestQuotesProvider.providerName)
            .to_json();
    }
    async requestQuotesFromProviders(from_currency_code, to_currency_code, proivders) {
        this.logger.log('Requesting quotes from providers');
        const callables = proivders.map(provider => provider.getQuote(from_currency_code, to_currency_code));
        const settled = await Promise.allSettled(callables);
        const fulfilled = settled.filter(promise => promise.status == 'fulfilled');
        return fulfilled.map(promise => promise.value);
    }
};
QuoteService = QuoteService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ProviderSelectorService_1.ProviderSelectorService])
], QuoteService);
exports.QuoteService = QuoteService;
//# sourceMappingURL=QuoteService.js.map