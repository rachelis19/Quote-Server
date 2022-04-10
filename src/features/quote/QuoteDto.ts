import {IsValidCurrencyCode} from './QuoteRules'
import { IsInt, IsNotEmpty, Validate } from 'class-validator'


export class QuoteDto{
     
    @Validate(IsValidCurrencyCode)
    @IsNotEmpty()
    from_currency_code: string
    
    @Validate(IsValidCurrencyCode)
    @IsNotEmpty()
    to_currency_code: string
    
    @IsNotEmpty()
    @IsInt()
    amount: number
}