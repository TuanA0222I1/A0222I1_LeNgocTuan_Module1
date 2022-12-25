import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../../model/customer/Customer";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
listCustomer: Customer[] = []
  base_customer_url = "http://localhost:3000/customers"
  constructor(private httpClient: HttpClient) {

  }

  findAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.base_customer_url}?_sort=name,phone&_order=asc,desc`);
  }

  save(customerUpdate: Customer): Observable<Customer> {
     return this.httpClient.post(this.base_customer_url, customerUpdate);
  }

  findById(id: any): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.base_customer_url}/${id}`) ;
  }

  findByName(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.base_customer_url}?name_like=${name}`);
  }

  deleteById(id: number): Observable<Customer> {
    return this.httpClient.delete(`${this.base_customer_url}/${id}`);
  }
}
