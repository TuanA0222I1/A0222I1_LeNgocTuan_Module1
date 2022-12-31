import {Component, OnInit} from '@angular/core';
import {Account} from "../../../model/Account";
import {ActivatedRoute, Router} from "@angular/router";
import {TermServiceService} from "../../../service/term-service.service";
import {TermAccount} from "../../../model/TermAccount";
import {ServiceAccountService} from "../../../service/service-account.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {checkDayCreate, checkPresentAndFuture} from "../../../utils/checkDay";
import {Person} from "../../../model/Person";
import {PersonServiceService} from "../../../service/person-service.service";

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  accountEdit: Account = {};
  terms: TermAccount[] = [];
  formEdit: FormGroup;

  personEdit: Person = {};

  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private accountService: ServiceAccountService,
              private personService: PersonServiceService,
              private termService: TermServiceService) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.activatedRoute.paramMap.subscribe(value => {
      this.accountService.findById(+value.get("id")).subscribe(data => {
        this.accountEdit = data;
        this.personService.findById(data.codeCustomer).subscribe(x => {
          this.personEdit = x;
          this.terms = this.termService.findAll();
          this.buildForm();
        })

      })
    })
  }


  saveDate() {
    this.accountService.updateById(this.getAccountInForm()).subscribe(value => {
      this.personService.saveById(this.getPersonInForm()).subscribe(x => {
        this.backListUrl()
      })
    })
  }

  getAccountInForm(): Account {
    return {
      id: this.formEdit.value.id,
      codeCustomer: this.formEdit.value.codeCustomer,
      dayCreate: this.formEdit.value.dayCreate,
      dayTransfer: this.formEdit.value.dayTransfer,
      term: this.formEdit.value.term,
      money: this.formEdit.value.money,
      rate: this.formEdit.value.rate,
      discount: this.formEdit.value.discount
    }
  }

  getPersonInForm(): Person {
    return {
      id: this.formEdit.value.codeCustomer,
      nameCustomer: this.formEdit.value.nameCustomer,
    }
  }

  confirmBackListButton() {
    if (confirm("You want to back home and cancel edit this account?")) {
      this.backListUrl()
    }
  }

  backListUrl() {
    this.router.navigateByUrl("/home").then(result => {
      this.accountEdit = {};
      this.formEdit.reset();
    })
  }

  buildForm() {
    this.formEdit = this.formBuilder.group({
      id: [this.accountEdit.id],
      codeCustomer: [this.accountEdit.codeCustomer],
      nameCustomer: [this.personEdit.nameCustomer, [Validators.required, Validators.pattern("^[A-Za-z .?!@#$%^&*]+$")]],
      dayCreate: [this.accountEdit.dayCreate, [Validators.required, checkPresentAndFuture]],
      dayTransfer: [this.accountEdit.dayTransfer, [Validators.required]],
      term: [this.accountEdit.term, [Validators.required]],
      money: [this.accountEdit.money, [Validators.required, Validators.min(10000000)]],
      rate: [this.accountEdit.rate, [Validators.required]],
      discount: [this.accountEdit.discount, [Validators.required]]
    }, {
      validator: [checkDayCreate]
    })
  }
}
