import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {checkInOut, checkOutEX} from "../../utils/ValidDay";

@Component({
  selector: 'app-test-date',
  templateUrl: './test-date.component.html',
  styleUrls: ['./test-date.component.css']
})
export class TestDateComponent implements OnInit {
  formCheck: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildThisForm();
  }

  buildThisForm() {
    this.formCheck = this.formBuilder.group({
      dayIn: ['', [Validators.required]],
      dayOut: ['', [Validators.required]],
      dayEX: ['', [Validators.required]]
    }, {validator: [checkInOut,checkOutEX] })
  }

  checkInOut
}
