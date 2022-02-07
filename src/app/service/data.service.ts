import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currrentUser: any
  currentAcno: any

  users: any = {
    1000: { acno: 1000, uname: "anand", password: "1234", balance: 2000, transaction: [] },
    1001: { acno: 1001, uname: "anandu", password: "2345", balance: 1000, transaction: [] },
    1002: { acno: 1002, uname: "anto", password: "3456", balance: 21000, transaction: [] },
  }

  constructor(private http: HttpClient) {
    
  }

  getTransactions() {
    // return this.users[this.currentAcno].transaction
    const data={
      
    }
    return this.http.post('http://localhost:3000/trans',data,this.getOptions())
  }

  // getDetails() {
  //   if (localStorage.getItem("userDB")) {
  //     this.users = JSON.parse(localStorage.getItem("userDB") || '')
  //   }
  //   if (localStorage.getItem("cUser")) {
  //     this.currrentUser = JSON.parse(localStorage.getItem("cUser") || '')
  //   }
  //   if (localStorage.getItem("cAcno")) {
  //     this.currentAcno = JSON.parse(localStorage.getItem("cAcno") || '')
  //   }
  // }




  // saveDetails() {                          //to store in localstorage
  //   if (this.users) {
  //     localStorage.setItem("userDB", JSON.stringify(this.users))
  //   }
  //   if (this.currrentUser) {
  //     localStorage.setItem("cUser", JSON.stringify(this.currrentUser))
  //   }
  //   if (this.currentAcno) {
  //     localStorage.setItem("cAcno", JSON.stringify(this.currentAcno))
  //   }
  // }
  register(uname: any, acno: any, password: any) {
      const data = {
        uname,
        acno,
        password
      }
      //asynchronous
      return this.http.post('http://localhost:3000/register', data)
  }

    login(acno: any, password: any) {
      const data = {
        acno,
        password
      }
      //asynchronous
      return this.http.post('http://localhost:3000/login', data)
    }

    deposit(acno: any, password: any, amt: any) {
      const data = {
        acno,
        password,
        amt
      }
      //asynchronous
      return this.http.post('http://localhost:3000/deposit', data,this.getOptions())
    }

    //TO ADD TOKEN INTO REQUEST HEADER
    getOptions(){
      const token=JSON.parse(localStorage.getItem('token')||'')
      let headers=new HttpHeaders()
      if (token) {
        headers=headers.append('token-access',token)
        options.headers=headers
      }
      return options
    }

    withdraw(acno: any, password: any, amt: any) {
      const data = {
        acno,
        password,
        amt
      }
      //asynchronous
      return this.http.post('http://localhost:3000/withdraw', data,this.getOptions())
    }

    delete(acno:any){
      //asynchronous
      return this.http.delete('http://localhost:3000/deleteAcc/'+acno,this.getOptions())
    }

}





