import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HomeComponent, SidebarComponent, TopbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
     FormsModule,
    MaterialModule
  ]
})
export class HomeModule { }
