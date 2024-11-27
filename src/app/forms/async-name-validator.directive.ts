import { HttpClient } from '@angular/common/http';
import { Directive, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';

@Directive({
  selector: 'input[type="text"][asyncNameValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncNameValidatorDirective,
      multi: true,
    },
  ],
})
export class AsyncNameValidatorDirective implements AsyncValidator {
  private http = inject(HttpClient);

  validate(
    control: AbstractControl<string>
  ): Observable<ValidationErrors | null> {
    const value = control.value;

    return this.http
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
  }
}

export interface StarWarsPersonResponse {
  count: number;
  next?: any;
  previous?: any;
  results: StarWarsPerson[];
}

interface StarWarsPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: any[];
  starships: any[];
  created: string;
  edited: string;
  url: string;
}
