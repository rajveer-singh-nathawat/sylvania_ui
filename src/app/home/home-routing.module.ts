import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeroutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../features/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'alumnus',
        loadChildren: '../features/alumnus/alumnus.module#AlumnusModule'
      },
      {
        path: 'sylvanians',
        loadChildren: '../features/sylvanians/sylvanians.module#SylvaniansModule'
      },
      {
        path: 'gallery',
        loadChildren: '../features/gallery/gallery.module#GalleryModule'
      },
      {
        path: 'help',
        loadChildren: '../features/help/help.module#HelpModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeroutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
