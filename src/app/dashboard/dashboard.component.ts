import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]]

  })

  user: any
  acno: any
  logDate:any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.logDate=new Date()
    if (localStorage.getItem("currrentUser")) {
      this.user = JSON.parse(localStorage.getItem("currrentUser") || "")
    }
  }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
      alert("Please Log In")
      this.router.navigateByUrl("")
    }
  }
  logOut(){
    localStorage.removeItem("currrentUser")
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }
  deposit() {
    if (this.depositForm.valid) {
      var acno = this.depositForm.value.acno
      var pswd = this.depositForm.value.pswd
      var amount = this.depositForm.value.amount
      //asynchronous
      this.ds.deposit(acno, pswd, amount)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )
    }
    else {
      alert("Invalid Form")
    }
  }

  withdraw() {
    if (this.withdrawForm.valid) {
      var acno = this.withdrawForm.value.acno1
      var pswd = this.withdrawForm.value.pswd1
      var amount = this.withdrawForm.value.amount1

      this.ds.withdraw(acno, pswd, amount)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message)
          })

    }
    else {
      alert("Invalid Form")
    }
  }
  deleteFromParent() {
    this.acno = JSON.parse(localStorage.getItem("currentAcno") || "")

  }
  delete(event: any) {
    this.ds.delete(event)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("")
        }
      },
        (result) => {
          alert(result.error.message)
        })


  }
  cancel(){
    this.acno=""
  }
}
