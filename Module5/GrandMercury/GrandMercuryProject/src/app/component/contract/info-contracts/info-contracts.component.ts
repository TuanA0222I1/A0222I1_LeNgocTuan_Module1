import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../../service/contract/contract.service";
import {ContractDetailServiceService} from "../../../service/contract/contract-detail-service.service";
import {AttachServiceService} from "../../../service/contract/attach-service.service";
import {ContractDetail} from "../../../model/contract/ContractDetail";
import {Contract} from "../../../model/contract/Contract";
import {AttachService} from "../../../model/contract/AttachService";
import {ActivatedRoute} from "@angular/router";
import {Customer} from "../../../model/customer/Customer";
import {Employee} from "../../../model/employee/Employee";
import {Facility} from "../../../model/facility/Facility";
import {CustomerServiceService} from "../../../service/customer/customer-service.service";
import {EmployeeServiceService} from "../../../service/employee/employee-service.service";
import {FacilityServiceService} from "../../../service/facility/facility-service.service";
import {TypeCustomerServiceService} from "../../../service/customer/type-customer-service.service";
import {TypeCustomer} from "../../../model/customer/TypeCustomer";

@Component({
  selector: 'app-info-contracts',
  templateUrl: './info-contracts.component.html',
  styleUrls: ['./info-contracts.component.css']
})
export class InfoContractsComponent implements OnInit {
  contractDetailsSelect: ContractDetail[] = [];
  contract: Contract = {};
  attachServiceSelect: AttachService = {};
  customerSelect: Customer = {};
  employeeSelect: Employee = {};
  facilitySelect: Facility = {};

  constructor(private contractService: ContractService,
              private typeService: TypeCustomerServiceService,
              private contractDetailsService: ContractDetailServiceService,
              private attachServiceService: AttachServiceService,
              private customerService: CustomerServiceService,
              private employeeService: EmployeeServiceService,
              private facilityService: FacilityServiceService,
              private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.activatedRouter.paramMap.subscribe(value => {
      let id = +value.get("id");
      this.contractService.findById(id).subscribe(value => {
        this.contract = value;
        this.contractDetailsService.findByIdContract(id).subscribe(value => {
          this.contractDetailsSelect = value;
        })
        this.customerService.findById(value.customer).subscribe(value => {
          this.customerSelect = value;
        })
        this.employeeService.findById(value.employee).subscribe(value => {
          this.employeeSelect = value;
        })
        this.facilityService.findById(value.facility).subscribe(value => {
          this.facilitySelect = value;
        })
      })
    })
  }

  resetAll() {
    this.contractDetailsSelect = [];
    this.contract = {};
    this.attachServiceSelect = {};
    this.customerSelect = {};
    this.employeeSelect = {};
    this.facilitySelect = {};
  }

  findAttachService(attach: AttachService) {
    this.attachServiceSelect = this.attachServiceService.findById(attach)
    console.log(this.attachServiceSelect)
    console.log(attach)
  }
}
