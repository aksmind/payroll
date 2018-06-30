import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AdmheaderComponent } from './admin/admheader/admheader.component';
import { AdminProfileComponent } from './admin/admin-profile/admin-profile.component';
import { CreateAccountComponent } from './admin/create-account/create-account.component';
import { ApproveLeavesComponent } from './admin/approve-leaves/approve-leaves.component';
import { PayEmployeeComponent } from './admin/pay-employee/pay-employee.component';
import { EditPaymentComponent } from './admin/edit-payment/edit-payment.component';
import { EmpheaderComponent } from './employee/empheader/empheader.component';
import { EmpprofileComponent } from './employee/empprofile/empprofile.component';
import { ApplyForLeaveComponent } from './employee/apply-for-leave/apply-for-leave.component';
import { LeaveStatusComponent } from './employee/leave-status/leave-status.component';
import { PayslipsComponent } from './employee/payslips/payslips.component';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'logout', 
    component: LogoutComponent,
    canActivate: [AuthGuard] 
  },
  
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'empprofile', component: EmpprofileComponent},
  { path: 'apply-for-leave', component: ApplyForLeaveComponent},
  { path: 'leave-status', component: LeaveStatusComponent},
  { path: 'payslips', component: PayslipsComponent},
  { path: 'admin-profile', component: AdminProfileComponent},
  { path: 'create-account', component: CreateAccountComponent},
  { path: 'approve-leaves', component: ApproveLeavesComponent},
  { path: 'pay-employee', component: PayEmployeeComponent},
  { path: 'edit-payment', component: EditPaymentComponent},
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
