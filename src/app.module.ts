import { ExchangeRateModule } from './features/apiProviders/exchangerate/ExchangeRateModule'
import { FrankfurterModule } from './features/apiProviders/frankfurter/FrankfurterModule'
import { QuoteModule } from './features/quote/QuoteModule'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { ProviderSelectorModule } from './features/providerSelector/ProviderSelectorModule'


@Module({
  imports: [QuoteModule, 
            ExchangeRateModule,
            FrankfurterModule,
            ProviderSelectorModule,
            ConfigModule.forRoot({ isGlobal: true})],

})
export class AppModule {}
