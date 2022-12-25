import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee/Employee";
import {EmployeeServiceService} from "../../service/employee/employee-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PositionServiceService} from "../../service/employee/position-service.service";
import {PositionEmpl} from "../../model/employee/PositionEmpl";

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
              private positionsService: PositionServiceService,
              private formBuilder: FormBuilder) {
  }

  page = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.positions = this.positionsService.findAll();
    this.findAllByName("", '', "");
    this.buildFormSearch();
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
  }

  deleteThisItem(item: Employee) {
    item.status = 0;
    this.employeeService.updateById(item).subscribe(value => {
      this.employeeDelete = {};
      document.getElementById('deleteEmployee').click();
      this.ngOnInit();
    });
  }

  refreshPage() {
    this.findAllByName("", '', "");
    this.employeeDelete = {};
    this.buildFormSearch();

  }
}
