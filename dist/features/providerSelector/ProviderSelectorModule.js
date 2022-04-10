"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderSelectorModule = void 0;
const ExchangeRateService_1 = require("../apiProviders/exchangerate/ExchangeRateService");
const ExchangeRateModule_1 = require("../apiProviders/exchangerate/ExchangeRateModule");
const FrankfurterService_1 = require("../apiProviders/frankfurter/FrankfurterService");
const FrankfurterModule_1 = require("../apiProviders/frankfurter/FrankfurterModule");
const httpExchangeRateInstnace_1 = require("../../core/config/httpExchangeRateInstnace");
const httpFrankfurterInstance_1 = require("../../core/config/httpFrankfurterInstance");
const ProviderSelectorService_1 = require("./ProviderSelectorService");
const common_1 = require("@nestjs/common");
let ProviderSelectorModule = class ProviderSelectorModule {
};
ProviderSelectorModule = __decorate([
    (0, common_1.Module)({
        imports: [ExchangeRateModule_1.ExchangeRateModule, FrankfurterModule_1.FrankfurterModule],
        providers: [
            FrankfurterService_1.FrankfurterService,
            ExchangeRateService_1.ExchangeRateService,
            httpExchangeRateInstnace_1.default,
            httpFrankfurterInstance_1.default,
            {
                provide: ProviderSelectorService_1.ProviderSelectorService,
                useFactory: (...providers) => new ProviderSelectorService_1.ProviderSelectorService(providers),
                inject: [ExchangeRateService_1.ExchangeRateService, FrankfurterService_1.FrankfurterService]
            }
        ],
        exports: [ProviderSelectorService_1.ProviderSelectorService]
    })
], ProviderSelectorModule);
exports.ProviderSelectorModule = ProviderSelectorModule;
//# sourceMappingURL=ProviderSelectorModule.js.map