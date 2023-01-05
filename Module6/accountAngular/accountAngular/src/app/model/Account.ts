import {TermAccount} from "./TermAccount";
import {Person} from "./Person";

export interface Account {
  readonly id?: number;
  customer?: Person,
  dayCreate?: Date,
  dayTransfer?: Date,
  term?: TermAccount,
  money?: number,
  rate?: number,
  discount?: string,
  status? : string
}
