import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""

  constructor(private ds:DataService,private rout:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname
    var acno=this.acno
    var pswd=this.pswd
    let result=this.ds.register(uname,acno,pswd) //control goes to dataservice.ts
    if(result){
      alert("registered successfully")
      this.rout.navigateByUrl("")
    }
    else{
      alert("Account Number Already Exist")
    }
  }

}
