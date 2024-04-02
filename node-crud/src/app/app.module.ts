import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { FormsModule } from '@angular/forms';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetEmployeeComponent,
    InsertEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
