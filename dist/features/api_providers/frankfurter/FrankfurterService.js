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
var FrankfurterService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrankfurterService = void 0;
const common_1 = require("@nestjs/common");
let FrankfurterService = FrankfurterService_1 = class FrankfurterService {
    constructor(http) {
        this.http = http;
        this.logger = new common_1.Logger(FrankfurterService_1.name);
    }
    async getQuote(from_currency_code, to_currency_code, amount) {
        const response = await this.http.get('latest', { params: { 'from': from_currency_code } });
        console.log(response);
        const rates = response.data['rates'];
        const quote = rates[to_currency_code];
        return { quote: quote, providerName: this.getName() };
    }
    async currenciesSupported() {
        const { data } = await this.http.get('currencies');
        return { providerName: this.getName(), currencies: Object.keys(data) };
    }
    getName() {
        return 'Frankfurter';
    }
};
FrankfurterService = FrankfurterService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('http')),
    __metadata("design:paramtypes", [Function])
], FrankfurterService);
exports.FrankfurterService = FrankfurterService;
//# sourceMappingURL=FrankfurterService.js.map