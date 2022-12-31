import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee/Employee";
import {EmployeeServiceService} from "../../service/employee/employee-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PositionServiceService} from "../../service/employee/position-service.service";
import {PositionEmpl} from "../../model/employee/PositionEmpl";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  list: Employee[] = []
  formSearch: FormGroup;
  positions: PositionEmpl[] = [];
  employeeDelete: Employee = {};

  constructor(private employeeService: EmployeeServiceService,
              private activatedRouter: ActivatedRoute,
              private router: Router,
              private positionsService: PositionServiceService,
              private formBuilder: FormBuilder) {
  }

  page = 1;
  pageSize = 5;
  message: string;

  ngOnInit(): void {
    this.getMessageInUrl();
    this.positions = this.positionsService.findAll();
    this.findAllByName("", '', "");
    this.buildFormSearch();
    setTimeout(() => {
      this.message = ''
    }, 3000);
  }

  buildFormSearch() {
    this.formSearch = this.formBuilder.group({
      name_search: [""],
      email_search: [""],
      position_search: [""]
    })
  }

  findAllByName(name: string, email: string, position: string) {
    this.employeeService.findAllByName(name, email, position).subscribe((value: Employee[]) => {
      this.list = value;
    })
  }

  search() {
    this.findAllByName(this.formSearch.value.name_search, this.formSearch.value.email_search, this.formSearch.value.position_search)
  }

  deleteIt(item: Employee) {
    this.employeeDelete = item;
    console.log(item)
  }

  deleteThisItem(item: Employee) {
    item.status = 0;
    this.employeeService.updateById(item).subscribe(value => {
      this.employeeDelete = {};
      document.getElementById('deleteEmployee').click();
      this.ngOnInit();
      this.message = "delete success!!!";
    });
  }

  refreshPage() {
    this.findAllByName("", '', "");
    this.employeeDelete = {};
    this.buildFormSearch();
    this.message = '';
  }

  getMessageInUrl() {
    if (this.router.url.includes("message")) {
      this.activatedRouter.queryParams.subscribe(value => {
        if (value.message == "1") this.message = "Update success !!!!";
      })
    }
  }
}
