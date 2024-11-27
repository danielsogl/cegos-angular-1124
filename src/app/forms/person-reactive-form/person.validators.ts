import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  AsyncValidatorFn,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { StarWarsPersonResponse } from '../async-name-validator.directive';

export function validateName(
  validNames: string[] = ['Luke', 'Leia', 'Han', 'Chewbacca', 'Yoda', 'Picard']
): ValidatorFn {
  return (control: AbstractControl<string>): ValidationErrors | null => {
    const value = control.value;
    const isValid = validNames.includes(value);
    return isValid ? null : { invalidName: true };
  };
}

export function asyncNameValidator(http: HttpClient): AsyncValidatorFn {
  return (
    control: AbstractControl<string>
  ): Observable<ValidationErrors | null> => {
    const value = control.value;

    return http
      .get<StarWarsPersonResponse>(`https://swapi.dev/api/people`, {
        params: {
          search: value,
        },
      })
      .pipe(
        map(({ count }) => {
          return count === 0 ? { invalidName: true } : null;
        })
      );
  };
}
