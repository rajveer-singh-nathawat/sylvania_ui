import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SylvaniansComponent } from './features/sylvanians/sylvanians.component';
import { AlummnusComponent } from './features/alummnus/alummnus.component';
import { GalleryComponent } from './features/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SylvaniansComponent,
    AlummnusComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
