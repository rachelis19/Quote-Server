import { IQuoteProvider } from '../../../core/interfaces/IQuoteProvider'
import { QuoteResponse } from '../../../core/responses/QuoteResponse'
import { Inject, Injectable } from '@nestjs/common'
import { AxiosInstance } from 'axios'

@Injectable()
export class ExchangeRateService implements IQuoteProvider{

    constructor(@Inject('exchange-http') private readonly http: AxiosInstance){}

    public async getQuote(from_currency_code: string, to_currency_code: string): Promise<any> {
        const response = await this.http.get(`latest/${from_currency_code}`)
        
        const rates = response.data['conversion_rates']
        
        const quote: number = rates[to_currency_code]

        return {quote: quote, providerName: this.getName()}
    }

    public async currenciesSupported(): Promise<{}>{
        const {data} = await this.http.get('codes')
       
        return  {providerName: this.getName(), currencies:  data.supported_codes.map(codes => codes[0])}
    }

    public getName(): string {
        return 'ExchangeRate-API'
    }
}