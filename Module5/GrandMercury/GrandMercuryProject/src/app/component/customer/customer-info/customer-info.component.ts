import {Component, Input, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/Customer";
import {TypeCustomer} from "../../../model/customer/TypeCustomer";
import {TypeCustomerServiceService} from "../../../service/customer/type-customer-service.service";

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
@Input()
customer: Customer = {};
  typeList: TypeCustomer[] = [];
  constructor(private typeService: TypeCustomerServiceService) {
  this.typeService.findAll().subscribe(value => this.typeList = value)
  }

  ngOnInit(): void {
  }

}
