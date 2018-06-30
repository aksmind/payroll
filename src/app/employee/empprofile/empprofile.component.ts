import { Component, OnInit } from '@angular/core';
import { ApplyForLeaveComponent } from '../apply-for-leave/apply-for-leave.component';
import { LeaveStatusComponent } from '../leave-status/leave-status.component';
import { PayslipsComponent } from '../payslips/payslips.component';
import { AuthService } from '../../auth/auth.service';
import { Userdetails } from '../../user';

@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.css']
})
export class EmpprofileComponent implements OnInit {

  name = "";
  desg = "";
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUser()
    .subscribe(
      (success: Userdetails) => {
        this.name = success.user.name.full,
        this.desg = success.user.designation
      },
      err => console.log(err)       
    )
  }

}
