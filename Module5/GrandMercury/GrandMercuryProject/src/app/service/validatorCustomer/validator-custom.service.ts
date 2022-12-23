import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors} from "@angular/forms";
import * as moment from "moment/moment";
import {now} from "moment/moment";

@Injectable({
  providedIn: 'root'
})
export class ValidatorCustomService {

  constructor() {
  }

  checkPresentAndFuture(control: AbstractControl): ValidationErrors | null {
    let dayCheck = moment(control.value);
    let dayNow = moment(new Date(now()));
    if (moment.duration(dayCheck.diff(dayNow)).days() < 0) {
      return {presentAndFuture: true};
    }
    return null;
  }

  check18Age(control: AbstractControl): ValidationErrors | null {
    let dayCheck = moment(control.value);
    let dayNow = moment(new Date(now()));
    if (moment.duration(dayNow.diff(dayCheck)).asYears() < 18) {
      return {small18: true};
    }
    return null;
  }

  checkDayInAndDayOut(control: AbstractControl): ValidationErrors | null {
    const startDate = moment(control.get("startDate").value);
    const endDate = moment(control.get("endDate").value);
    if (moment.duration(endDate.diff(startDate)).asDays() < 0) {
      return {nomatch: true}
    }
    return null
  }
}
