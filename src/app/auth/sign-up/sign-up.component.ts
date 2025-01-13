import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  ngOnInit(): void {
    this.signupForm.valueChanges.subscribe(() => {
      if (this.submitted) {
        Object.keys(this.signupForm.controls).forEach(key => {
          const control = this.signupForm.get(key);
          if (control) {
            control.markAsTouched();
          }
        });
      }
    });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    }

    return null;
  }

  onSubmit(): void {
    this.submitted = true;
    
    Object.keys(this.signupForm.controls).forEach(key => {
      const control = this.signupForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      // Handle signup logic here
    }
  }
}