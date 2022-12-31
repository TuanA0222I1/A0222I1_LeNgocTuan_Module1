import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Person} from "../model/Person";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  url = "http://localhost:3000/persons"

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url)
  }

  findById(id: number): Observable<Person> {
    return this.http.get(`${this.url}/${id}`)
  }

  findByName(name: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}?nameCustomer_like=${name}`);
  }

  saveById(value: Person) {
    return this.http.put(`${this.url}/${value.id}`, value);
  }
}
