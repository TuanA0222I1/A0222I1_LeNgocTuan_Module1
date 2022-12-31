import {Injectable} from '@angular/core';
import {TermAccount} from "../model/TermAccount";

@Injectable({
  providedIn: 'root'
})
export class TermServiceService {
  terms: TermAccount[] = []

  constructor() {
    this.terms.push({id: 1, name: "3 Month"})
    this.terms.push({id: 2, name: "6 Month"})
    this.terms.push({id: 3, name: "1 Year"})
    this.terms.push({id: 4, name: "5 Year"})
    this.terms.push({id: 5, name: "3 No Term"})
  }

  findAll() {
    return this.terms;
  }
}
