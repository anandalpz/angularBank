import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="your perfect banking partner"


  loginForm=this.fbl.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })


  constructor(private router1:Router,private ds:DataService,private fbl:FormBuilder) { }

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

    if (this.loginForm.valid) {
      var accnum=this.loginForm.value.acno
      var passwd=this.loginForm.value.pswd
      let result=this.ds.login(accnum,passwd)  //control goes to dataservice.ts
  
      if(result){
        this.router1.navigateByUrl('dashboard')
          alert("login success")
         
      }
    }
    else{
      alert("Invalid Form")
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
 