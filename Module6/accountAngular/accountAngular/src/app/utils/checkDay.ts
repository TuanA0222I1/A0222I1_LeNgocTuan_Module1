import {AbstractControl, ValidationErrors} from "@angular/forms";
import * as moment from "moment";
import {now} from "moment";

export function checkDayCreate(control: AbstractControl): ValidationErrors | null {
  const dayCreate = control.value.dayCreate;
  const dayTransfer = control.value.dayTransfer;
  if (dayCreate > dayTransfer) return {createfail: true};
  return null;
}

export function checkPresentAndFuture(control: AbstractControl): ValidationErrors | null {
  let dayCheck = moment(control.value);
  let dayNow = moment(new Date(now()));
  if (moment.duration(dayCheck.diff(dayNow)).days() < 0) {
    return {presentAndFuture: true};
  }
  return null;
}

