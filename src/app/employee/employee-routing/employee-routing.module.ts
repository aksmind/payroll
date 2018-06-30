import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyForLeaveComponent } from '../apply-for-leave/apply-for-leave.component';
import { LeaveStatusComponent } from '../leave-status/leave-status.component';
import { PayslipsComponent } from '../payslips/payslips.component';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  { path: 'apply-for-leave', component: ApplyForLeaveComponent },
  { path: 'leave-status', component: LeaveStatusComponent },
  { path: 'payslips', component: PayslipsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class EmployeeRoutingModule { }
