import { ProviderSelectorService } from '../providerSelector/ProviderSelectorService'
import { ProviderSelectorModule } from '../providerSelector/ProviderSelectorModule'
import { ExchangeRateService } from '../apiProviders/exchangerate/ExchangeRateService'
import { FrankfurterService } from '../apiProviders/frankfurter/FrankfurterService'
import { ExchangeRateModule } from '../apiProviders/exchangerate/ExchangeRateModule'
import { FrankfurterModule } from '../apiProviders/frankfurter/FrankfurterModule'
import { QuoteController } from './QuoteController'
import { QuoteService } from './QuoteService'
import { CacheModule, Module } from '@nestjs/common'

@Module({
    imports: [
        ProviderSelectorModule, 
        ExchangeRateModule, 
        FrankfurterModule, 
        CacheModule.register()
    ],
    
    providers: [
        QuoteService, 
        ProviderSelectorService,  
        {
        provide: ProviderSelectorService,
        useFactory: (...providers) => new ProviderSelectorService(providers),
        inject: [ExchangeRateService, FrankfurterService]
    }],

    controllers: [QuoteController]
})
export class QuoteModule{}