import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class CurrencyTransform implements PipeTransform {
    transform(value: string, metadata: ArgumentMetadata): string;
}
