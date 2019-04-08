import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component'; 
const appRoutes=[];
@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    HeaderBarComponent
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
