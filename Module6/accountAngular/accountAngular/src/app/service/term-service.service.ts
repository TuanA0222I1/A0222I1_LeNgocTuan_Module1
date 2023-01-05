import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TermAccount} from "../model/TermAccount";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TermServiceService {
  url = "http://localhost:8080/term"

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<TermAccount[]> {
    return this.http.get<TermAccount[]>(this.url);
  }
}


