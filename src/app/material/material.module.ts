import { NgModule } from '@angular/core';
import {MatSidenavModule,
  MatCardModule,
   MatToolbarModule,
     MatButtonModule,
     MatIconModule,
   MatListModule,
     MatMenuModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule,
     MatStepperModule,
     MatRadioModule

} from '@angular/material';
import { CommonModule } from '@angular/common';

const materialComponent = [CommonModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatRadioModule
];
@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }
