import {Component, OnInit} from '@angular/core';
import {Employee} from "../../model/employee/Employee";
import {EmployeeServiceService} from "../../service/employee/employee-service.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  list: Employee[] = []
  formSearch: FormGroup;

  employeeDelete: Employee = {};

  constructor(private employeeService: EmployeeServiceService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.findAllByName("");
    this.formSearch = this.formBuilder.group({
      name_search: [""]
    })
  }

  findAllByName(value: string) {
    this.employeeService.findAllByName(value).subscribe(value => {
      this.list = value;
    })
  }

  search() {
    this.findAllByName(this.formSearch.value.name_search)
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
