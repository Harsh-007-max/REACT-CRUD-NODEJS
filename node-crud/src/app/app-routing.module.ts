import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: InsertEmployeeComponent},
  { path: 'get/:id', component: GetEmployeeComponent },
  { path: 'update/:id', component: InsertEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
