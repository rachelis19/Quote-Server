import { IQuoteProvider } from '../../../core/interfaces/IQuoteProvider'
import { QuoteResponse } from 'src/core/responses/QuoteResponse'
import { Inject, Injectable, Logger } from '@nestjs/common'
import { AxiosInstance } from 'axios'



@Injectable()
export class FrankfurterService implements IQuoteProvider{

    private readonly logger = new Logger(FrankfurterService.name)

    constructor(@Inject('http') private readonly http: AxiosInstance){}

    public async getQuote(from_currency_code: string, to_currency_code: string): Promise<{}> {
        const response = await this.http.get('latest' ,{params: {'from': from_currency_code}})

        const rates = response.data['rates']

        const quote: number = rates[to_currency_code]

        return {quote: quote, providerName: this.getName()}

    }

    public async currenciesSupported(): Promise<{}> {
        const {data} = await this.http.get('currencies')
         
        return {providerName: this.getName(), currencies: Object.keys(data)}
    }

    public getName(): string {
        return  'Frankfurter'
    }

}
