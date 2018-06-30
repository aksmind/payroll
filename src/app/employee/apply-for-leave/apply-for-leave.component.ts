import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-apply-for-leave',
  templateUrl: './apply-for-leave.component.html',
  styleUrls: ['./apply-for-leave.component.css']
})
export class ApplyForLeaveComponent implements OnInit {

  creatleave = {
  }
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  createLeave(){
    this.auth.CreateLeave(this.creatleave)
    .subscribe(
      (success) => {
        console.log(success);
      },
      err => console.log(err)
    )
    console.log(this.creatleave);
    
  }

}
