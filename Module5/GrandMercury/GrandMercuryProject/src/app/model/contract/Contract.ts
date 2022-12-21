import {Employee} from "../employee/Employee";
import {Facility} from "../facility/Facility";
import {Customer} from "../customer/Customer";

export interface Contract {
  id?: number,
  startDate?: Date,
  endDate?: Date,
  deposit?: number,
  total?: number,
  employee?: Employee,
  customer?: Customer,
  facility?: Facility
}
