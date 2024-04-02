import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiEmployeesService } from '../api-employees.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrl: './get-employee.component.css',
})
export class GetEmployeeComponent {
  employee: any = {};
  id = 0;
  constructor(
    private _router: ActivatedRoute,
    private _apiEmployee: ApiEmployeesService,
    private _navrouter: Router,
  ) {
    this.id = Number(this._router.snapshot.paramMap.get('id'));
  }
  ngOnInit() {
    this._apiEmployee
      .getById(this.id)
      .subscribe((response: any) => (this.employee = response));
  }
  deleteEmployee(id: Number) {
    this._apiEmployee.deleteById(id).subscribe((response: any) => {
      this._navrouter.navigate(['']);
    });
  }
}
