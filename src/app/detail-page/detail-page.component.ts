import { Component, OnInit } from '@angular/core';
import { SpentsService } from '../spents.service';
 import { Expense } from '../expense';
 

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor(private spentsService : SpentsService) { }

  ngOnInit() {
  	this.getData();
  }


  expenseData : Expense[];  
  finalList : Expense[];

  getData():void{
  		this.expenseData = this.spentsService.getData();
	}

 remove(element){
    this.finalList =  this.spentsService.remove(element);
  }

}
