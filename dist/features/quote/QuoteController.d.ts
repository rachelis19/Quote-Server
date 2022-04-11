import { QuoteService } from './QuoteService';
import { QuoteDto } from './QuoteDto';
import { Cache } from 'cache-manager';
export declare class QuoteController {
    private quotesService;
    private cacheManager;
    private readonly logger;
    constructor(quotesService: QuoteService, cacheManager: Cache);
    getQuote(qouteRequest: QuoteDto): Promise<unknown>;
}
