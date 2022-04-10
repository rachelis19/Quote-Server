import {v4 as uuidv4} from 'uuid'

export class QuoteResponse{

    AMOUNT = 'amount'
    CURRENCY_CODE = 'currency_code'
    PROVIDER_NAME = 'provider_name'
    EXCHANGE_RATE = 'exchange_rate'


    private data: {}

    constructor(){
        this.data = {}
    }
     
     public to_json(){

          return JSON.stringify({'data': this.data, 'id': uuidv4()})
     }

     public setExchangeRate(value: number){
         this.data[this.EXCHANGE_RATE] = value

         return this
     }


    public setAmount(value: number){
        this.data[this.AMOUNT] = value

        return this
    }


    public setProviderName(value: string){
        this.data[this.PROVIDER_NAME] = value

        return this
    }


    public setCurrencyCode(value: string){
        this.data[this.CURRENCY_CODE] = value

        return this
    }
}