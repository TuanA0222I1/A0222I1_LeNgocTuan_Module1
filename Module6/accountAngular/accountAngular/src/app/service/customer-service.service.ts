import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Person} from "../model/Person";
import {logger} from "codelyzer/util/logger";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  url = "http://localhost:8080/customer"

  constructor(private http: HttpClient) {
  }

  saveCustomer(person: Person): Observable<Person> {
     if (person.id == null) {
       return this.http.post(`${this.url}/`, person);
    }
    return this.http.put(`${this.url}`, person);
  }
}
