import { sharedImports } from './../shared/shared.module';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [ReactiveFormsModule,...sharedImports],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.scss'
})
export class FormControlComponent {
 userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
email:new FormControl('',[Validators.required,Validators.email]),
phone:new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern(/^03[0-9]+$/)]),
address:new FormControl('',[Validators.required,Validators.maxLength(60)])
  });
  get name() {
  return this.userForm.get('name');
}

get email() {
  return this.userForm.get('email');
}

get phone() {
  return this.userForm.get('phone');
}

get address() {
  return this.userForm.get('address');
}

  validatedata(){
if(this.userForm.valid){
  alert('Succesful Attempt')
}
else{
  this.userForm.markAllAsTouched()
}
  }
}
