import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SylvaniansComponent } from './sylvanians.component';

const routes: Routes = [
  {
    path: '',
    component: SylvaniansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SylvaniansRoutingModule { }
