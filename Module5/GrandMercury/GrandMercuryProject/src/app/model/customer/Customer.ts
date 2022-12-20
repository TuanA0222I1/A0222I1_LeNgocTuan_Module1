import {TypeCustomer} from "./TypeCustomer";


export interface Customer{
  readonly id?: number;
  name?: string;
  dayOfBirth?: Date;

  typeCustomer?: TypeCustomer;

  address?: string;

  phone?: string;

  email?: string;

  avatar?: string;

  description? : string;
}
