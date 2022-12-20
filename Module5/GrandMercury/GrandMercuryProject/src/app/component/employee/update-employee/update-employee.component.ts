import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from "../../../service/employee/employee-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../../model/employee/Employee";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PositionServiceService} from "../../../service/employee/position-service.service";
import {EducationServiceService} from "../../../service/employee/education-service.service";
import {DivisionServiceService} from "../../../service/employee/division-service.service";
import {PositionEmpl} from "../../../model/employee/PositionEmpl";
import {EducationEmpl} from "../../../model/employee/EducationEmpl";
import {DivisionEmpl} from "../../../model/employee/DivisionEmpl";


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeUpdate: Employee = {};
  positionEmpls: PositionEmpl[] = [];
  divisionEmpls: DivisionEmpl[] = [];
  educationEmpls: EducationEmpl[] = [];
  formUpdate: FormGroup;

  constructor(private employeeService: EmployeeServiceService,
              private positionServiceService: PositionServiceService,
              private educationServiceService: EducationServiceService,
              private divisionServiceService: DivisionServiceService,
              private router: Router,
              private activatedRouter: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.positionEmpls = this.divisionServiceService.findAll();
    this.divisionEmpls = this.divisionServiceService.findAll();
    this.educationEmpls = this.educationServiceService.findAll()
  }

  ngOnInit(): void {
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
    console.log(this.employeeUpdate)
    this.formUpdate = this.formBuilder.group({
      id: [this.employeeUpdate.id],
      name: [this.employeeUpdate.name],
      dayOfBirth: [this.employeeUpdate.dayOfBirth],
      id_card: [this.employeeUpdate.id_card],
      salary: [this.employeeUpdate.salary],
      phone: [this.employeeUpdate.phone],
      email: [this.employeeUpdate.email],
      address: [this.employeeUpdate.address],
      position: [this.employeeUpdate.position == undefined ? "" : this.employeeUpdate.position],
      division: [this.employeeUpdate.division == undefined ? "" : this.employeeUpdate.division],
      eduction: [this.employeeUpdate.eduction == undefined ? "" : this.employeeUpdate.eduction],
      status: [this.employeeUpdate.status]
    })
  }


  saveDate() {
    console.log(this.formUpdate.value);
  }
}
