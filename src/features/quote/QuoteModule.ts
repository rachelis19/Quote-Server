import { QuoteController } from './QuoteController'
import { QuoteService } from './QuoteService'
import { Module } from '@nestjs/common'
import { ProviderSelectorService } from '../providerSelector/ProviderSelectorService'
import { ProviderSelectorModule } from '../providerSelector/ProviderSelectorModule'
import { IQuoteProvider } from '../../core/interfaces/IQuoteProvider'
import { ExchangeRateService } from '../apiProviders/exchangerate/ExchangeRateService'
import { FrankfurterService } from '../apiProviders/frankfurter/FrankfurterService'
import { ExchangeRateModule } from '../apiProviders/exchangerate/ExchangeRateModule'
import { FrankfurterModule } from '../apiProviders/frankfurter/FrankfurterModule'

@Module({
    imports: [ProviderSelectorModule, ExchangeRateModule, FrankfurterModule],
    providers: [QuoteService, ProviderSelectorService,  {
        provide: ProviderSelectorService,
        useFactory: (...providers) => new ProviderSelectorService(providers),
        inject: [ExchangeRateService, FrankfurterService]
     }],
    controllers: [QuoteController]
})
export class QuoteModule{}