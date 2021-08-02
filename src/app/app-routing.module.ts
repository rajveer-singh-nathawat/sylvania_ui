import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticationGuardGuard } from './guards/autentication-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AutenticationGuardGuard],
    // data: { title: '', breadcrumb: ''},
  },
  {
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
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
    relativeLinkResolution: 'legacy'
}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
