import {TermAccount} from "../../model/TermAccount";
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../model/Account";
import {TermServiceService} from "../../service/term-service.service";
import {Person} from "../../model/Person";
import {AccountServiceService} from "../../service/account-service.service";
import {CustomerServiceService} from "../../service/customer-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {checkDayCreate, checkPresentAndFuture} from "../../utils/checkDay";


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  accountEdit: Account = {customer: {}};
  terms: TermAccount[] = [];
  formEdit: FormGroup;

  message: string = '';
  display: string = 'none';

  constructor(private formBuilder: FormBuilder,
              private termService: TermServiceService,
              private accountService: AccountServiceService,
              private personService: CustomerServiceService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.termService.findAll().subscribe(value => {
      this.terms = value;
    })
    if (this.route.url.includes("create")) {
      return;
    }
    this.activatedRoute.paramMap.subscribe(value => {
      this.accountService.findById(+value.get("id")).subscribe(data => {
        this.accountEdit = data;
        this.buildForm();
      }, error => {
        this.message = error.error.messageerror;
        this.display = "block"
      })
    })
  }

  buildForm() {
    this.formEdit = this.formBuilder.group({
      id: [this.accountEdit.id],
      codeCustomer: [this.accountEdit.customer.id = undefined ? null : this.accountEdit.customer.id],
      nameCustomer: [this.accountEdit.customer.name == undefined ? "" : this.accountEdit.customer.name, [Validators.required, Validators.pattern("^[A-Za-z .?!@#$%^&*]+$")]],
      dayCreate: [this.accountEdit.dayCreate, [Validators.required, checkPresentAndFuture]],
      dayTransfer: [this.accountEdit.dayTransfer, [Validators.required]],
      term: [this.accountEdit.term == undefined ? "" : this.accountEdit.term.id, [Validators.required]],
      money: [this.accountEdit.money, [Validators.required, Validators.min(10000000)]],
      rate: [this.accountEdit.rate, [Validators.required, Validators.max(1), Validators.min(0)]],
      discount: [this.accountEdit.discount, [Validators.required]]
    }, {
      validator: [checkDayCreate]
    })
  }

  saveDate() {
    if (this.accountEdit.id == undefined) {
      this.message = "Create Success!!!"
    } else {
      this.message = "Edit Success!!!"
    }

    this.personService.saveCustomer(this.getPersonInForm()).subscribe(value => {
      this.accountService.save(this.getAccountInFor(value)).subscribe(result => {
        this.display = "block";
      })
    })
  }

  resetForm() {
    this.route.navigateByUrl("/").then(data => {
      this.formEdit.reset();
      this.accountEdit = {customer: {}};
    })
  }

  private getPersonInForm(): Person {
    return {
      id: this.formEdit.value.codeCustomer,
      name: this.formEdit.value.nameCustomer
    }
  }

  private getAccountInFor(value: Person): Account {
    return {
      id: this.formEdit.value.id,
      customer: value,
      dayCreate: this.formEdit.value.dayCreate,
      dayTransfer: this.formEdit.value.dayTransfer,
      term: {id: this.formEdit.value.term},
      money: this.formEdit.value.money,
      rate: this.formEdit.value.rate,
      discount: this.formEdit.value.discount,
      status: "on"
    }
  }
}
