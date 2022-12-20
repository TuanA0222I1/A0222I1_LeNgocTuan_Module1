import {Injectable} from '@angular/core';
import {Category} from "../model/Category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  list: Category[] = []
  url = " http://localhost:3000/category";
  constructor(private httpClient: HttpClient) {
  }
  findAll(){
    return this.httpClient.get<Category[]>(this.url);
  }
}
