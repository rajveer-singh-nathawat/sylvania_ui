import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  @Output ('toggleSideBar') sideBarToggle: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar() {
    this.sideBarToggle.emit();
  }
  onLoggedOut() {
    sessionStorage.removeItem('authenticateUser');
  }
}
