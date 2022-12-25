import {Injectable} from '@angular/core';
import {TypeService} from "../../model/facility/TypeService";

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {
  types: TypeService[] = []

  constructor() {
    this.types.push({
        id: 1,
        name: "Villa"
      },
      {
        id: 2,
        name: "House"
      },
      {
        id: 3,
        name: "Room"
      })
  }

  findAll(): TypeService[] {
    return this.types;
  }

  findById(type_id: any) {
    return this.types.find(x => x.id == type_id);
  }
}
