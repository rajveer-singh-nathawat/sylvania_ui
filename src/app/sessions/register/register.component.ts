import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  registrationForm: FormGroup;
  jobFlag: any = false;
  constructor(private readonly builder: FormBuilder,
    private readonly router: Router,
    private readonly sessionService: SessionService,
    private readonly matSnack : MatSnackBar) { }
  ngOnInit() {
    this.inItForm();
  }

  inItForm() {
    this.registrationForm = this.builder.group({
      userName: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      fullName: ['', Validators.required],
      qualification: ['', Validators.required],
      phoneNo: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      livingStatus: ['Sylvanian', Validators.required],
      jobStatus: ['Preparing', Validators.required],
      companyName: [''],
      designation: ['', Validators.required],
      jobLocation: ['', Validators.required],
    });
  }

  submitRegistrationData() {
    this.sessionService.register(this.registrationForm.value).subscribe((response) => {
      this.matSnack.open('Acount created!!','exit',{duration:6000})
      this.router.navigate(['/sessions/signin']);
    });
  }
  onclickDoingJob() {
    this.jobFlag = true;
  }
  onClickpreparing(){
    this.jobFlag = false;
  }
}
