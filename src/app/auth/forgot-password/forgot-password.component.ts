import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as jwt_decode from 'jwt-decode';
import { AuthService } from '../auth.service';

var data;
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private httpClient: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }

  forgotPassword(email: string){
    this.httpClient.post("http://139.59.14.81:3000/api/v1/sendchangepassmail",
  {
    handle: email
  })
  .subscribe(
    (success: any) => {
      console.log(success);
    }
  )
  }

  getDecodedAccessToken(token: string): any{
    try{
      return jwt_decode(token);
    }
    catch(Error){
      return null;
    }
  }

}
