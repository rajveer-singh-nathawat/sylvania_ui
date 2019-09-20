import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions.component';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';

const sessionroutes: Routes = [
  {
    path:'',
    redirectTo: 'SigninComponent',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SessionsComponent,
    children: [
      {
      path: 'signin',
      component: SigninComponent
      },
      {
        path:'404',
        component:ErrorComponent
      },
      {
        path: 'error',
        component:NotFoundComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(sessionroutes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
