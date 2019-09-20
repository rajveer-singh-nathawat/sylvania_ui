import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [HomeComponent, TopnavComponent, SidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
