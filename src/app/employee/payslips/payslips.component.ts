import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AllPayslip } from '../../user';

@Component({
  selector: 'app-payslips',
  templateUrl: './payslips.component.html',
  styleUrls: ['./payslips.component.css']
})
export class PayslipsComponent implements OnInit {

  dated = {
    months: null,
    year: null
  }
  allpayslip: AllPayslip;
  num:number;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  showpayslip(){
    console.log(this.dated.months);
    console.log(this.dated.year);
    this.auth.getSlip(this.dated.months,this.dated.year)
    .subscribe(
      (success) => {
        this.allpayslip = success;
        console.log(this.allpayslip);
      }
    )
  }

}
