import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{AuthenticationService }from './signin/service/authentication.service'
import { HttpClientModule } from '@angular/common/http';
import { SigninModule } from './signin/signin.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    NgbModule,
    HttpClientModule,
    SigninModule
  ],
  providers: [AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
