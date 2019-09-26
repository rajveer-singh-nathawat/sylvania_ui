import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnusComponent } from './alumnus.component';

const routes: Routes = [
  {
    path: 'alumnus',
    component: AlumnusComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnusRoutingModule { }
