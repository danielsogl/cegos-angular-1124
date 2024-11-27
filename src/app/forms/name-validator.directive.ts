import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

const validNames = ['Luke', 'Leia', 'Han', 'Chewbacca', 'Yoda', 'Picard'];

@Directive({
  // scoped because of type string
  selector: 'input[type="text"][nameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi: true,
    },
  ],
})
export class NameValidatorDirective implements Validator {
  validate(control: AbstractControl<string>): ValidationErrors | null {
    const value = control.value;
    const isValid = validNames.includes(value);
    return isValid ? null : { invalidName: true };
  }
}
