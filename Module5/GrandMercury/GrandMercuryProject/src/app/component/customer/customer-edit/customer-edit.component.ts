import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TypeCustomerServiceService} from "../../../service/customer/type-customer-service.service";
import {CustomerServiceService} from "../../../service/customer/customer-service.service";
import {Customer} from "../../../model/customer/Customer";
import {TypeCustomer} from "../../../model/customer/TypeCustomer";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editFrom: FormGroup;

  @Input()
  customerEdit: Customer = {};
  typeList: TypeCustomer[] = [];

  constructor(private typeService: TypeCustomerServiceService,
              private customerService: CustomerServiceService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.typeService.findAll().subscribe(value => this.typeList = value);
    if(this.customerEdit != undefined){
       this.buildForm();
    }
  }

  buildForm() {
    this.editFrom = this.formBuilder.group({
      id: [this.customerEdit.id],
      name: [this.customerEdit.name, [Validators.required]],
      address: [this.customerEdit.address, [Validators.required]],
      phone: [this.customerEdit.phone, [Validators.required]],
      typeCustomer: [this.customerEdit.typeCustomer == undefined ? "" : this.customerEdit.typeCustomer, [Validators.required]],
      dayOfBirth: [this.customerEdit.dayOfBirth, [Validators.required]],
      email: [this.customerEdit.email, [Validators.required]],
      avatar: [this.customerEdit.avatar, [Validators.required]],
      description: [this.customerEdit.description, [Validators.required]]
    })
  }


  edit() {

  }
}

