import { 
  ValidationArguments, 
  ValidatorConstraint, 
  ValidatorConstraintInterface 
} from 'class-validator'


@ValidatorConstraint({ name: 'IsValidCurrencyCode', async: false })
export class IsValidCurrencyCode implements ValidatorConstraintInterface {

  validate(value: string, args: ValidationArguments) {
    return value.length !=3 ? false : true
  }

  defaultMessage() {
    return 'Currency code ($value) is too short or too long!';
  }
}


