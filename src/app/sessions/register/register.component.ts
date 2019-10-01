import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export class RegisterData {
  constructor(
    fullName: string,
    userName: string,
    password: string,
    confirmPassword: string,
    email: string,
    phoneNo: string,
    status: string,
    image: string
  ){}
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private readonly builder: FormBuilder,
              private readonly router: Router) { }

              ngOnInit() {
                this.firstFormGroup = this.builder.group({
                  firstCtrl: ['', Validators.required]
                });
                this.secondFormGroup = this.builder.group({
                  secondCtrl: ['', Validators.required]
                });
                this.thirdFormGroup = this.builder.group({
                  thirdCtrl: ['', Validators.required]
                });
              }

}
