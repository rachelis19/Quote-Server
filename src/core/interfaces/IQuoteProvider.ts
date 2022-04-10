export interface IQuoteProvider {
    getQuote(from_currency_code:string, to_currency_code:string): Promise<any>
    
    currenciesSupported(): Promise<any>

    getName(): string
} 