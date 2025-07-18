import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'forms',
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {
  // name = new FormControl('Ajibola');
  // password = new FormControl('3456789');
  // email = new FormControl('ajibola@gmail.com');

  // getValue() {
  //   this.name.value;
  //   this.password.value;
  //   this.email.value;
  // }
  // setValue() {
  //   this.name.setValue('Alim');
  //   this.password.setValue('09876543');
  //   this.email.setValue('Alim@gmail.com');
  // }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [Validators.required, Validators.maxLength(30)]),
  });
  submitData() {
    this.profileForm.value;
  }
  setValues() {
    this.profileForm.setValue({
      name: 'Ajibola',
      password: '12345',
      email: 'ajibola@test.com',
    });
  }
  get name(){
    return this.profileForm.get('name')
  }
  get password(){
    return this.profileForm.get('name')
  }
  get email(){
    return this.profileForm.get('name')
  }

  addUser(value: string){

  };
}
