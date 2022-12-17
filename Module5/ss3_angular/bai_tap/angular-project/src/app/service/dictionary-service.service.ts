import { Injectable } from '@angular/core';
import {Word} from "../model/Word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  dictionary: Word[] = [];
  constructor() {
    this.dictionary.push({key: "Hello", value: "Xin Chao"})
    this.dictionary.push({key: "Cat", value: "Meo"})
    this.dictionary.push({key: "Dog", value: "Cho"})
    this.dictionary.push({key: "Bird", value: "Chim"})
    this.dictionary.push({key: "Fish", value: "Ca"})
  }

  findByKey(key: string) : Word {
    return this.dictionary.filter(x => x.key.toLowerCase() == key.toLowerCase())[0];
  }
}
