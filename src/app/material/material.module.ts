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
     MatInputModule

} from '@angular/material';
import { CommonModule } from '@angular/common';

const materialComponent = [

];
@NgModule({
  imports: [CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule],
  exports: [MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule]
})
export class MaterialModule { }
