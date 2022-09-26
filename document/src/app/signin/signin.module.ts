
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwtToken/jwt.interceptor';
import { ErrorInterceptor } from './jwtToken/error.interceptor';
import { fakeBackendProvider } from './jwtToken/fake-backend';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import{AuthenticationService }from './service/authentication.service'
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  AuthenticationService,
UserService]
})
export class SigninModule { }
