import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  telephoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d{9}$/), // Validates 9-digit Georgian phone numbers (without +995)
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
  ]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    firstName: this.firstNameFormControl,
    lastName: this.lastNameFormControl,
    telephone: this.telephoneFormControl,
    email: this.emailFormControl,
    password: this.passwordFormControl,
    confirmPassword: this.confirmPasswordFormControl,
  });
}
