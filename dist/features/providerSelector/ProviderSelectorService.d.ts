import { IQuoteProvider } from '../../core/interfaces/IQuoteProvider';
export declare class ProviderSelectorService {
    private readonly quoteProviders;
    private readonly logger;
    constructor(quoteProviders: IQuoteProvider[]);
    select(from_currency_code: any, to_currency_code: any, amount: any): Promise<IQuoteProvider[]>;
    withSupportedCurrencies(from_currency_code: any, to_currency_code: any): Promise<any[]>;
    withAmountRule(amount: number, from_currency_code: string, proivders: any): [];
    providers(names: string[]): IQuoteProvider[];
}
