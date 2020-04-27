import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'view-profile',
        pathMatch: 'full'
      },
      {
        path: 'view-profile',
        component: ViewProfileComponent,
        data: {roles: ['ALL']}
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent,
        data: {roles: ['ALL']}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
