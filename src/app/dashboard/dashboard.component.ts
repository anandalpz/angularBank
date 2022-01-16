import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user=this.ds.currrentUser
  depositForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  
  })
  
  withdrawForm=this.fb.group({
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
  
  })
  
  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  deposit(){
   if (this.depositForm.valid) {
    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.amount

    let result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+"credited.New Balance is"+result)
    }
   }
   else{
     alert("Invalid Form")
   }

  
  }
  withdraw(){
  if (this.withdrawForm.valid) {
    var acno=this.withdrawForm.value.acno1
    var pswd=this.withdrawForm.value.pswd1
    var amount=this.withdrawForm.value.amount1

    let result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(amount+"debited.New Balance is"+result)
    }
  }
  else{
    alert("Invalid Form")
  }
  }

}
