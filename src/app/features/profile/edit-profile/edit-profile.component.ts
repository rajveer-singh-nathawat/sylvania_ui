import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import {  MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  isLinear = false;
  registrationForm: FormGroup;
  userProfileData: any;
  CompanyFlag: any = false;
  constructor(private readonly builder: FormBuilder,
    private readonly router: Router,
    private readonly profileService: ProfileService,
    private readonly snackBar: MatSnackBar,
    private readonly location: Location) { }

  ngOnInit() {
    this.inItForm();
    this.getProfileData();
  }
  getProfileData() {
    this.profileService.getCurrentUserProfile().subscribe((response)=>{
      if(response.jobStatus != 'preparing'){
        this.CompanyFlag = true;
      } 
      this.userProfileData = response;

      this.registrationForm.patchValue(response);
       this.registrationForm.get('email').disable();
      if(response.dateOfBirth) {
        this.registrationForm.get('dateOfBirth').setValue(new Date(response.dateOfBirth));
      }


    })
  }
  inItForm() {
    this.registrationForm = this.builder.group({
        userName: ['', Validators.required],
        email: ['', Validators.email],
        fullName: ['', Validators.required],
        qualification: ['', Validators.required],
        phoneNo: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        address: ['', Validators.required],
        livingStatus: ['', Validators.required],
        jobStatus: ['',],
        companyName: ['',],
        designation: ['', Validators.required],
        jobLocation: ['', Validators.required],
    });
  }
  
  saveEditedData(registrationForm) {
    this.profileService.editDetails(this.registrationForm.value).subscribe((response) => {
     this.snackBar.open('Profile updated successfully!!','exit',{duration: 6000});
     this.router.navigate(['/profile/view-profile']);
    });
}
backButton(){
  this.location.back();
}

}