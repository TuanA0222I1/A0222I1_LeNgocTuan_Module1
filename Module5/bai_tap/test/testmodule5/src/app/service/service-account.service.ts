import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../model/Account";

@Injectable({
  providedIn: 'root'
})
export class ServiceAccountService {
  url = "http://localhost:3000/account";

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.url}?_sort=id&_order=asc`);
  }

  findAllByIdAccount(id: string): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.url}?_sort=id&_order=asc&id=${id}`);
  }

  findById(id: number): Observable<Account> {
    return this.httpClient.get<Account>(`${this.url}/${id}`);
  }

  updateById(value: Account): Observable<Account> {
    return this.httpClient.put(`${this.url}/${value.id}`, value);
  }

  deleteById(id: number): Observable<Account> {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
