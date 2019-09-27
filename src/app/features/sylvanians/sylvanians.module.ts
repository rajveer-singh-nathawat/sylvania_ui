import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SylvaniansRoutingModule } from './sylvanians-routing.module';
import { SylvaniansComponent } from './sylvanians.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [SylvaniansComponent],
  imports: [
    CommonModule,
    SylvaniansRoutingModule,
    MaterialModule
  ]
})
export class SylvaniansModule { }
