import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {logger} from "codelyzer/util/logger";
import {EmployeeServiceService} from "../service/employee-service.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export function checkBirthday(control: AbstractControl): ValidationErrors | null {
  let now = new Date().toISOString().substring(0, 10);
  let birthday = control.value;
  if (now < birthday) return {birthdaypast: true};
  return null;
}

export function checkPasswordConfirm(abstractControl: AbstractControl): ValidationErrors | null {
  let password = abstractControl.value.password;
  let passwordConfirm = abstractControl.value.passwordConfirm;
  if (passwordConfirm != password) return {passworderror: true}
  return null;
}

export function checkTrim(abstractControl: AbstractControl): ValidationErrors | null {
  let check = abstractControl.value;
  if (check.trim() == '') return {trim: true}
  return null;
}

export function checkNameExists(accountService: EmployeeServiceService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return accountService
      .findByName(control.value)
      .pipe(
        map((result: boolean) => {
            return result ? {usernameAlreadyExists: true} : null
          }
        )
      );
  };
}

export function checkPhoneExists(accountService: EmployeeServiceService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return accountService
      .findByPhone(control.value)
      .pipe(
        map((result: boolean) => {

            return result ? {phoneAlreadyExists: true} : null
          }
        )
      );
  };
}export function checkEmailExists(accountService: EmployeeServiceService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return accountService
      .findByEmail(control.value)
      .pipe(
        map((result: boolean) => {
          console.log('email: ' + result)
            return result ? {emailAlreadyExists: true} : null
          }
        )
      );
  };
}
export function checkIdCardExists(accountService: EmployeeServiceService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return accountService
      .findByIdCard(control.value)
      .pipe(
        map((result: boolean) => {

            return result ? {idCardAlreadyExists: true} : null
          }
        )
      );
  };
}
