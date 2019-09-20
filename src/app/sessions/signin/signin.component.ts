import { Component, OnInit } from '@angular/core';
import { UserNames } from './userNames';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
export class User{
constructor(
  username: string,
  password: string
){}
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {
  users: UserNames[] = [
    {
    username: 'rajveer',
    password: 'singh'
    }]

    user: User;
    signinForm: FormGroup;
    signinError: 'invalid credentials';
    isLogin: Boolean = false;

  constructor(private readonly rote: Route,
    private readonly builder: FormBuilder) { }

  ngOnInit() {
    this.inItForm();
  }
  signing(){

  }
  inItForm(){
    this.signinForm = this.builder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

}
