import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { PaginationComponent } from './shared/src/app/shared/pagination/pagination.component';
import { OrderComponent } from './shared/src/app/shared/order/order.component'; 
const appRoutes=[];
@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    HeaderBarComponent,
    OrderStatusComponent,
    PaginationComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
