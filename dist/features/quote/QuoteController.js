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
var QuoteController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteController = void 0;
const common_1 = require("@nestjs/common");
const QuoteService_1 = require("./QuoteService");
const QuoteDto_1 = require("./QuoteDto");
let QuoteController = QuoteController_1 = class QuoteController {
    constructor(quotesService, cacheManager) {
        this.quotesService = quotesService;
        this.cacheManager = cacheManager;
        this.logger = new common_1.Logger(QuoteController_1.name);
    }
    async getQuote(qouteRequest) {
        const from_currency = qouteRequest.from_currency_code.toUpperCase();
        const to_currency = qouteRequest.to_currency_code.toUpperCase();
        const amount = qouteRequest.amount;
        const chacheKey = `${from_currency}${to_currency}${amount}`;
        this.logger.log(`Receive request to exchange with ${from_currency} base to ${to_currency}`);
        const cachedValue = await this.cacheManager.get(chacheKey);
        if (cachedValue) {
            this.logger.log('Returning value from cache');
            return cachedValue;
        }
        const quoteResponse = await this.quotesService.findQuote(from_currency, to_currency, amount);
        await this.cacheManager.set(chacheKey, quoteResponse, { ttl: 120000 });
        return quoteResponse;
    }
};
__decorate([
    (0, common_1.Get)('/quote'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuoteDto_1.QuoteDto]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "getQuote", null);
QuoteController = QuoteController_1 = __decorate([
    (0, common_1.Controller)('api'),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [QuoteService_1.QuoteService, Object])
], QuoteController);
exports.QuoteController = QuoteController;
//# sourceMappingURL=QuoteController.js.map