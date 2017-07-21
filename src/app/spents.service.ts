import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { EXPENSES } from './mock-expense';
import { Router } from '@angular/router'; 


@Injectable()
export class SpentsService {

  constructor(private router: Router) { }

  getData():Expense[]{
    return EXPENSES;
  }

  addNewExpense(description,amount,date,category): Expense[]{
    let updatedExpensesList = this.getData();
    updatedExpensesList.push({
      spendFor: description,
      amountSpend: amount,
      paymentDate: date,
      spendOn : category
    });
    this.router.navigate(['']);
    // console.log("after adding");
    // console.log(updatedExpensesList);
    // console.log("category expenses");
    // console.log(this.categoryTotals());
    // console.log("total expense");
    // console.log(this.totalExpenses());
    console.log(this.percentCalculations());
    return updatedExpensesList;
  }

  remove(popExpense): Expense[]{
    let afterRemovalList = this.getData();
    afterRemovalList.splice(popExpense,1);
    // console.log("after removal");
    // console.log(afterRemovalList);
    // console.log("category expenses");
    // console.log(this.categoryTotals());
    // console.log("total expense");
    // console.log(this.totalExpenses());
     console.log(this.percentCalculations());
    return afterRemovalList;
  }

  totalExpenses():number{
    let finalBill=0;
    let array=[];
    array=this.categoryTotals();
    for(let i=0;i<array.length;i++){
      finalBill = finalBill + array[i] ;
    }
    console.log(finalBill);
    return finalBill;
  }

  categoryTotals():Array<number>{
    let list = this.getData();
    let billsTotal=0;
    let investmentTotal=0;
    let entertainmentTotal=0;
    let foodTotal=0;
    for(let i=0;i<list.length;i++){
      if(list[i].spendOn==='Bill'){
        billsTotal = billsTotal + list[i].amountSpend ;
      }
      if(list[i].spendOn==='Investment'){
        investmentTotal = investmentTotal + list[i].amountSpend ;
      }
      if(list[i].spendOn==='Entertainment'){
        entertainmentTotal = entertainmentTotal + list[i].amountSpend ;
      }
      if(list[i].spendOn==='FoodDrink'){
        foodTotal = foodTotal + list[i].amountSpend ;
      }  
    }
    console.log("bills" + billsTotal);console.log("invests"+ investmentTotal);console.log("fun"+entertainmentTotal);console.log("food"+foodTotal);
    return [billsTotal,investmentTotal,entertainmentTotal,foodTotal]; 
  }

  percentCalculations():Array<number>{
    let categorySpents=this.categoryTotals();
    let finalExpense=this.totalExpenses(); 
    let percentArray=[];
     for(let i=0;i<categorySpents.length;i++){
       percentArray[i]=(categorySpents[i]/finalExpense)*100;
       console.log(percentArray[i]+"%")
     }

    return percentArray;
  }

}
