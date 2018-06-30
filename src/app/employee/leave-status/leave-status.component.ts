import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Allmyleave } from '../../user';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit {

  allLeave: Allmyleave;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.Allmyleave()
      .subscribe (
        (success:Allmyleave) => {
          this.allLeave = success;
          console.log(success);
        },
        err => console.log(err)
      )
  }

}
