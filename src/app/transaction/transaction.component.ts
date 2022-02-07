import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:any
  constructor(private ds:DataService) {
    // this.transaction=this.ds.getTransactions()
    this.ds.getTransactions()
    .subscribe((result:any)=>{
      if (result) {
      this.transaction=result.transaction  
      console.log(this.transaction)
      }
    },
    (result)=>{
      alert(result.error.message)
    })
    // console.log(this.transaction)
   }

  ngOnInit(): void {
  }

}
