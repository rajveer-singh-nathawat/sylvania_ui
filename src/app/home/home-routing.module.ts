import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AutenticationGuardGuard } from '../guards/autentication-guard.guard';

const homeroutes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [AutenticationGuardGuard],
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
