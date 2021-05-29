import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost/customer-app-api/api/employees');
  }

  insertData(data: Employee){
    return this.httpClient.post('http://localhost/customer-app-api/api/addEmployee', data);
  }

  deleteData(id: Employee){
    return this.httpClient.delete('http://localhost/customer-app-api/api/deleteEmployee/'+id);
  }

  getEmployeeById(id: Employee){
    return this.httpClient.get('http://localhost/customer-app-api/api/employee/'+id);
  }

  updateData(id: Employee, data: Employee){
    return this.httpClient.put('http://localhost/customer-app-api/api/updateEmployee/'+id, data);
  }


}
