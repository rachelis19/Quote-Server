
import { ExchangeRateService } from '../apiProviders/exchangerate/ExchangeRateService'
import { ExchangeRateModule } from '../apiProviders/exchangerate/ExchangeRateModule'
import { FrankfurterService } from '../apiProviders/frankfurter/FrankfurterService'
import { FrankfurterModule } from '../apiProviders/frankfurter/FrankfurterModule'
import httpExchangeRateInstnace from '../../core/config/httpExchangeRateInstnace'
import httpFrankfurterInstance from '../../core/config/httpFrankfurterInstance'
import { ProviderSelectorService } from './ProviderSelectorService'
import { Module } from '@nestjs/common'


@Module({
    imports: [ExchangeRateModule, FrankfurterModule],
    providers: [
        FrankfurterService, 
        ExchangeRateService,  
        httpExchangeRateInstnace,
        httpFrankfurterInstance,
       {
          provide: ProviderSelectorService,
          useFactory: (...providers) => new ProviderSelectorService(providers),
          inject: [ExchangeRateService, FrankfurterService]
       }
          
    ],

    exports: [ProviderSelectorService]
})
export class ProviderSelectorModule{}