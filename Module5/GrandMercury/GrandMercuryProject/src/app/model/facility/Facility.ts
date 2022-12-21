import {RentType} from "./RentType";
import {TypeService} from "./TypeService";


export interface Facility{
  id?: number;
  name?: string;
  image?: string;
  area?: number;
  cost?: number
  max_people?: number
  pool_area?: number
  rent_type_id?: RentType
  service_type_id?: TypeService
}
