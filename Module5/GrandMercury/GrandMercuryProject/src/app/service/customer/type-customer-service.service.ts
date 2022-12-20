import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TypeCustomer} from "../../model/customer/TypeCustomer";

@Injectable({
  providedIn: 'root'
})
export class TypeCustomerServiceService {
  base_type = "http://localhost:3000/typeCustomer";

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<TypeCustomer[]>(this.base_type);
  }
}
