import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnusRoutingModule } from './alumnus-routing.module';
import { AlumnusComponent } from './alumnus.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [AlumnusComponent],
  imports: [
    CommonModule,
    AlumnusRoutingModule,
    MaterialModule
  ]
})
export class AlumnusModule { }
