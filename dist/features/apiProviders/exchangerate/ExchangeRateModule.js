"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExchangeRateModule = void 0;
const httpExchangeRateInstnace_1 = require("../../../core/config/httpExchangeRateInstnace");
const ExchangeRateService_1 = require("./ExchangeRateService");
const common_1 = require("@nestjs/common");
let ExchangeRateModule = class ExchangeRateModule {
};
ExchangeRateModule = __decorate([
    (0, common_1.Module)({
        providers: [ExchangeRateService_1.ExchangeRateService, httpExchangeRateInstnace_1.default],
        exports: [ExchangeRateService_1.ExchangeRateService]
    })
], ExchangeRateModule);
exports.ExchangeRateModule = ExchangeRateModule;
//# sourceMappingURL=ExchangeRateModule.js.map