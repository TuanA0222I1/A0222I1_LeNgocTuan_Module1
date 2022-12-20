import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EducationEmpl} from "../../model/employee/EducationEmpl";
import {PositionEmpl} from "../../model/employee/PositionEmpl";

@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {
  list: PositionEmpl[] = []

  constructor() {
    this.list.push({
      "id": 1,
      "name": "Receptionist"
    });
    this.list.push({
      "id": 2,
      "name": "Expert"
    });
    this.list.push({
      "id": 3,
      "name": "Manager"
    });
    this.list.push({
      "id": 4,
      "name": "Receptionist"
    });
    this.list.push({
      "id": 5,
      "name": "President"
    })

  }


  findAll() {
    return this.list;
  }
}
