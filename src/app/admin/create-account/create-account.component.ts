import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { CreateUser } from '../../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  createuser: CreateUser = {
    name :{
      first:"",
      last:""
    },
    email: "",
    designation: "",
    casualLeave: 0,
    privilledgeLeaves: 0,
    baseSalary: 0,
    address: "" 
    
  }
  constructor(private auth: AuthService, private httpClient: HttpClient) { }

  ngOnInit() {
  }
/*
  createUser(){
    this.auth.createuser(this.createuser)
    .subscribe(
      (success) => {
        console.log(success);
      },
      err => console.log(err)
    )
    console.log(this.createuser);
    
  }*/


  createUser(first:string,last:string,email:string,designation:string,CL:number,PL:number,baseSalary:number,address:string){
    this.httpClient.post("http://139.59.14.81:3000/api/v1/createuser",
      {
        name:{
          first: first,
          last: last
        },
        email: email,
        designation: designation,
        casualLeave: CL,
        privilledgeLeaves: PL,
        baseSalary: baseSalary,
        address: address
      }
    ).subscribe(
      (success) => {
        console.log(success);
      },
      err => console.log(err)
    );
  }

}
