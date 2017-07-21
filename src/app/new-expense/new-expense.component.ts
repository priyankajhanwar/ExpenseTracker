import { Component, OnInit } from '@angular/core';
import { SpentsService } from '../spents.service';
 import { Expense } from '../expense';


@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {

  constructor(private spentsService : SpentsService) { }


  updatedArray : Expense[];
  

  ngOnInit() {
   
  }

  addNewExpense(description,amount,date,category){
  	this.updatedArray = this.spentsService.addNewExpense(description,amount,date,category);
  }


 

}
 