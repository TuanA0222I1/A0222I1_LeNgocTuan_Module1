import {AbstractControl, ValidationErrors} from "@angular/forms";

export function checkInOut(control: AbstractControl): ValidationErrors | null {
  const dayIn = control.value.dayIn;
  const dayOut = control.value.dayOut;
  if (dayOut < dayIn) return {inout: true};
  return null
}

export function checkOutEX(control: AbstractControl): ValidationErrors | null {
  const dayOut = control.value.dayOut;
  const dayEx = control.value.dayEX;
  if (dayEx < dayOut) return {outex: true};
  return null
}
