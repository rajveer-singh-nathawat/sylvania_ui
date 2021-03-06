import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  logoSrc: any = '.\assets\logonew.png';
  @Output ('toggleSideBar') sideBarToggle: EventEmitter<Boolean> = new EventEmitter<Boolean>();
 
  constructor(private readonly auth: AuthService) { }
currentUser: any = sessionStorage.getItem('currentUser');
  ngOnInit() {
  }
  toggleSideBar() {
    this.sideBarToggle.emit();
  }
  onLoggedOut() {
    this.auth.logOut();
  }
}
