import { Injectable } from '@angular/core';
import {Produces} from "../model/Produces";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProducesService {
  list: Produces[] = [];
  url = "http://localhost:3000/produces";
  constructor(private httpClient: HttpClient) {
  }
  getAll() {
    return this.httpClient.get<Produces[]>(this.url);
  }

  removeById(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`)
     // this.list = this.list.filter(x => x.id != id);
  }
  findById(id: number) {
     return this.httpClient.get(`${this.url}/${id}`);
  }

  save(produces: Produces) {
    if(produces.id == null) return this.httpClient.post(`${this.url}`,produces);
    return this.httpClient.patch(`${this.url}/${produces.id}`,produces);
     // this.list = this.list.map(x => x.id == produces.id ? x = produces: x);
  }
}
