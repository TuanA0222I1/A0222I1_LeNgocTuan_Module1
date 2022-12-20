import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/customer/Customer";
import {HttpClient} from "@angular/common/http";
import {CustomerServiceService} from "../../service/customer/customer-service.service";
import {TypeCustomerServiceService} from "../../service/customer/type-customer-service.service";
import {TypeCustomer} from "../../model/customer/TypeCustomer";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerList: Customer[] = [];
  typeList: TypeCustomer[] = [];
  customerSelect: Customer = {};
  constructor(private httpClient: HttpClient,
              private customerService: CustomerServiceService,
              private typeService: TypeCustomerServiceService) {
    this.customerService.findAll().subscribe(value => {this.customerList = value});
    this.typeService.findAll().subscribe(value => this.typeList = value)
  };



  ngOnInit(): void {
  }


  changeValueItemSelect(value: Customer) {
    this.customerSelect = value;
  }

  deleteById(id: number) {
    this.customerService.deleteById(id).subscribe(value => {
      this.customerSelect = {};
      // @ts-ignore
      window.location = "http://localhost:4200/customer/list";
    });
  }
}
