import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from '../app.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  control: any;
  constructor(private formBuilder: FormBuilder, private service: ConnectionService, private tokenService: TokenService, private router: Router) {
    this.loginForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
    });
    this.control = this.loginForm.controls;
  }

  ngOnInit() {
  }

  onSubmit() {
    let user = {
      email: this.control.email.value,
      password: this.control.password.value
    }
    this.service.login(JSON.stringify(user)).subscribe((response:any)=>{
        this.tokenService.saveToken(response.token);
        this.router.navigateByUrl('/protected');
    });
  }

}
