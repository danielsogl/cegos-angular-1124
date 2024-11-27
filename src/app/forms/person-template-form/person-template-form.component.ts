import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormErrorComponent } from '../form-error/form-error.component';
import { NameValidatorDirective } from '../name-validator.directive';
import { AsyncNameValidatorDirective } from '../async-name-validator.directive';

interface Person {
  name: string;
  surname: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-person-template-form',
  imports: [
    FormsModule,
    FormErrorComponent,
    NameValidatorDirective,
    AsyncNameValidatorDirective,
  ],
  templateUrl: './person-template-form.component.html',
  styleUrl: './person-template-form.component.css',
})
export class PersonTemplateFormComponent {
  public person: Person = {
    name: '',
    surname: '',
    age: 0,
    email: '',
    phone: '',
    address: '',
  };

  submit() {
    console.log(this.person);
  }
}
