import { QuoteService } from './QuoteService';
import { QuoteDto } from './QuoteDto';
export declare class QuoteController {
    private quotesService;
    private readonly logger;
    constructor(quotesService: QuoteService);
    getQuote(qouteRequest: QuoteDto): Promise<string>;
}
