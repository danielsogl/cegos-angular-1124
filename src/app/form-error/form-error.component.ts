import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  imports: [],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css',
})
export class FormErrorComponent {
  @Input({ required: true }) formErrors: ValidationErrors | null = null;
  @Input({ required: true }) label = '';
}
