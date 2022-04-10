import { IQuoteProvider } from '../../../core/interfaces/IQuoteProvider';
import { AxiosInstance } from 'axios';
export declare class ExchangeRateService implements IQuoteProvider {
    private readonly http;
    constructor(http: AxiosInstance);
    getQuote(from_currency_code: string, to_currency_code: string, amount: number): Promise<any>;
    currenciesSupported(): Promise<{}>;
    getName(): string;
}
