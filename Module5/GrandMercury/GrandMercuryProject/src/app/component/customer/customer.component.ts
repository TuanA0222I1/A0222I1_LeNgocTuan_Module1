import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer/Customer";
import {HttpClient} from "@angular/common/http";
import {CustomerServiceService} from "../../service/customer/customer-service.service";
import {TypeCustomerServiceService} from "../../service/customer/type-customer-service.service";
import {TypeCustomer} from "../../model/customer/TypeCustomer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  typeList: TypeCustomer[] = [];
  customerSelect: Customer = {};
  pageSize = 6;
  page = 1;
  customerEdit: Customer = {};
  formEdit: FormGroup;


  constructor(private httpClient: HttpClient,
              private formBuilder: FormBuilder,
              private customerService: CustomerServiceService,
              private typeService: TypeCustomerServiceService) {
  };



  ngOnInit(): void {
    this.buildFormEdit()
    this.customerService.findAll().subscribe(value => {
      this.customerList = value
    });
    this.typeService.findAll().subscribe(value => this.typeList = value)
  }


  changeValueItemSelect(value: Customer) {
    this.customerSelect = value;
  }

  deleteById(id: number) {
    this.customerService.deleteById(id).subscribe(value => {
      this.customerSelect = {};
      document.getElementById('exampleModal').click();
      this.ngOnInit();
    });
  }

  editItemChoice(item: Customer) {
    this.customerEdit = item;
    this.buildFormEdit();
  }

  buildFormEdit() {
    this.formEdit = this.formBuilder.group({
      id: [this.customerEdit.id == undefined ? null : this.customerEdit.id],
      name: [this.customerEdit.name, [Validators.required]],
      address: [this.customerEdit.address, [Validators.required]],
      phone: [this.customerEdit.phone, [Validators.required]],
      typeCustomer: [this.customerEdit.typeCustomer == undefined ? "" : this.customerEdit.typeCustomer, [Validators.required]],
      dayOfBirth: [this.customerEdit.dayOfBirth, [Validators.required]],
      email: [this.customerEdit.email, [Validators.required]],
      avatar: [undefined],
      description: [this.customerEdit.description, [Validators.required]]
    })
  }

  saveEdit() {
    this.formEdit.value.avatar = this.formEdit.value.avatar == null ? this.customerEdit.avatar : `/assets/customer/${this.getAvatarLink(this.formEdit.value.avatar)}`;
    this.customerService.save(this.formEdit.value).subscribe(value => {
      // @ts-ignore
      window.location = "http://localhost:4200/customer/list";
    })
  }

  getAvatarLink(str: string): string {
    if (str.includes("assets")) return str;
    return str.split("\\")[2];
  }

  resetEdit() {
    this.formEdit.reset();
    this.customerEdit = {};
  }
}
