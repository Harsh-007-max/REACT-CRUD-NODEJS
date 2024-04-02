import { Component } from '@angular/core';
import { ApiEmployeesService } from '../api-employees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  employees: Employee[]= [];
  constructor(private _apiEmployee: ApiEmployeesService) { }
  ngOnInit(){
    this._apiEmployee.getAllEmployees().subscribe((response:any)=>this.employees=response);
  }
}
