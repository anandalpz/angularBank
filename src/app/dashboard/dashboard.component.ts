import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount

    let result=this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount+"credited.New Balance is"+result)
    }

  
  }
  withdraw(){

  }

}
