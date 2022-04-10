import { Controller, Get, Logger, Query, Req, UsePipes, ValidationPipe} from '@nestjs/common'
import { QuoteService } from './QuoteService'
import { QuoteDto } from './QuoteDto'


@Controller('api')
export class QuoteController {
    
    private readonly logger = new Logger(QuoteController.name)

    constructor(private quotesService: QuoteService){}

    @Get('/quote')
    public async getQuote(@Query() qouteRequest: QuoteDto){
        
        this.logger.log(
        `Receive request to exchange with ${qouteRequest.from_currency_code} base to ${qouteRequest.to_currency_code}` 
        )

        return await this.quotesService.findQuote(
            qouteRequest.from_currency_code.toUpperCase(),
            qouteRequest.to_currency_code.toUpperCase(),
            qouteRequest.amount
        )
    }

}


