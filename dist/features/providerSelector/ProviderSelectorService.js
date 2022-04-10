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
var ProviderSelectorService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderSelectorService = void 0;
const common_1 = require("@nestjs/common");
let ProviderSelectorService = ProviderSelectorService_1 = class ProviderSelectorService {
    constructor(quoteProviders) {
        this.quoteProviders = quoteProviders;
        this.logger = new common_1.Logger(ProviderSelectorService_1.name);
    }
    async select(from_currency_code, to_currency_code, amount) {
        const providersSupportedCurrencies = await this.withSupportedCurrencies(from_currency_code, to_currency_code);
        const providerSelectedBasedOnAmount = this.withAmountRule(amount, from_currency_code, providersSupportedCurrencies);
        const selectedProivders = providerSelectedBasedOnAmount.length > 0 ?
            providerSelectedBasedOnAmount : providersSupportedCurrencies;
        const names = selectedProivders.map(proivder => proivder.providerName);
        return this.providers(names);
    }
    async withSupportedCurrencies(from_currency_code, to_currency_code) {
        this.logger.log(`Selecting providers who supportes [${from_currency_code}, ${to_currency_code}]`);
        const callables = this.quoteProviders.map(provider => provider.currenciesSupported());
        const supportedCurrencies = await Promise.all(callables);
        return supportedCurrencies.filter(item => item.currencies.includes(to_currency_code) && item.currencies.includes(from_currency_code));
    }
    withAmountRule(amount, from_currency_code, proivders) {
        return proivders.filter(setProivder => setProivder.providerName == 'Frankfurter' && amount > 1000 && from_currency_code == 'USD');
    }
    providers(names) {
        return this.quoteProviders.filter(provider => names.includes(provider.getName()));
    }
};
ProviderSelectorService = ProviderSelectorService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Array])
], ProviderSelectorService);
exports.ProviderSelectorService = ProviderSelectorService;
//# sourceMappingURL=ProviderSelectorService.js.map