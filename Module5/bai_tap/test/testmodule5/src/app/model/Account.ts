import {TermAccount} from "./TermAccount";

export interface Account {
  readonly id?: number;
  readonly codeCustomer?: number,
  dayCreate?: Date,
  dayTransfer?: Date,
  term?: TermAccount,
  money?: number,
  rate?: number,
  discount?: string
}
