import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],             //gets the user entered uname from registerComponent.html
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],              //gets the user entered acno from registerComponent.html
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]               //gets the user entered pswd from registerComponent.html
  })

  constructor(private ds:DataService,private rout:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    if(this.registerForm.valid){
      var uname=this.registerForm.value.uname
      var acno=this.registerForm.value.acno
      var pswd=this.registerForm.value.pswd
      let result=this.ds.register(uname,acno,pswd) //control goes to dataservice.ts 
      if(result){
        alert("registered successfully")
        this.rout.navigateByUrl("")
      }
      else{
        alert("Account Number Already Exist")
      }
    }
    else{
      alert("Invalid Form")
    }
   
  }

}
