import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { alluserdata } from '../../user';
import { AllPayslip } from '../../user';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent implements OnInit {

  Allpayslip: AllPayslip;
  emp = {
    id: null
  }
  editpay = {
    deduction:"",
    bonus:"",
    medical:"",
  }
  id:string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.Allpayslips()
      .subscribe (
        (success) => {
          this.Allpayslip = success;
          console.log(this.Allpayslip); 
        },
        err => console.log(err)
      )
  }

  editPay() {
    this.id = this.emp.id;
    this.auth.createPayslip(this.id,this.editpay)
    .subscribe(
      (success) => {
        console.log(success);
      },
      err => console.log(err)
    )
    console.log(this.editpay);
  }

}
