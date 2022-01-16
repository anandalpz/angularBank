import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currrentUser:any
  currentAcno:any

  users: any = {
    1000: { acno: 1000, uname: "anand", password: "1234", balance: 2000,transaction:[]},
    1001: { acno: 1001, uname: "anandu", password: "2345", balance: 1000,transaction:[] },
    1002: { acno: 1002, uname: "anto", password: "3456", balance: 21000,transaction:[]},
  }

  constructor() {
    this.getDetails()
   }

   getTransactions(){
    return this.users[this.currentAcno].transaction
   }

  getDetails(){           
    if(localStorage.getItem("userDB")){
      this.users=JSON.parse(localStorage.getItem("userDB")||'')
    }
    if (localStorage.getItem("cUser")) {
      this.currrentUser=JSON.parse(localStorage.getItem("cUser")||'')
    }
    if (localStorage.getItem("cAcno")) {
      this.currentAcno=JSON.parse(localStorage.getItem("cAcno")||'')
    }
  }




  saveDetails(){                          //to store in localstorage
    if(this.users){
      localStorage.setItem("userDB",JSON.stringify(this.users))
    }
    if (this.currrentUser) {
      localStorage.setItem("cUser",JSON.stringify(this.currrentUser))
    }
    if (this.currentAcno) {
      localStorage.setItem("cAcno",JSON.stringify(this.currentAcno))
    }
  }
  register(uname: any, acno: any, password: any) {
    let db = this.users
    if (acno in db) {
      return false
    }
    else {
      db[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction:[]
      }
      this.saveDetails()
      return true
    }
  }


  login(accnum: any, passwd: any) {
    let database = this.users
    if (accnum in database) {
      if (passwd == database[accnum]["password"]) {
        this.currrentUser=database[accnum]["uname"]
        this.currentAcno=accnum
        this.saveDetails()
        return true
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false

    }
  }

  deposit(acno: any, pswd: any, amt: any) {
    let db = this.users
    var amount = parseInt(amt)
    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        db[acno]["balance"] += amount
        db[acno].transaction.push({
          amount:amount,
          type:"CREDIT"
        })
        this.saveDetails()
        return db[acno]["balance"]
      }
      else {
        alert("Incorrect password")
        return false
      }
    }
    else {
      alert("Invalid Account Number")
      return false
    }
  }

  withdraw(acno: any, pswd: any, amt: any) {
    let db = this.users
    var amount = parseInt(amt)

    if (acno in db) {
      if (pswd == db[acno]["password"]) {
        if (amount < db[acno]["balance"]) {
          db[acno]["balance"] -= amount
          db[acno].transaction.push({
            amount:amount,
            type:"DEBIT"
          })
          this.saveDetails()
          return db[acno]["balance"]
        }
        else {
          alert("Insufficient Balance")
          return false
        }
      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("invalid account number")
      return false
    }
  }

}





