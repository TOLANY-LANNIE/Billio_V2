import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.resetForm.valueChanges.subscribe(() => {
      if (this.submitted) {
        Object.keys(this.resetForm.controls).forEach(key => {
          const control = this.resetForm.get(key);
          if (control) {
            control.markAsTouched();
          }
        });
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    
    if (this.resetForm.valid) {
      console.log(this.resetForm.value);
      // Handle password reset logic here
    }
  }
}