"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const ExchangeRateModule_1 = require("./features/apiProviders/exchangerate/ExchangeRateModule");
const FrankfurterModule_1 = require("./features/apiProviders/frankfurter/FrankfurterModule");
const QuoteModule_1 = require("./features/quote/QuoteModule");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const ProviderSelectorModule_1 = require("./features/providerSelector/ProviderSelectorModule");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [QuoteModule_1.QuoteModule,
            ExchangeRateModule_1.ExchangeRateModule,
            FrankfurterModule_1.FrankfurterModule,
            ProviderSelectorModule_1.ProviderSelectorModule,
            config_1.ConfigModule.forRoot({ isGlobal: true })],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map