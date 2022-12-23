import {Injectable} from '@angular/core';
import {Employee} from "../../model/employee/Employee";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {DivisionEmpl} from "../../model/employee/DivisionEmpl";
import {DivisionServiceService} from "./division-service.service";
import {PositionServiceService} from "./position-service.service";
import {EducationServiceService} from "./education-service.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  list: Employee[] = [];

  base_url = "http://localhost:3000/employee";

  constructor(private httpClient: HttpClient,
              private divisionService: DivisionServiceService,
              private positionService: PositionServiceService,
              private educationService: EducationServiceService) {
  }


  findAllByName(name: string, email: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.base_url}?_sort=id&_order=asc&name_like=${name}&email_like=${email}&status=1`).pipe(
      map((employees: Employee[]) => {
          return employees.map(employee => {
              employee.division = this.divisionService.findById(employee.division);
              employee.education = this.educationService.findById(employee.education);
              employee.position = this.positionService.findById(employee.position);
              return employee;
            }
          )
        }
      )
    );
  }

  findById(id: any): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.base_url}/${id}`) ;
  }

  updateById(employeeTemp: Employee): Observable<Employee> {
    return this.httpClient.patch(`${this.base_url}/${employeeTemp.id}`, employeeTemp);
  }

  saveNewEmployee(employeeTemp: Employee): Observable<Employee> {
    return this.httpClient.post(`${this.base_url}`, employeeTemp);
  }

  save(value: Employee): Observable<Employee> {
    if (value.id == null) {
      return this.httpClient.post(`${this.base_url}`, value);
    }
    return this.httpClient.patch(`${this.base_url}/${value.id}`, value);
  }
}
