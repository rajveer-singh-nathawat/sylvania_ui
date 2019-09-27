import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticationGuardGuard } from './guards/autentication-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AutenticationGuardGuard],
    // data: { title: '', breadcrumb: ''},
  },
  {
    path: 'sessions',
    loadChildren: './sessions/sessions.module#SessionsModule',
    // data: { title: '', breadcrumb: '' }
  },
  {
    path: '**',
    redirectTo: 'sessions/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // onSameUrlNavigation: 'reload'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
