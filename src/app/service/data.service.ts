import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: any = {
    1000: { acno: 1000, uname: "anand", password: "1234", balance: 2000 },
    1001: { acno: 1001, uname: "anandu", password: "2345", balance: 1000 },
    1002: { acno: 1002, uname: "anto", password: "3456", balance: 21000 },
  }

  constructor() { }
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
        balance: 0
      }
      return true
    }
  }


  login(accnum: any, passwd: any){
    let database = this.users
    if (accnum in database) {
      if (passwd == database[accnum]["password"]) {
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

  deposit(acno:any,pswd:any,amt:any){
    let db=this.users
    var amount=parseInt(amt)
    if(acno in db){
      if(pswd==db[acno]["password"]){
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else{
        alert("Incorrect password")
        return false
      }
    } 
    else{
      alert("Invalid Account Number")
      return false
    } 
  }
  

}





