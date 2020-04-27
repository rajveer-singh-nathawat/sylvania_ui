import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AutenticationGuardGuard } from '../guards/autentication-guard.guard';
import { AuthorizationGuard } from '../guards/authorization.guard';

const homeroutes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full',
},
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [AutenticationGuardGuard, AuthorizationGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: '../features/dashboard/dashboard.module#DashboardModule',
        data: {roles: ['ALL']}
      },
      {
        path: 'alumnus',
        loadChildren: '../features/alumnus/alumnus.module#AlumnusModule',
        data: {roles: ['ALL']}
      },
      {
        path: 'sylvanians',
        loadChildren: '../features/sylvanians/sylvanians.module#SylvaniansModule',
        data: {roles: ['ALL']}
      },
      {
        path: 'gallery',
        loadChildren: '../features/gallery/gallery.module#GalleryModule',
        data: {roles: ['ALL']}
      },
      {
        path: 'help',
        loadChildren: '../features/help/help.module#HelpModule',
        data: {roles: ['ALL']}
      },
      {
        path: 'profile',
        loadChildren: '../features/profile/profile.module#ProfileModule',
        data: {roles: ['ALL']}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeroutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
