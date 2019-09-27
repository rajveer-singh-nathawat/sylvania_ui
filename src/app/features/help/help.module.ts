import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    HelpRoutingModule,
    MaterialModule
  ]
})
export class HelpModule { }
