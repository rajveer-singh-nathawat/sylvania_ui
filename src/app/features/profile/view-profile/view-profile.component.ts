import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  userProfileData: any;
  viewUserId: any ;
  currentUserId: any;
  buttonFlag: any = false;
  constructor(private readonly profileService: ProfileService,
    private readonly router: Router,
    private readonly location: Location,
    private readonly route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe((params: any)=> {
      this.viewUserId = params.id;
    })
     this.currentUserId = sessionStorage.getItem('currentUserId');
    if(!this.viewUserId){
      this.buttonFlag = true;
      this.getCurrentUserProfile();
    } else {
      if(this.currentUserId === this.viewUserId){
        this.buttonFlag = true;
      }
      this.profileService.getUserById(this.viewUserId).subscribe((response)=>{
        this.userProfileData = response;
      })
    }
  }
  
  getCurrentUserProfile() {
    this.profileService.getCurrentUserProfile().subscribe((response)=>{
      this.userProfileData = response;
    })
  }
  editProfile(){
this.router.navigate(['/profile/edit-profile']);
  }
  backButton(){
    this.location.back();
  }
  setProfileData(data: any){
this.userProfileData = data;
  }
}
