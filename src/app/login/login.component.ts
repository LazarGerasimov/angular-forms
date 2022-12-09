import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('loginForm') loginForm!: NgForm;


  handleFormSubmit(form: NgForm ): void {
    if (form.invalid) {
      return;
    }
    const value: {email: string; password: string;} = form.value;
    form.setValue({email: '', password: ''});
    console.log(value);
  }
}
