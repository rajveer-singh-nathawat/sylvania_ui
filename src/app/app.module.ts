import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { HttpRequestInterceptorModule } from './services/httpinterceptor/httpinterceptor.service';
import { AuthorizationGuard } from './guards/authorization.guard';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandler } from './shared/components/GlobalErrorHandler';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpRequestInterceptorModule,
    RouterModule.forRoot([])
     ],
  providers: [AuthorizationGuard,{provide: ErrorHandler, useClass:
    GlobalErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
