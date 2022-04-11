import { CACHE_MANAGER, Controller, Get, Logger, Query,Inject,} from '@nestjs/common'
import { QuoteService } from './QuoteService'
import { QuoteDto } from './QuoteDto'
import { Cache } from 'cache-manager'


@Controller('api')
export class QuoteController {
    
    private readonly logger = new Logger(QuoteController.name)

    constructor(
        private quotesService: QuoteService, 
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ){}

    @Get('/quote')
    public async getQuote(@Query() qouteRequest: QuoteDto){
         
        const from_currency = qouteRequest.from_currency_code.toUpperCase()

        const to_currency = qouteRequest.to_currency_code.toUpperCase()

        const amount = qouteRequest.amount

        const chacheKey = `${from_currency}${to_currency}${amount}`
    
        this.logger.log(
        `Receive request to exchange with ${from_currency} base to ${to_currency}` 
        )

        const cachedValue = await this.cacheManager.get(chacheKey)
        
        if (cachedValue){
            
           this.logger.log('Returning value from cache')
           return cachedValue
        }

        const quoteResponse = await this.quotesService.findQuote(
           from_currency,
            to_currency,
            amount
        )

        await this.cacheManager.set(chacheKey, quoteResponse, { ttl: 120000 });

        return quoteResponse
    }

}


