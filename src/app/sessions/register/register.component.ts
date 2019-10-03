import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
export class RegistrationData {
  constructor(
    public  userName: string,
    public  email: string,
    public  password: string,
    public  confirmPassword: string,
    public  fullName: string,
    public  phoneNo: string,
    public  dateOfBirth: string,
    public  qualification: string,
    public  address: string,
    public  livingStatus: boolean,
    public  jobStatus: boolean,
    public   designation: string,
    public  jobLocation: string
  ) { }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationData: RegistrationData;
  isLinear = true;
  registrationFrom: FormGroup;
  constructor(private readonly builder: FormBuilder,
              private readonly router: Router) {}
  ngOnInit() {
      this.inItForm();
      }
  inItForm() {
    this.registrationFrom = this.builder.group({
      'accountDetailForm': this.builder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  }),
      'personalDetailForm': this.builder.group({
      fullName: ['', Validators.required],
      qualification: ['', Validators.required],
      phoneNo: ['', Validators.required],
      dOB: ['', Validators.required],
      address: ['', Validators.required]
  }),
      'currentStatusForm':  this.builder.group({
      livingStatus: ['', Validators.required],
      jobStatus: ['', Validators.required],
      designation: ['', Validators.required],
      jobLocation: ['', Validators.required],
  })
});
  }
   submitRegistrationData() {
    this.registrationData = this.registrationFrom.value;
    console.log(this.registrationData);
   }
}
