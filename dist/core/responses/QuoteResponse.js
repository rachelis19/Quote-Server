"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteResponse = void 0;
const uuid_1 = require("uuid");
class QuoteResponse {
    constructor() {
        this.AMOUNT = 'amount';
        this.CURRENCY_CODE = 'currency_code';
        this.PROVIDER_NAME = 'provider_name';
        this.EXCHANGE_RATE = 'exchange_rate';
        this.data = {};
    }
    to_json() {
        return JSON.stringify({ 'data': this.data, 'id': (0, uuid_1.v4)() });
    }
    setExchangeRate(value) {
        this.data[this.EXCHANGE_RATE] = value;
        return this;
    }
    setAmount(value) {
        this.data[this.AMOUNT] = value;
        return this;
    }
    setProviderName(value) {
        this.data[this.PROVIDER_NAME] = value;
        return this;
    }
    setCurrencyCode(value) {
        this.data[this.CURRENCY_CODE] = value;
        return this;
    }
}
exports.QuoteResponse = QuoteResponse;
//# sourceMappingURL=QuoteResponse.js.map