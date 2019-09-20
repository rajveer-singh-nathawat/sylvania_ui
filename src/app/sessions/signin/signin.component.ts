import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
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

  constructor(private readonly builder: FormBuilder
              ) {}

  ngOnInit() {
    this.inItForm();
  }
  signin() {
    this.user = this.signinForm.value;
    if (this.user.userName === 'rajveer' && this.user.password === 'singh') {
      this.isLogin = false;
      localStorage.setItem('name', this.user.userName);
      //   this.signinForm.controls['password'].setValue(btoa(this.signinForm.controls['password'].value));
      //  this.sessionsService.signin(this.signinForm.value);
      // this.router.navigateByUrl('/service-user/profile');
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
