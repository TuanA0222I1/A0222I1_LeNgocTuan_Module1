import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/Customer';




@Component({
  selector: 'app-ex-react-form',
  templateUrl: './ex-react-form.component.html',
  styleUrls: ['./ex-react-form.component.css']
})
export class ExReactFormComponent implements OnInit {
  customerSelect: Customer = {};
   countryList: string[] = [];
   submitted = false;
  customerForm: FormGroup  = new FormGroup({
    email: new FormControl(this.customerSelect.email, [Validators.required, Validators.pattern("^[A-Za-z0-9-.]+@([A-Za-z0-9]+(.))+[A-Za-z0-9-]{2,4}$")]),
    formPassword: new FormGroup({
      password: new FormControl(this.customerSelect.password, [Validators.required, Validators.minLength(6)]),
      passwordConfirm:  new FormControl(this.customerSelect.passwordConfirm),
    }, [this.matchPasswordTwoSide]),
    country: new FormControl(this.customerSelect.country === undefined ? '' : this.customerSelect.country, [Validators.required]),
    age: new FormControl(this.customerSelect.age, [Validators.required, Validators.min(18)]),
    gender: new FormControl(this.customerSelect.gender, [Validators.required]),
    phone: new FormControl(this.customerSelect.phone, [Validators.required, Validators.pattern('^(\\+84)[0-9]{9,10}$')])
  }  );
  constructor() {
    this.countryList.push("VietNam");
    this.countryList.push("USA");
    this.countryList.push("LAOS");
    this.countryList.push("Italy");
    this.countryList.push("SPAIN");
  }

  ngOnInit(): void {

  }

    matchPasswordTwoSide(formPass: AbstractControl) {
    const password: string = formPass.value.password;
    const passwordConfirm: string = formPass.value.passwordConfirm;
    if (password !== passwordConfirm) {
       return {passNotMatch: true};
    }
    return null;
  }
  save() {
    if (this.customerForm.valid) {
      alert("OK !!!");
      return;
    }
    this.submitted = true;
    alert("No OK!!!");
  }

  get password() {
    return this.customerForm.get("formPassword").get("password");
  }
}
