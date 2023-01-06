import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {CustomerServiceService} from "../service/customer-service.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

export class ValidNameCustomer {
  static checkNameExists(customerService: CustomerServiceService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return customerService
        .findByName(control.value)
        .pipe(
          map((result: boolean) =>
            result ? {usernameAlreadyExists: true} : null
          )
        );
    };
  }

}
