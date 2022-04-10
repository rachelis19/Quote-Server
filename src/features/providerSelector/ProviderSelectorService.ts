import { Injectable, Logger } from '@nestjs/common'
import { IQuoteProvider } from '../../core/interfaces/IQuoteProvider'


@Injectable()
export class ProviderSelectorService{
    
    private readonly logger = new Logger(ProviderSelectorService.name)


    constructor(private readonly quoteProviders: IQuoteProvider[]){}
    
    public async select(from_currency_code, to_currency_code, amount){
        const providersSupportedCurrencies = await this.withSupportedCurrencies(from_currency_code, to_currency_code)

    
         const providerSelectedBasedOnAmount = this.withAmountRule(
            amount, 
            from_currency_code, 
            providersSupportedCurrencies
        )

        const selectedProivders = providerSelectedBasedOnAmount.length > 0 ? 
                                 providerSelectedBasedOnAmount : providersSupportedCurrencies

        const names = selectedProivders.map(proivder=> proivder.providerName)  

        return this.providers(names)       
        
    }

    public async withSupportedCurrencies(from_currency_code, to_currency_code){
        
        this.logger.log(`Selecting providers who supportes [${from_currency_code}, ${to_currency_code}]`)

        const callables = this.quoteProviders.map(provider =>  provider.currenciesSupported())

        const supportedCurrencies = await Promise.all(callables)

        return supportedCurrencies.filter(
            item => item.currencies.includes(to_currency_code) && item.currencies.includes(from_currency_code)
        )
    }

    public withAmountRule(amount: number, from_currency_code: string, proivders: any): []{

        return proivders.filter(
            setProivder => setProivder.providerName == 'Frankfurter' && amount > 1000 && from_currency_code == 'USD'
        )
    }

    public providers(names: string[]){
        return this.quoteProviders.filter(provider => names.includes(provider.getName()))
    }
}