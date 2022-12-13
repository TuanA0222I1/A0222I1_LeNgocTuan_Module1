import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Customer} from "../../../model/Customer";


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  @Output()
  eventCreateCustomer: EventEmitter<Customer> = new EventEmitter<Customer>();
customerCreate: Customer = {}
  constructor() { }

  ngOnInit(): void {
  }
getAvatarLink(str: string){
  return str.split("\\")[2];
}
  save() {
     this.customerCreate.id = Math.floor(Math.random() * 101);
    this.customerCreate.avatar = `/assets/customer/${this.getAvatarLink(this.customerCreate.avatar)}`;
    console.log(this.customerCreate);
    this.eventCreateCustomer.emit(this.customerCreate);
    this.customerCreate = {};
  }
}
