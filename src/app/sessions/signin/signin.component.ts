import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from '../session.service';
// export class User {
// constructor(
//   public userName: string,
//   public password: string
// ) {}
// }

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

    // user: User;
    signinForm: FormGroup;
    signinError = 'invalid credentials';
    // tslint:disable-next-line: no-inferrable-types
    isLogin: boolean = false;

  constructor(private  builder: FormBuilder,
              private  auth: AuthService,
              private  router: Router,
              private  sessionService: SessionService,
              ) {}

  ngOnInit() {
    this.inItForm();
  }
  handleLogin() {
    this.sessionService.onLogin(this.signinForm.value).subscribe((response: any)=>{
      if(this.auth.authenticate(response)) {
        this.isLogin = false;
        this.router.navigate(['dashboard']); 
      }
      else{
        this.router.navigateByUrl('/'); 
      }}), err => {
        console.log(err);
      }
  }

  inItForm() {
    this.signinForm = this.builder.group({
      userNameOrEmail: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
