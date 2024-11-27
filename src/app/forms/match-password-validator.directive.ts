import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: 'form[matchPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordValidatorDirective,
      multi: true,
    },
  ],
})
export class MatchPasswordValidatorDirective implements Validator {
  validate(control: FormGroup): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
