import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { EmpheaderComponent } from './empheader/empheader.component';
import { EmpprofileComponent } from './empprofile/empprofile.component';
import { ApplyForLeaveComponent } from './apply-for-leave/apply-for-leave.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { PayslipsComponent } from './payslips/payslips.component';
import { EmployeeRoutingModule } from './employee-routing/employee-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule
  ],
  declarations: [EmpheaderComponent, EmpprofileComponent, ApplyForLeaveComponent, LeaveStatusComponent, PayslipsComponent],
  exports: [EmpheaderComponent, EmpprofileComponent, ApplyForLeaveComponent, LeaveStatusComponent, PayslipsComponent]
})
export class EmployeeModule { }
