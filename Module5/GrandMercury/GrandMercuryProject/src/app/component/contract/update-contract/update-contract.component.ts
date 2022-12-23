import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AttachServiceService} from "../../../service/contract/attach-service.service";
import {CustomerServiceService} from "../../../service/customer/customer-service.service";
import {EmployeeServiceService} from "../../../service/employee/employee-service.service";
import {FacilityServiceService} from "../../../service/facility/facility-service.service";
import {AttachService} from "../../../model/contract/AttachService";
import {Customer} from "../../../model/customer/Customer";
import {Employee} from "../../../model/employee/Employee";
import {Facility} from "../../../model/facility/Facility";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidatorCustomService} from "../../../service/validatorCustomer/validator-custom.service";
import {ContractService} from "../../../service/contract/contract.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Contract} from "../../../model/contract/Contract";
import {now} from "moment";

@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css']
})
export class UpdateContractComponent implements OnInit {
  @ViewChild('deposit') deposit: ElementRef;
  @ViewChild('facility') costFacility: ElementRef;
  attachServices: AttachService[] = [];
  customers: Customer[] = [];
  employees: Employee[] = [];
  facilities: Facility[] = [];

  formUpdate: FormGroup;

  contractChose: Contract = {};

  total: number = 0;

  constructor(private attachService: AttachServiceService,
              private customerService: CustomerServiceService,
              private employeeService: EmployeeServiceService,
              private facilityService: FacilityServiceService,
              private contractService: ContractService,
              private formBuilder: FormBuilder,
              private customerValidator: ValidatorCustomService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.attachServices = this.attachService.findAll();
    this.customerService.findAll().subscribe(value => this.customers = value)
    this.facilityService.findAllByName("").subscribe(value => this.facilities = value)
    this.employeeService.findAllByName("", "").subscribe(value => this.employees = value);
    if (this.router.url.includes("create")) {
      return;
    }
    this.activatedRoute.paramMap.subscribe(value => {
      let id = +value.get("id");
      this.contractService.findById(id).subscribe(value => {
        this.contractChose = value;
        this.buildForm();
        console.log(this.contractChose)
      })
    })

  }

  buildForm() {
    this.formUpdate = this.formBuilder.group({
      id: [this.contractChose.id],
      startDate: [this.contractChose.startDate, [Validators.required, this.customerValidator.checkPresentAndFuture]],
      endDate: [this.contractChose.endDate, [Validators.required, this.customerValidator.checkPresentAndFuture]],
      deposit: [this.contractChose.deposit, [Validators.required, Validators.min(0)]],
      total: [this.contractChose.total == undefined ? 0 : this.contractChose.total],
      employee: [this.contractChose.employee == undefined ? "" : this.contractChose.employee, [Validators.required]],
      customer: [this.contractChose.customer == undefined ? "" : this.contractChose.customer, [Validators.required]],
      facility: [this.contractChose.facility == undefined ? "" : this.contractChose.facility, [Validators.required]]
    }, {validator: this.customerValidator.checkDayInAndDayOut})
  }

  updateTotal() {
    let facilitySelect = this.facilityService.findById(+this.costFacility.nativeElement.value).subscribe(value => {
      this.total = value.cost - +this.deposit.nativeElement.value;
    })

  }

  saveForm() {
        this.contractService.save(this.formUpdate.value).subscribe(value => {
        this.router.navigateByUrl("/contract/list").then(r => {
          this.formUpdate.reset();
          this.contractChose = {}
          this.total = 0
        })
      });
  }
}
