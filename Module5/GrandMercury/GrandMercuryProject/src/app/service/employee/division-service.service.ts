import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DivisionEmpl} from "../../model/employee/DivisionEmpl";

@Injectable({
  providedIn: 'root'
})
export class DivisionServiceService {
  divisions: DivisionEmpl[] = [];

  constructor() {
    this.divisions.push({
      "id": 1,
      "name": "Sale Marketing"
    });
    this.divisions.push({
      "id": 2,
      "name": "Administration"
    });
    this.divisions.push({
      "id": 3,
      "name": "Service"
    });
    this.divisions.push({
      "id": 4,
      "name": "Manager"
    })
  }


  findAll() {
    return this.divisions;
  }

  findById(id: any): DivisionEmpl {
    return this.divisions.find(x => x.id == id);
  }
}
