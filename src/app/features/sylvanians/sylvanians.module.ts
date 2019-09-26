import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';

import { SylvaniansRoutingModule } from './sylvanians-routing.module';
import { SylvaniansComponent } from './sylvanians.component';

@NgModule({
  declarations: [SylvaniansComponent],
  imports: [
    CommonModule,
    SylvaniansRoutingModule,
    MatCardModule
  ]
})
export class SylvaniansModule { }
