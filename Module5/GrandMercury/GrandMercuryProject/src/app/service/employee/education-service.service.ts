import {Injectable} from '@angular/core';
import {DivisionEmpl} from "../../model/employee/DivisionEmpl";
import {HttpClient} from "@angular/common/http";
import {EducationEmpl} from "../../model/employee/EducationEmpl";

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {
  list: EducationEmpl[] = [];

  constructor() {
    this.list.push({
      "id": 1,
      "name": "Intermediate"
    });
    this.list.push({
      "id": 2,
      "name": "DegreeOfAssociate"
    });
    this.list.push({
      "id": 3,
      "name": "Undergraduate"
    });
    this.list.push({
      "id": 4,
      "name": "PostGraduate"
    });

  }


  findAll() {
    return this.list;
  }
}
