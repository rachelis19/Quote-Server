import httpExchangeRateInstance from '../../../core/config/httpExchangeRateInstnace'
import { ExchangeRateService } from './ExchangeRateService'
import { ConfigModule } from '@nestjs/config'
import { Module } from '@nestjs/common'



@Module({
    providers: [ExchangeRateService, httpExchangeRateInstance],
    exports: [ExchangeRateService]
})
export class ExchangeRateModule{}