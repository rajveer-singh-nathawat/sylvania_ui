import { NgModule } from '@angular/core';
import {MatSidenavModule,
  MatCardModule,
   MatToolbarModule,
     MatButtonModule,
     MatIconModule,
     MatListModule,
     MatSnackBarModule,
     MatMenuModule,
     MatDividerModule,
     MatFormFieldModule,
     MatInputModule,
     MatStepperModule,
     MatRadioModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatExpansionModule

} from '@angular/material';
import { CommonModule } from '@angular/common';

const materialComponent = [CommonModule,
  MatSidenavModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatListModule,
  MatMenuModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatStepperModule,
  MatRadioModule,
  MatDatepickerModule,
  MatExpansionModule
];
@NgModule({
  imports: [materialComponent,
            MatNativeDateModule],
  exports: [materialComponent]
})
export class MaterialModule { }
