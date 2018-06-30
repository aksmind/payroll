import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LogoutComponent } from '../logout/logout.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule { }
