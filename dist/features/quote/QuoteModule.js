"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteModule = void 0;
const QuoteController_1 = require("./QuoteController");
const QuoteService_1 = require("./QuoteService");
const common_1 = require("@nestjs/common");
const ProviderSelectorService_1 = require("../providerSelector/ProviderSelectorService");
const ProviderSelectorModule_1 = require("../providerSelector/ProviderSelectorModule");
const ExchangeRateService_1 = require("../apiProviders/exchangerate/ExchangeRateService");
const FrankfurterService_1 = require("../apiProviders/frankfurter/FrankfurterService");
const ExchangeRateModule_1 = require("../apiProviders/exchangerate/ExchangeRateModule");
const FrankfurterModule_1 = require("../apiProviders/frankfurter/FrankfurterModule");
let QuoteModule = class QuoteModule {
};
QuoteModule = __decorate([
    (0, common_1.Module)({
        imports: [ProviderSelectorModule_1.ProviderSelectorModule, ExchangeRateModule_1.ExchangeRateModule, FrankfurterModule_1.FrankfurterModule],
        providers: [QuoteService_1.QuoteService, ProviderSelectorService_1.ProviderSelectorService, {
                provide: ProviderSelectorService_1.ProviderSelectorService,
                useFactory: (...providers) => new ProviderSelectorService_1.ProviderSelectorService(providers),
                inject: [ExchangeRateService_1.ExchangeRateService, FrankfurterService_1.FrankfurterService]
            }],
        controllers: [QuoteController_1.QuoteController]
    })
], QuoteModule);
exports.QuoteModule = QuoteModule;
//# sourceMappingURL=QuoteModule.js.map