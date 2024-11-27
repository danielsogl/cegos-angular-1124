import { Component } from '@angular/core';

interface Person {
  name: string;
  surName: string;
  age: number;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-person-template-form',
  imports: [],
  templateUrl: './person-template-form.component.html',
  styleUrl: './person-template-form.component.css',
})
export class PersonTemplateFormComponent {}
