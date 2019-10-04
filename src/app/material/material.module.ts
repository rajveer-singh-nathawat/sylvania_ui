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
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule

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
  MatRadioModule,
  MatDatepickerModule
];
@NgModule({
  imports: [materialComponent,
            MatNativeDateModule],
  exports: [materialComponent]
})
export class MaterialModule { }
