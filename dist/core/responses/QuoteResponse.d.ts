export declare class QuoteResponse {
    AMOUNT: string;
    CURRENCY_CODE: string;
    PROVIDER_NAME: string;
    EXCHANGE_RATE: string;
    private data;
    constructor();
    to_json(): string;
    setExchangeRate(value: number): this;
    setAmount(value: number): this;
    setProviderName(value: string): this;
    setCurrencyCode(value: string): this;
}
