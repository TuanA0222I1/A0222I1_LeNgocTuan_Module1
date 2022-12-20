import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DivisionEmpl} from "../../model/employee/DivisionEmpl";

@Injectable({
  providedIn: 'root'
})
export class DivisionServiceService {
  list: DivisionEmpl[] = [];

  constructor() {
    this.list.push({
      "id": 1,
      "name": "Sale Marketing"
    });
    this.list.push({
      "id": 2,
      "name": "Administration"
    });
    this.list.push({
      "id": 3,
      "name": "Service"
    });
    this.list.push({
      "id": 4,
      "name": "Manager"
    })
  }


  findAll() {
    return this.list;
  }
}
