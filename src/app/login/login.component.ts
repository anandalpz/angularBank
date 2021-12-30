import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect banking partner"
  acno=""
  pswd=""



  constructor(private router1:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
 
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)

  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd)
  // }
  login(){
    var accnum=this.acno
    var passwd=this.pswd
    let result=this.ds.login(accnum,passwd)  //control goes to dataservice.ts

    if(result){
      this.router1.navigateByUrl('dashboard')
        alert("login success")
    }
   }

   
  // login(a:any,p:any){
  //   var accnum=a.value
  //   var passwd=p.value 
    
  //   var database=this.users

  //   if(accnum in database){
  //     if(passwd==database[accnum]["password"]){
  //       alert("login success")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("invalid account number")
  //   }
  // }

}
 