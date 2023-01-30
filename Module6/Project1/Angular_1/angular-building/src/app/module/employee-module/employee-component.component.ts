import {Component, OnInit} from '@angular/core';
import {EmployeeServiceService} from "./service/employee-service.service";

import {GenderServiceService} from "./service/gender-service.service";
import {DepartmentServiceService} from "./service/department-service.service";
import {SalaryScaleServiceService} from "./service/salary-scale-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Gender} from "./model/Gender";
import {Employee} from "./model/Employee";
import {SalaryScale} from "./model/SalaryScale";
import {Department} from "./model/Department";
import {checkBirthday, checkNameExists, checkPasswordConfirm, checkTrim} from "./utils/CustomerValidate";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  formGroup: FormGroup;

  employees: Employee[] = [];

  genders: Gender[] = [];

  salaries: SalaryScale[] = [];

  departments: Department[] = [];
  totalPages: number = 0;

  pageNumber: number = 0;

  name_search: string = '';
  cmnd_search: string = '';
  address_search: string = '';
  department_search: string = '';
  fileChose: File = null;


  searchForm: boolean = false;
  message: string = '';

  alert: boolean = false;

  constructor(private employeeService: EmployeeServiceService,
              private genderService: GenderServiceService,
              private formBuilder: FormBuilder,
              private departmentService: DepartmentServiceService,

              private storage: AngularFireStorage,
              private salaryService: SalaryScaleServiceService) {
    this.genderService.findAll().subscribe(value => this.genders = value);
    this.departmentService.findAll().subscribe(value => this.departments = value);
    this.salaryService.findAll().subscribe(value => this.salaries = value);
  }

  ngOnInit(): void {
    this.buildForm();
    this.findAllWithCondition(this.name_search, this.cmnd_search, this.address_search, this.department_search, 0);
    setTimeout(() => this.alert = false, 3000);
  }

  findAllWithCondition(name: string, id_card: string, address: string, department: string, page: number) {
    if (page > this.totalPages) return;
    this.employeeService.findAllByNameAndIdCardAndAddressAndDepartment(name, id_card, address, department, page).subscribe(value => {
      this.employees = value.content;
      this.pageNumber = value.number;
      this.totalPages = value.totalPages;
    });
  }

  refreshPage() {
    this.department_search = '';
    this.address_search = '';
    this.cmnd_search = '';
    this.name_search = '';
    this.ngOnInit();
  }

  deleteAll() {
    this.employeeService.updateAllStatusIsOff().subscribe(value => {
      this.message = 'xóa tất cả thành công!!!';
      this.alert = true;
      document.getElementById("statusModal").click();
      this.ngOnInit();
    });
  }

  deleteById(id: string) {
    this.employeeService.updateStatusById(id).subscribe(value => {
      this.message = `xóa nhân viên với id ${id} thành công!!!`;
      this.alert = true;
      document.getElementById("deleteModal").click();
      this.ngOnInit();
    })
  }

  findById(id: string) {
    this.employeeService.findById(id).subscribe(value => {
        document.getElementById("name_delete").innerText = value.name;
        (<HTMLInputElement>document.getElementById("id_delete")).value = value.id;
      },
      error => {
        this.message = 'Không tìm thấy bất kì người nào với id là ' + id;
        this.alert = true;
        this.ngOnInit();
      })
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      avatar: ['', [Validators.required]],
      name: ['', [Validators.required, checkTrim]],
      address: ['', [Validators.required, checkTrim]],
      birthday: ['', [Validators.required, checkBirthday]],
      email: ['', [Validators.required, Validators.pattern("^[\\w\\-.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],
      phone: ['', [Validators.required, Validators.pattern("^([0]|(\\+84))([0-9]{9})$")]],
      salaryScale: ['', [Validators.required]],
      department: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required, Validators.min(1)]],
      id_card: ['', [Validators.required, Validators.pattern("^([0-9]{12})$")]],
      account: ['', [Validators.required, checkTrim], [checkNameExists(this.employeeService)]],
      password: ['', [Validators.required, checkTrim]],
      passwordConfirm: ['', [Validators.required]]
    }, {
      validator: [checkPasswordConfirm]
    })
  }

  saveForm() {
    // // @ts-ignore
    // this.formGroup.value = {
    //   account: "NRTDATTEBAYO",
    //   avatar: "https://firebasestorage.googleapis.com/v0/b/projectspring1-3…lry.png?alt=media&token=92426b27-69a4-47f3-a394-c7710c9ed879",
    //   birthday: "2023-01-11",
    //   department: "2",
    //   email: "90accwno@gmail.com",
    //   gender: "2",
    //   id_card: "512414142421",
    //   name: "erase",
    //   address: "DN",
    //   password: "123123",
    //   passwordConfirm: "123123",
    //   phone: "0912385124",
    //   salary: 512414,
    //   salaryScale: "4"
    // }
    this.employeeService.save(this.formGroup).subscribe(value => {
      console.log(value)
      this.message = `tạo mới thành công nhân viên tên ${value.name}`;
      document.getElementById("createModal").click();
      this.alert = true;
      console.log(this.message);
      this.ngOnInit();
    });

  }

  saveAllForm() {
    const filePath = `employeeAvatar/${Date.now()}${this.fileChose.name}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.fileChose)
      .snapshotChanges()
      .pipe(
        finalize(() => {
           fileRef.getDownloadURL().subscribe(url => {
             this.formGroup.value.avatar = url;
             this.saveForm();
          });
        })
      )
      .subscribe();
    // this.saveForm();
  }


}
