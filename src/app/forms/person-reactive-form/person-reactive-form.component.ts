import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { asyncNameValidator, validateName } from './person.validators';
import { HttpClient } from '@angular/common/http';

interface Person {
  name: string;
  surname: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}

// lazy way of typing forms
interface PersonForm {
  name: FormControl<string>;
  surname: FormControl<string>;
  age: FormControl<number>;
  email: FormControl<string>;
  phone: FormControl<string>;
  address: FormControl<string>;
}

// dynamic form group based on given interface
type ModelFormGroup<T> = {
  [K in keyof T]: FormControl<T[K]>;
};

const baseValidators: ValidatorFn[] = [Validators.required];

@Component({
  selector: 'app-person-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './person-reactive-form.component.html',
  styleUrl: './person-reactive-form.component.css',
})
export class PersonReactiveFormComponent implements OnInit {
  private readonly http = inject(HttpClient);

  public form = new FormGroup<ModelFormGroup<Person>>({
    name: new FormControl('Max', {
      validators: [...baseValidators, validateName(['Luke', 'Max'])],
      asyncValidators: [asyncNameValidator(this.http)],
      nonNullable: true,
    }),
    surname: new FormControl('Mustermann', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    age: new FormControl(0, {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    phone: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    address: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  ngOnInit(): void {
    this.form.get('name')?.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.form.patchValue({
      name: 'Daniel',
    });
  }

  toggleNameRequired(): void {
    const nameControl = this.form.controls['name'];

    if (nameControl.hasValidator(Validators.required)) {
      nameControl.removeValidators([Validators.required]);
    } else {
      nameControl.addValidators([Validators.required]);
    }
    nameControl.updateValueAndValidity();
  }

  resetForm() {
    this.form.reset();
  }

  submit() {
    console.log(this.form.getRawValue());
  }
}
