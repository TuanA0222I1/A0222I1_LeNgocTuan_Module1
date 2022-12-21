import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AttachServiceService} from "../../../service/contract/attach-service.service";
import {CustomerServiceService} from "../../../service/customer/customer-service.service";
import {EmployeeServiceService} from "../../../service/employee/employee-service.service";
import {FacilityServiceService} from "../../../service/facility/facility-service.service";
import {AttachService} from "../../../model/contract/AttachService";
import {Customer} from "../../../model/customer/Customer";
import {Employee} from "../../../model/employee/Employee";
import {Facility} from "../../../model/facility/Facility";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorCustomService} from "../../../service/validatorCustomer/validator-custom.service";
import {ContractService} from "../../../service/contract/contract.service";
import {Router} from "@angular/router";

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

  formDate: FormGroup

  total: number = 0;

  constructor(private attachService: AttachServiceService,
              private customerService: CustomerServiceService,
              private employeeService: EmployeeServiceService,
              private facilityService: FacilityServiceService,
              private contractService: ContractService,
              private formBuilder: FormBuilder,
              private customerValidator: ValidatorCustomService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.attachServices = this.attachService.findAll();
    this.customerService.findAll().subscribe(value => this.customers = value)
    this.facilityService.findAllByName("").subscribe(value => this.facilities = value)
    this.employeeService.findAllByName("", "").subscribe(value => this.employees = value);
    this.formUpdate = this.formBuilder.group({
      id: [],
      startDate: ['', [Validators.required, this.customerValidator.checkPresentAndFuture]],
      endDate: ['', [Validators.required, this.customerValidator.checkPresentAndFuture]],
      deposit: [0, [Validators.required, Validators.min(0)]],
      total: [this.total],
      employee: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      facility: ['', [Validators.required]]
    }, [this.customerValidator.checkDayInAndDayOut])
  }

  updateTotal() {
    let facilitySelect = this.facilityService.findById(+this.costFacility.nativeElement.value).subscribe(value => {
      this.total = value.cost - +this.deposit.nativeElement.value;
      console.log(this.total)
    })

  }

  saveForm() {
    console.log(this.formUpdate);
    // this.contractService.saveContract(this.formUpdate.value).subscribe(value => {
    //   this.router.navigateByUrl("/contract/list").then(r => {
    //     this.formUpdate.reset();
    //     this.total = 0
    //   })
    // });
  }
}
