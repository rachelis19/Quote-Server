import { ProviderSelectorService } from '../providerSelector/ProviderSelectorService';
export declare class QuoteService {
    private readonly providerSelectorService;
    private readonly logger;
    constructor(providerSelectorService: ProviderSelectorService);
    findQuote(from_currency_code: any, to_currency_code: any, amount: any): Promise<string>;
    protected requestQuotesFromProviders(from_currency_code: any, to_currency_code: any, proivders: any): Promise<any>;
}
