import httpFrankfuterInstance from '../../../core/config/httpFrankfurterInstance'
import { FrankfurterService } from './FrankfurterService'
import { Module } from '@nestjs/common'


@Module({
    providers: [FrankfurterService, httpFrankfuterInstance],
    exports: [FrankfurterService]
})
export class FrankfurterModule{}