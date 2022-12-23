import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {ContractDetail} from "../../model/contract/ContractDetail";
import {HttpClient} from "@angular/common/http";
import {ContractService} from "./contract.service";

@Injectable({
  providedIn: 'root'
})
export class ContractDetailServiceService {
  url = "http://localhost:3000/contractDetails"

  constructor(private http: HttpClient, private contractService: ContractService) {
  }

  findAll(): Observable<ContractDetail[]> {
    return this.http.get<ContractDetail[]>(this.url);
  }

  saveContractDetails(value: ContractDetail): Observable<ContractDetail> {

    let temp = {
      id: null,
      contract: value.contract.id,
      attach: value.attach.id,
      quantity: value.quantity
    }
    this.contractService.findById(value.contract.id).subscribe(data => {
      data.total += (value.quantity * value.attach.cost);
      this.contractService.save(data).subscribe(data => {

      });
    })
    return this.http.post<ContractDetail>(this.url, temp);


  }
}
