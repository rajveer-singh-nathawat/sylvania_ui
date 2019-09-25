import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule,
        MatButtonModule,
        MatInputModule} from '@angular/material';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionsComponent } from './sessions.component';

@NgModule({
  declarations: [SessionsComponent, SigninComponent, ErrorComponent, NotFoundComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SessionsRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SessionsModule { }