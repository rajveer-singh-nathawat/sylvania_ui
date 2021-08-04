import { NgModule } from '@angular/core';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule } from '@angular/material/card';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatListModule } from '@angular/material/list';
import {MatMenuModule } from '@angular/material/menu';
import {MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatStepperModule } from '@angular/material/stepper';
import {MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatExpansionModule } from '@angular/material/expansion';
import {MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

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
  MatExpansionModule,
  MatNativeDateModule
];
@NgModule({
  imports: materialComponent,
  exports: [materialComponent]
})
export class MaterialModule { }
