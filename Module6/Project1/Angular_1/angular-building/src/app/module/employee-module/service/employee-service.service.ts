import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "../model/Employee";
import {Observable} from "rxjs";
import {EmployeeDTO} from "../dto/EmployeeDTO";
import {AbstractControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  url = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) {
  }

  findAllByNameAndIdCardAndAddressAndDepartment(name: string, id_card: string, address: string, department: string, page: number): Observable<GetResponse> {
    return this.http.get<GetResponse>(`${this.url}?name=${name}&id_card=${id_card}&address=${address}&department=${department}&page=${page}`);
  }

  updateAllStatusIsOff(): Observable<number> {
    return this.http.delete<number>(`${this.url}`);
  }

  updateStatusById(id: string): Observable<number> {
    return this.http.delete<number>(`${this.url}/${id}`);
  }

  findById(id: string): Observable<Employee> {
    console.log(id);
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  findByName(value: string): Observable<boolean> {
    return this.http.get<boolean>(`http://localhost:8080/account/${value}`);
  }

  findByIdCard(value: string): Observable<boolean>{
    return this.http.get<boolean>(`${this.url}/exists?id_card=${value}`);
  }

  save(value: AbstractControl): Observable<Employee> {
    return this.http.post<Employee>(`${this.url}`,this.getEmployeeDTO(value));
  }

  private getEmployeeDTO(control: AbstractControl): EmployeeDTO {
    return {
      avatar: control.value.avatar,
      name: control.value.name,
      birthday: control.value.birthday,
      gender: control.value.gender,
      salary: control.value.salary,
      id_card: control.value.id_card,
      address: control.value.address,
      phone: control.value.phone,
      email: control.value.email,
      salaryScale: control.value.salaryScale,
      department: control.value.department,
      account: control.value.account,
      password: control.value.password
    }
  }
}

interface GetResponse {
  content: Employee[];
  totalPages: number;
  number: number;
}
