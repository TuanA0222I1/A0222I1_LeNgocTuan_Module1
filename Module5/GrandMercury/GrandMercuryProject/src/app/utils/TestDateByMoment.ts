import {now} from "moment/moment";
import * as moment from "moment";

export function changeDate() {
  let dayNow = new Date(now());

  let change = dayNow.setMonth(dayNow.getMonth() + 8);

}
