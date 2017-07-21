import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './mock-expense';
import { Router } from '@angular/router'; 


@Injectable()
export class SpentsService {

  constructor(private router: Router) { }

  updatedExpensesList : Expense[];
  afterRemovalList : Expense[];
  // path:any;
  getData():Expense[]{
  	return EXPENSES;
  }

  addNewExpense(description,amount,date,category): Expense[]{
  	this.updatedExpensesList = this.getData();
  	this.updatedExpensesList.push({
			spendFor: description,
			amountSpend: amount,
			paymentDate: date,
      spendOn : category
	});

    this.router.navigate(['']);
    console.log(this.getData());
    console.log(this.updatedExpensesList);
	  return this.updatedExpensesList;
  }

  remove(popExpense): Expense[]{
    this.afterRemovalList = this.getData();
    this.afterRemovalList.splice(popExpense,1);
    return this.afterRemovalList;
  }

  // getImages(){[
  //   this.path : "../../img/billIcon.png",
  //    path :"../../img/entertainment.png",
  //    path :"../../img/foodDrink.jpeg",
  //   path:"../../img/investment.jpeg"
  // ]}
  

}
