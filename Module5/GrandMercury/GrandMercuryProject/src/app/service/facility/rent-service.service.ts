import {Injectable} from '@angular/core';
import {RentType} from "../../model/facility/RentType";

@Injectable({
  providedIn: 'root'
})
export class RentServiceService {
  rents: RentType[] = []

  constructor() {
    this.rents.push({id: 1, name: "Year", cost: 1000})
    this.rents.push({id: 2, name: "Month", cost: 800})
    this.rents.push({id: 3, name: "Day", cost: 600})
    this.rents.push({id: 4, name: "Hour", cost: 500})
  }

  findAll(): RentType[] {
    return this.rents;
  }

  findById(rent_type_id: any) {
    return this.rents.find(x => x.id == rent_type_id);
  }
}
