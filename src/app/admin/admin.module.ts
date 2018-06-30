import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AdmheaderComponent } from './admheader/admheader.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component'
import { ApproveLeavesComponent } from './approve-leaves/approve-leaves.component';
import { PayEmployeeComponent } from './pay-employee/pay-employee.component';
import { EditPaymentComponent } from './edit-payment/edit-payment.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdmheaderComponent, AdminProfileComponent, CreateAccountComponent, ApproveLeavesComponent, PayEmployeeComponent, EditPaymentComponent],
  exports: [AdmheaderComponent, AdminProfileComponent, CreateAccountComponent, ApproveLeavesComponent, PayEmployeeComponent, EditPaymentComponent]
})
export class AdminModule { }







