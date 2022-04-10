import { IQuoteProvider } from '../../../core/interfaces/IQuoteProvider';
import { AxiosInstance } from 'axios';
export declare class FrankfurterService implements IQuoteProvider {
    private readonly http;
    private readonly logger;
    constructor(http: AxiosInstance);
    getQuote(from_currency_code: string, to_currency_code: string, amount: number): Promise<{}>;
    currenciesSupported(): Promise<{}>;
    getName(): string;
}
