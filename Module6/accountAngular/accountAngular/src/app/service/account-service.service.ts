import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Account} from "../model/Account";
import {TermAccount} from "../model/TermAccount";

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  url = "http://localhost:8080/account"

  constructor(private http: HttpClient) {
  }

  findAllByNameCustomer(id: string, name: string, page: number): Observable<GetResponse> {
     return this.http.get<GetResponse>(`${this.url}?id=${id}&name=${name}&page=${page}`);
  }

  findAllByIdTerm(id: number): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.url}/term/${id}`);
  }

  findById(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.url}/${id}`);
  }

  save(accountInFor: Account): Observable<Account> {
    if (accountInFor.id == null) {
      return this.http.post(`${this.url}`, accountInFor);
    }
    return this.http.put(`${this.url}`, accountInFor);
  }

  updateStatusOff(account: Account): Observable<Account> {
    return this.http.patch(`${this.url}`, account);
  }
}

export interface GetResponse {
  content: Account[];
  totalPages: number;
}
