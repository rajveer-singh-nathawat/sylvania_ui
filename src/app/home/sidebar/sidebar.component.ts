import { Component, OnInit } from '@angular/core';
export interface MenuItem{
  name?: string;
  path?: string;
  icon?: string;
}
const sideMenu :MenuItem[] = [{
 name:'Dashboard',
 path:'dashboard',
 icon:'dashboard'
},
{
  name:'Alummnus',
  path:'alummnus',
  icon:'people'
},
{
  name:'Sylvanians',
  path:'sylvanians',
  icon:'people_outline'
},
{
  name:'Gallery',
  path:'gallery',
  icon:'image'
}];

const secondryDefaultMenu : MenuItem[] = [{
  name: 'Help',
    icon: 'help_outline',
    path: 'help'
}];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  primaryMenu: MenuItem[] = [];
  secondaryMenu: MenuItem[] = []

  constructor() {        
     this.filterMenus(sideMenu, this.primaryMenu); 
     this.filterMenus(secondryDefaultMenu, this.secondaryMenu);

    }
  private filterMenus(source, filtered) {

    source.forEach(element => {
      // const arg = [];
      // arg.push(element.featureId);

        filtered.push(element);

    });

  }
  ngOnInit() {
  }

}
