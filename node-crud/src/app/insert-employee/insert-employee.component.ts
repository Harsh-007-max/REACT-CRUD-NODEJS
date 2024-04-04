import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEmployeesService } from '../api-employees.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrl: './insert-employee.component.css',
})
export class InsertEmployeeComponent {
  constructor(
    private _router: Router,
    private _apiEmployee: ApiEmployeesService,
    private _route: ActivatedRoute,
  ) { }

  data: any = {
    Name: '',
    Description: '',
    Position: '',
    Salary: '',
  };

  idToEdit = -1;
  ngOnInit() {
    this.idToEdit = Number(this._route.snapshot.paramMap.get('id'));
    if (this.idToEdit != null) {
      this._apiEmployee.getById(this.idToEdit).subscribe((response) => {
        this.data = { ...response };
      });
    }
  }
  submit(form: NgForm) {
    this.fillData(form);
    if (this.idToEdit ==0) {
      this.addEmployee(form);
    } else {
      this.updateEmployee(form);
    }
  }
  fillData(form: NgForm) {
    this.data = {
      Name: form.controls['Name'].value,
      Description: form.controls['Description'].value,
      Position: form.controls['Name'].value,
      Salary: form.controls['Salary'].value,
    };
  }
  addEmployee(form: NgForm) {
    this._apiEmployee.addEmployee(this.data).subscribe((response) => {
      this._router.navigate(['']);
    });
  }
  updateEmployee(form: NgForm) {
    this._apiEmployee
      .updateEmployee(this.idToEdit, this.data)
      .subscribe((response) => {
        this._router.navigate(['']);
      });
  }
}
