import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';

import { SpentsService } from './spents.service';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { NewExpenseComponent } from './new-expense/new-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPageComponent,
    NewExpenseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: DetailPageComponent
      },
       {
        path: 'newExpense',
        component: NewExpenseComponent
      }
    ])
  ],
  providers: [SpentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
