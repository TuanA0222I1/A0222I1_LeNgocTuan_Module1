import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerServiceService} from "../customer/customer-service.service";
import {EmployeeServiceService} from "../employee/employee-service.service";
import {FacilityServiceService} from "../facility/facility-service.service";
import {Contract} from "../../model/contract/Contract";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

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

  findAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.url}`).pipe(map((contracts: Contract[]) => {
      return contracts.map((contract: Contract) => {
        this.employeeService.findById(contract.employee).subscribe(value => contract.employee = value);
        this.customerService.findById(contract.customer).subscribe(value => contract.customer = value);
        this.facilityService.findById(contract.facility).subscribe(value => contract.facility = value);
        return contract
      })
    }));
  }

  deleteById(id: number): Observable<Contract> {
    return this.http.delete<Contract>(`${this.url}/${id}`);
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(`${this.url}`, contract);
  }
}
