import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer/Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
listCustomer: Customer[] = []
  base_customer_url = "http://localhost:3000/customers"
  constructor(private httpClient: HttpClient) {

  }

  findAll(){
    return this.httpClient.get<Customer[]>(this.base_customer_url);
  }

  save(customerUpdate: Customer) {
    console.log(customerUpdate);
    return this.httpClient.post(this.base_customer_url,customerUpdate);
  }

  deleteById(id: number) {
    return this.httpClient.delete(`${this.base_customer_url}/${id}`);
  }
}
