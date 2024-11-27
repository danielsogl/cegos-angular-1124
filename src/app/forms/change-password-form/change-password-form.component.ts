import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatchPasswordValidatorDirective } from '../match-password-validator.directive';

@Component({
  selector: 'app-change-password-form',
  imports: [FormsModule, MatchPasswordValidatorDirective],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.css',
})
export class ChangePasswordFormComponent {
  public password = '';
  public confirmPassword = '';
}
