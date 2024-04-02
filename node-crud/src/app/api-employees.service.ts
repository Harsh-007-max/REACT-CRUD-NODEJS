import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployeesService {
  apiUrl="http://localhost:8000";
  constructor(private _http:HttpClient) { }
  getAllEmployees(){
    return this._http.get(this.apiUrl);
  }
  getById(id:Number){
    return this._http.get(`${this.apiUrl}/${id}`);
  }
  deleteById(id:Number){
    return this._http.delete(`${this.apiUrl}/${id}`);
  }
  addEmployee(data:any){
    return this._http.post(this.apiUrl,data);
  }
  updateEmployee(id:Number,data:any){
    return this._http.put(`${this.apiUrl}/${id}`,data);
  }
}
