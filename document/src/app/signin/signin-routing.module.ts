import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin.component';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './jwtToken/auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '' , component: SigninComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },

  // otherwise redirect to home
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
