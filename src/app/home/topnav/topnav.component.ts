import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  //pushRightClass = 'push-right';
  constructor() { }

  toggleSidebar() {
    this.sidenav.toggle();
    // const dom: any = document.querySelector('body');
    // dom.classList.toggle(this.pushRightClass);
}

  ngOnInit() {
  }

}
