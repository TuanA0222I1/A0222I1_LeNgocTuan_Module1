import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerServiceService} from "../customer/customer-service.service";
import {EmployeeServiceService} from "../employee/employee-service.service";
import {FacilityServiceService} from "../facility/facility-service.service";
import {Contract} from "../../model/contract/Contract";
import {Observable} from "rxjs";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  url = "http://localhost:3000/contract";

  constructor(private http: HttpClient,
              private customerService: CustomerServiceService,
              private employeeService: EmployeeServiceService,
              private facilityService: FacilityServiceService) {
  }

  findAllByDate(dateIn: string): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.url}?_sort=deposit,id&startDate_like=${dateIn}`).pipe(map((contracts: Contract[]) => {
      return contracts.map((contract: Contract) => {
        this.employeeService.findById(contract.employee).subscribe(value => contract.employee = value);
        this.customerService.findById(contract.customer).subscribe(value => contract.customer = value);
        this.facilityService.findById(contract.facility).subscribe(value => contract.facility = value);
        return contract
      })
    }))
  }


  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${this.url}/${id}`);
  }

  deleteById(id: number): Observable<Contract> {
    return this.http.delete<Contract>(`${this.url}/${id}`);
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.url}`, contract);
  }

  editContract(contractChose: Contract) {
    return this.http.put<Contract>(`${this.url}/${contractChose.id}`, contractChose);
  }

  save(value: Contract) {
    console.log(value);
    if (value.id == null) return this.http.post<Contract>(`${this.url}`, value);
    console.log("here");
    return this.http.put<Contract>(`${this.url}/${value.id}`, value);
  }
}
