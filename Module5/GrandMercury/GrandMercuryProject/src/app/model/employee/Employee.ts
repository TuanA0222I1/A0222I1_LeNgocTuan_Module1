import {PositionEmpl} from "./PositionEmpl";
import {DivisionEmpl} from "./DivisionEmpl";
import {EducationEmpl} from "./EducationEmpl";
export interface Employee {
  id?: number;
  name?: string;
  dayOfBirth?: Date;

  id_card?: string;

  salary?: number;

  phone?: string;
  email?: string;
  address?: string;
  position?: PositionEmpl;

  division?: DivisionEmpl;

  education?: EducationEmpl;
  status?: number
}
