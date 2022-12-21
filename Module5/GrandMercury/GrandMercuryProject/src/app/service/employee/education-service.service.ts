import {Injectable} from '@angular/core';
import {EducationEmpl} from "../../model/employee/EducationEmpl";

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {
  educations: EducationEmpl[] = [];

  constructor() {
    this.educations.push({
      "id": 1,
      "name": "Intermediate"
    });
    this.educations.push({
      "id": 2,
      "name": "Degree Of Associate"
    });
    this.educations.push({
      "id": 3,
      "name": "Under Graduate"
    });
    this.educations.push({
      "id": 4,
      "name": "Post Graduate"
    });

  }


  findAll() {
    return this.educations;
  }

  findById(id: any) {
    return this.educations.find(x => x.id == id);
  }
}
