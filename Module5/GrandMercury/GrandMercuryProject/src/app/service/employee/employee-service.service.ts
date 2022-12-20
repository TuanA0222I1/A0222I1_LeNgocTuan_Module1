import { Injectable } from '@angular/core';
import {Employee} from "../../model/employee/Employee";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  list: Employee[] = [];

  base_url = "http://localhost:3000/employee";
  constructor(private httpClient: HttpClient) {
  }

  findAllByName(value: string){
    return this.httpClient.get<Employee[]>(`${this.base_url}?name_like=${value}&status=1`);
  }

  findById(id: number){
    return this.httpClient.get<Employee>(`${this.base_url}/${id}`);
  }

  updateById(employeeTemp: Employee) {
    return this.httpClient.patch(`${this.base_url}/${employeeTemp.id}`,employeeTemp);
  }
}
