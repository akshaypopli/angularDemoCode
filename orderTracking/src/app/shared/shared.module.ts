import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PaginationComponent } from './pagination/pagination.component';
import { OrderComponent } from './order/order.component'; 
const appRoutes=[];
@NgModule({
  declarations: [

    PaginationComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule   
  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class AppModule { }