import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Userdetails } from '../../user';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  name = "";
  desg = "";
  constructor(private auth:  AuthService) { }

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
