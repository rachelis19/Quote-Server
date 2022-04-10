import { ConfigService } from '@nestjs/config'
import axios from 'axios'



export default {
    provide: 'exchange-http',
    useFactory: (configService: ConfigService) => axios.create({ 

        baseURL: `https://v6.exchangerate-api.com/v6/${configService.get<string>('EXCHANGE_RATE_API_KEY')}/`,

    }),
    inject: [ConfigService]
}
