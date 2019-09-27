import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
export class User {
constructor(
  public userName: string,
  public password: string
) {}
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

    user: User;
    signinForm: FormGroup;
    signinError: 'invalid credentials';
    isLogin: any = false;

  constructor(private readonly builder: FormBuilder,
              private readonly auth: AuthService,
              private readonly router: Router
              ) {}

  ngOnInit() {
    this.inItForm();
  }
  handleLogin() {
    this.user = this.signinForm.value;
    if (this.auth.authenticate(this.user.userName, this.user.password)) {
      this.router.navigate(['dashboard']);
      this.isLogin = false;
        } else {
      this.isLogin = true;
    }
  }

  inItForm() {
    this.signinForm = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
