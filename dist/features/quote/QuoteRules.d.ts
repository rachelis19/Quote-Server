import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class IsValidCurrencyCode implements ValidatorConstraintInterface {
    validate(value: string, args: ValidationArguments): boolean;
    defaultMessage(): string;
}
