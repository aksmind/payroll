import { Component, OnInit } from '@angular/core';

import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { HttpClient } from '@angular/common/http';
//import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { User } from '../../user';
import { AdminProfileComponent } from '../../admin/admin-profile/admin-profile.component';
import { EmpprofileComponent } from '../../employee/empprofile/empprofile.component';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Error: boolean = false;
  constructor(private httpClient: HttpClient,private auth: AuthService, private router: Router/*,private toastr: ToastrService*/) { }

  ngOnInit() {
  }

  checkLogin(email:string, password:string) : void{
    //console.log(`${email} and ${password}`);
    this.httpClient.post("http://139.59.14.81:3000/api/v1/login",
    {
      loginEmail: email,
      loginPassword: password
    }).subscribe(
      (success: User) => {
        if(success.error){
          console.log("Invalid password");
        }
        else{
          this.auth.setToken(success.token);
          const data = jwt_decode(success.token);
          console.log(data);
          if(data.isAdmin){           
            this.router.navigate(['/admin-profile']);
          }
          else{
            this.router.navigate(['/empprofile']);
          }
        }
      }
    );
  }
/*
  getDecodedAccessToken(token: string): any{
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }
*/
}