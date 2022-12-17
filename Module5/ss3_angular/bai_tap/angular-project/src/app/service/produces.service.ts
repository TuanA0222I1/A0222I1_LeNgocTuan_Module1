import { Injectable } from '@angular/core';
import {Produces} from "../model/Produces";

@Injectable({
  providedIn: 'root'
})
export class ProducesService {
  list: Produces[] = [];
  constructor() {
    this.list.push({id: 1, name: "Pen", rating: 4, status: "Good"})
    this.list.push({id: 2, name: "Pencil", rating: 5, status: "Very Good"})
    this.list.push({id: 3, name: "Earse", rating: 1, status: "Noob"})
    this.list.push({id: 4, name: "Ruler", rating: 2, status: "Bad"})
  }
  getAll(): Produces[]{
    return this.list;
  }

  removeById(id: number) {
    console.log("here" + id);
    this.list = this.list.filter(x => x.id != id);
  }
  findById(id: number): Produces{
    return this.list.filter(x => x.id == id)[0];
  }

  save(produces: Produces) {
    console.log(produces)
    // @ts-ignore
    // this.findById(produces.id) = produces;
  }
}
