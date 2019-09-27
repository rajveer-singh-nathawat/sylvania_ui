import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SigninComponent } from './signin/signin.component';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionsComponent } from './sessions.component';
import { MaterialModule } from '../material/material.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [SessionsComponent, SigninComponent, ErrorComponent, NotFoundComponent, RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SessionsRoutingModule,
    MaterialModule
  ]
})
export class SessionsModule { }
