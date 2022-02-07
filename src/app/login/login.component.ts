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
    var acno=this.loginForm.value.acno
    var password=this.loginForm.value.pswd
    if (this.loginForm.valid) {
      //asynchronous
      this.ds.login(acno,password) //control goes to dataservice.ts 
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("currrentUser",JSON.stringify(result.currrentUser))
          localStorage.setItem("currentAcno",JSON.stringify(result.currentAcno))
          localStorage.setItem("token",JSON.stringify(result.token))
          this.router1.navigateByUrl("dashboard")
        }
      },
      (result)=>{
        alert(result.error.message)
      })
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
 