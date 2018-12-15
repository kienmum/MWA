import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ConnectionService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  control: any;
  pass_control: any;
  
  constructor(private formBuilder: FormBuilder, private service: ConnectionService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      'full_name': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'passwords': this.formBuilder.group({
        'password': ['', Validators.required],
        'confirm_password': ['', Validators.required],
      }, {validator: this.matchingPasswords})
    });
    this.control = this.signupForm.controls;
    this.pass_control = this.control.passwords.controls;
  }

  ngOnInit() {
  }

  matchingPasswords(c: AbstractControl): { invalid: boolean }{
    if (c.get('password').value !== c.get('confirm_password').value) {
      return {invalid: true};
    }
  }

  onSubmit() {
    let user = {
      fullname: this.control.full_name.value,
      email: this.control.email.value,
      password: this.pass_control.password.value
    }
    this.service.signup(JSON.stringify(user))
      .subscribe( (response) => {
          console.log(response);
          this.router.navigateByUrl('/login');
      });
  }

}
