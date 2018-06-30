import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from '../create-account/create-account.component';
import { ApproveLeavesComponent } from '../approve-leaves/approve-leaves.component';
import { PayEmployeeComponent } from '../pay-employee/pay-employee.component';
import { EditPaymentComponent } from '../edit-payment/edit-payment.component';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'approve-leaves', component: ApproveLeavesComponent },
  { path: 'pay-employee', component: PayEmployeeComponent },
  { path: 'edit-payment', component: EditPaymentComponent }
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
