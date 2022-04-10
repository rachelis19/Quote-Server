import { ConfigService } from '@nestjs/config';
declare const _default: {
    provide: string;
    useFactory: (configService: ConfigService) => import("axios").AxiosInstance;
    inject: (typeof ConfigService)[];
};
export default _default;
