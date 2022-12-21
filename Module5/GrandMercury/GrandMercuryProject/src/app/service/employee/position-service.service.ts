import {Injectable} from '@angular/core';
import {PositionEmpl} from "../../model/employee/PositionEmpl";

@Injectable({
  providedIn: 'root'
})
export class PositionServiceService {
  positions: PositionEmpl[] = []

  constructor() {
    this.positions.push({
      "id": 1,
      "name": "Receptionist"
    });
    this.positions.push({
      "id": 2,
      "name": "Expert"
    });
    this.positions.push({
      "id": 3,
      "name": "Manager"
    });
    this.positions.push({
      "id": 4,
      "name": "Receptionist"
    });
    this.positions.push({
      "id": 5,
      "name": "President"
    })

  }


  findAll() {
    return this.positions;
  }

  findById(id: any) {
    return this.positions.find(x => x.id == id);
  }
}
