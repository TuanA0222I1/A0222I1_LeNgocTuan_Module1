import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from "../../../service/employee/employee-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../../model/employee/Employee";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PositionServiceService} from "../../../service/employee/position-service.service";
import {EducationServiceService} from "../../../service/employee/education-service.service";
import {DivisionServiceService} from "../../../service/employee/division-service.service";
import {PositionEmpl} from "../../../model/employee/PositionEmpl";
import {EducationEmpl} from "../../../model/employee/EducationEmpl";
import {DivisionEmpl} from "../../../model/employee/DivisionEmpl";
import * as moment from "moment";
import {now} from "moment";
import {logger} from "codelyzer/util/logger";
import {ValidatorCustomService} from "../../../service/validatorCustomer/validator-custom.service";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeUpdate: Employee = {};
  positions: PositionEmpl[] = [];
  divisions: DivisionEmpl[] = [];
  educations: EducationEmpl[] = [];
  formUpdate: FormGroup;

  constructor(private employeeService: EmployeeServiceService,
              private positionServiceService: PositionServiceService,
              private educationServiceService: EducationServiceService,
              private divisionServiceService: DivisionServiceService,
              private router: Router,
              private activatedRouter: ActivatedRoute,
              private formBuilder: FormBuilder,
              private validatorCustom: ValidatorCustomService) {

  }

  ngOnInit(): void {
    this.positions = this.positionServiceService.findAll();
    this.divisions = this.divisionServiceService.findAll();
    this.educations = this.educationServiceService.findAll()
    if (this.router.url.includes("create")) {
      this.buildThisForm();
      return;
    }
    this.activatedRouter.paramMap.subscribe(value => {
      let id = +value.get("id");
      this.employeeService.findById(id).subscribe(value => {
        this.employeeUpdate = value;
        this.buildThisForm()
      });
    });
  }

  buildThisForm() {
    this.formUpdate = this.formBuilder.group({
      id: [this.employeeUpdate.id],
      name: [this.employeeUpdate.name, [Validators.required, Validators.maxLength(50)]],
      salary: [this.employeeUpdate.salary, [Validators.required, Validators.min(0)]],
      phone: [this.employeeUpdate.phone, [Validators.required, Validators.pattern("^([0]|(\\+84))([0-9]{9})$")]],
      email: [this.employeeUpdate.email, [Validators.required, Validators.pattern("^[\\w\\-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],
      id_card: [this.employeeUpdate.id_card, [Validators.required, Validators.pattern("^([0-9]{9})$")]],
      address: [this.employeeUpdate.address, [Validators.required]],
      position: [this.employeeUpdate.position == undefined ? "" : this.employeeUpdate.position, [Validators.required]],
      division: [this.employeeUpdate.division == undefined ? "" : this.employeeUpdate.division, [Validators.required]],
      education: [this.employeeUpdate.education == undefined ? "" : this.employeeUpdate.education, [Validators.required]],
      dayOfBirth: [this.employeeUpdate.dayOfBirth == undefined ? new Date(now()) : this.employeeUpdate.dayOfBirth, [Validators.required, this.validatorCustom.check18Age]],
      status: [1]
    })
  }

  saveDate() {

    this.employeeService.save(this.formUpdate.value).subscribe(value => {
      this.router.navigateByUrl("/employee/list").then(resolve => {
        this.employeeUpdate = {};
        this.formUpdate.reset()
      })
    });

    // this.employeeService.updateById(this.formUpdate.value).subscribe(value => {
    //   this.router.navigateByUrl("/employee/list").then(resolve => {
    //     this.employeeUpdate = {};
    //     this.formUpdate.reset()
    //   })
    // });
  }
}
