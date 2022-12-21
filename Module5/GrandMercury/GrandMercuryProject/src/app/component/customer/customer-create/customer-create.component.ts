import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from "../../../model/customer/Customer";
import {TypeCustomerServiceService} from "../../../service/customer/type-customer-service.service";
import {TypeCustomer} from "../../../model/customer/TypeCustomer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../../service/customer/customer-service.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
//   @Output()
//   eventCreateCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();

  customerUpdate: Customer = {};
  typeList: TypeCustomer[] = [];

  formCreate: FormGroup;

  constructor(private typeService: TypeCustomerServiceService,
              private customerService: CustomerServiceService,
              private formBuilder: FormBuilder,
  ) {
    this.typeService.findAll().subscribe(value => this.typeList = value)
    this.buildForm();
  }

  buildForm() {
    this.formCreate = this.formBuilder.group({
      id: [this.customerUpdate.id == undefined ? "0" : this.customerUpdate.id],
      name: [this.customerUpdate.name, [Validators.required]],
      address: [this.customerUpdate.address, [Validators.required]],
      phone: [this.customerUpdate.phone, [Validators.required]],
      typeCustomer: [this.customerUpdate.typeCustomer == undefined ? "" : this.customerUpdate.typeCustomer, [Validators.required]],
      dayOfBirth: [this.customerUpdate.dayOfBirth, [Validators.required]],
      email: [this.customerUpdate.email, [Validators.required]],
      avatar: [this.customerUpdate.avatar, [Validators.required]],
      description: [this.customerUpdate.description, [Validators.required]]
    })
  }
  ngOnInit(): void {

  }

  getAvatarLink(str: string) {
    return str.split("\\")[2];
  }

  save() {
    this.customerUpdate = this.formCreate.value;
    this.customerUpdate.avatar = `/assets/customer/${this.getAvatarLink(this.customerUpdate.avatar)}`;
    this.customerService.save(this.customerUpdate).subscribe(value => {
      this.customerUpdate = {};
      this.formCreate.reset();
      // @ts-ignore
      window.location = "http://localhost:4200/customer/list";
    });

  }
}
