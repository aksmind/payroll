import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  private loginUrl = "http://139.59.14.81:3000/api/v1/";
  constructor(/*public jwtHelper: JwtHelperService*/private http: HttpClient, private router:Router) { }

  public setToken(token): void{
    localStorage.setItem('userToken',token);
  }

  public getToken(): string{
    return localStorage.getItem('userToken');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting 
    // whether or not the token is expired
    return tokenNotExpired(null, token);
    //return !this.jwtHelper.isTokenExpired(token); 
  }

  public getUser(){
    return this.http.get<any>(this.loginUrl + "/user");
  }

  public getAllUser() {
    return this.http.get<any>(this.loginUrl+"/alluser")
  }

  public createuser(create_user){
    return this.http.post<any>(this.loginUrl + "/createuser", create_user);
  }

  public CreateLeave(create_leave){
    return this.http.post<any>(this.loginUrl + "/createLeave",create_leave);
  }

  public createPayslip(_id,pay){
    return this.http.put<any>(this.loginUrl + "/editpayslip/" + _id,pay);
  }

  public Allleave(){
    return this.http.get<any>(this.loginUrl + "/allleave");
  }

  public Allmyleave() {
    return this.http.get<any>(this.loginUrl+"/allmyleave");
  }

  public UpdateStatus(id,status){
    return this.http.put<any>(this.loginUrl + "/changestatus/" + id,status);
  }

  public Allpayslips(){
    return this.http.get<any>(this.loginUrl + "/allpayslip");
  }

  public payslip(generatepay) {
    return this.http.post<any>(this.loginUrl+"/createpayslip",generatepay);
  }

  public makePayment(id,status){
    return this.http.put<any>(this.loginUrl + "/markaspaid/" + id,status);
  }

  getSlip(month,year){
    return this.http.get<any>(this.loginUrl + "/payslip/" + month + "/" + year);
  }

}
