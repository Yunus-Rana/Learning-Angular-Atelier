import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-reactive-form-ex',
  styleUrl: './reactive-form-ex.css',
  templateUrl: './reactive-form-ex.html',
})
export class ReactiveFormEx {

  userForm: FormGroup = new FormGroup({
    custId: new FormControl(0),
    name: new FormControl('', Validators.required),
    mobileNo: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      console.log('API Payload:', formValue);
    }
  }
}