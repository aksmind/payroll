import { Component, OnInit } from '@angular/core';
import { AllPayslip } from '../../user';
import { alluserdata } from '../../user'
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-pay-employee',
  templateUrl: './pay-employee.component.html',
  styleUrls: ['./pay-employee.component.css']
})
export class PayEmployeeComponent implements OnInit {

  AllEmployeePay: AllPayslip
  user: alluserdata
  pay = {
    month: null,
    _userId: null
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.Allpayslips()
    .subscribe(
      (success) => {
        this.AllEmployeePay = success;
        console.log(success);
      },
      err => console.log(err)
    )
    this.auth.getAllUser()
    .subscribe(
      (success) => {
        this.user = success;
      },
      err => console.log(err)
    )
  }

  generatepay() {
    this.auth.payslip(this.pay)
      .subscribe (
        (res) => {
          console.log(res);
        },
        err => console.log(err)
      ) 
      /* console.log(this.pay);
 */  }
 changepay(_id,slip) {
   this.auth.makePayment(_id,slip)
   .subscribe (
    (res) => {
      this.AllEmployeePay.payslips.forEach( (payslip) => 
      {
        if(payslip.id == _id ){
            payslip.isPaid = true
        }            
      });
    },
    err => console.log(err)
  ) 
 }
  /*   
  pending(id:string, status:string){
    this.auth.makePayment(id,{
      status: status
    })
    .subscribe(
      (success) => {
        this.AllEmployeePayslips.payslips.forEach((payslip) => {
          if(payslip._id == id){
            if(status == "pending"){
              payslip.isPaid = true;
            }
          }
        });
      },
      err => console.log(err)
    )
  }
*/
}
