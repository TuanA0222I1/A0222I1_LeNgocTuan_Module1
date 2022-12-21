import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee/Employee";
import {EmployeeServiceService} from "../../service/employee/employee-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  list: Employee[] = []
  formSearch: FormGroup;

  employeeDelete: Employee = {};

  constructor(private employeeService: EmployeeServiceService, private formBuilder: FormBuilder) {
  }

  page = 1;
  pageSize = 4;

  ngOnInit(): void {
    this.findAllByName("", '');
    this.formSearch = this.formBuilder.group({
      name_search: [""],
      email_search: [""]
    })
  }

  findAllByName(name: string, email: string) {
    // @ts-ignore
    this.employeeService.findAllByName(name, email).subscribe((value: Employee[]) => {
       this.list = value;
    })
  }

  search() {
    this.findAllByName(this.formSearch.value.name_search, this.formSearch.value.email_search)
  }

  deleteIt(item: Employee) {
    this.employeeDelete = item;
  }

  deleteThisItem(item: Employee) {
    item.status = 0;
    this.employeeService.updateById(item).subscribe(value => {
      this.employeeDelete = {};
      // @ts-ignore
      window.location = "http://localhost:4200/employee/list"
    });
  }
}
