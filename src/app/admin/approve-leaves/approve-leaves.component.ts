import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Allmyleave } from '../../user';
import { leave } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-approve-leaves',
  templateUrl: './approve-leaves.component.html',
  styleUrls: ['./approve-leaves.component.css']
})
export class ApproveLeavesComponent implements OnInit {

  AllEmployeeLeave: Allmyleave
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.Allleave()
    .subscribe(
      (success) => {
        this.AllEmployeeLeave = success;
        console.log(success);
      },
      err => console.log(err)
    )
  }

  Status(status: string,id:string){
    this.auth.UpdateStatus(id,{
     status:status 
    })
    .subscribe(
      (success) => {
        this.AllEmployeeLeave.leaves.forEach((leave) => {
          if(leave.id == id){
            if(status == 'approved'){
              leave.isApproved = true;
              leave.isRejected = false;
            }
            else{
              leave.isApproved = false;
              leave.isRejected = true;
            }
          }
        });
      },
      err => console.log(err)
      
    )
  }

}
