import { Injectable, Logger } from '@nestjs/common'
import { QuoteResponse } from '../../core/responses/QuoteResponse'
import exchangeRateNormalizer from '../../core/utils/exchangeRateNormalizer'
import eexchangeRateNormalizer from '../../core/utils/exchangeRateNormalizer'
import { ProviderSelectorService } from '../providerSelector/ProviderSelectorService'


@Injectable()
export class QuoteService{

    private readonly logger = new Logger(QuoteService.name)

    constructor(private readonly providerSelectorService: ProviderSelectorService){}
    
    public async findQuote(from_currency_code, to_currency_code, amount){

        const providers = await this.providerSelectorService.select(
            from_currency_code, 
            to_currency_code, 
            amount
        )

        const quotesReponse = await this.requestQuotesFromProviders(
            from_currency_code, 
            to_currency_code, 
            providers
        )

        this.logger.log('Choosing the best exchange rate')

        const bestQuotesProvider = quotesReponse.sort(
            (quoteResponse_1, quoteResponse_2)=> quoteResponse_1.quote - quoteResponse_2.quote
        )[0]
        
        const normalizedExchangeRate = exchangeRateNormalizer(bestQuotesProvider.quote)

        return new QuoteResponse()
                    .setCurrencyCode(to_currency_code)
                    .setAmount(Math.round(amount * normalizedExchangeRate))
                    .setExchangeRate(normalizedExchangeRate)
                    .setProviderName(bestQuotesProvider.providerName)
                    .to_json()
          
    }

    protected async requestQuotesFromProviders(from_currency_code, to_currency_code, proivders){
        this.logger.log('Requesting quotes from providers')

        const callables = proivders.map(
            provider => provider.getQuote(from_currency_code, to_currency_code)
        )

        const settled: any = await Promise.allSettled(callables)
        
        const fulfilled = settled.filter(promise => promise.status == 'fulfilled')

        return fulfilled.map(promise => promise.value)
    }

}