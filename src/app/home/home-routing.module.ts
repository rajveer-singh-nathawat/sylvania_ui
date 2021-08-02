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
        loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {roles: ['ALL']}
      },
      {
        path: 'alumnus',
        loadChildren: () => import('../features/alumnus/alumnus.module').then(m => m.AlumnusModule),
        data: {roles: ['ALL']}
      },
      {
        path: 'sylvanians',
        loadChildren: () => import('../features/sylvanians/sylvanians.module').then(m => m.SylvaniansModule),
        data: {roles: ['ALL']}
      },
      {
        path: 'gallery',
        loadChildren: () => import('../features/gallery/gallery.module').then(m => m.GalleryModule),
        data: {roles: ['ALL']}
      },
      {
        path: 'help',
        loadChildren: () => import('../features/help/help.module').then(m => m.HelpModule),
        data: {roles: ['ALL']}
      },
      {
        path: 'profile',
        loadChildren: () => import('../features/profile/profile.module').then(m => m.ProfileModule),
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
