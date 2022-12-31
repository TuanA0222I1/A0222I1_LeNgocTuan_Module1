import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServiceAccountService} from "../../service/service-account.service";
import {Account} from "../../model/Account";
import {TermServiceService} from "../../service/term-service.service";
import {TermAccount} from "../../model/TermAccount";
import {FormBuilder} from "@angular/forms";
import {Person} from "../../model/Person";
import {PersonServiceService} from "../../service/person-service.service";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  @ViewChild("id") id: ElementRef
  @ViewChild("name_search") name: ElementRef
  page = 1;
  pageSize = 4;

  accountDelete: Account = {};
  list: Account[] = [];
  persons: Person[] = [];
  terms: TermAccount[] = [];


  constructor(private accountService: ServiceAccountService,
              private personService: PersonServiceService,
              private formBuilder: FormBuilder,
              private termService: TermServiceService) {
  }

  ngOnInit(): void {
    this.personService.findAll().subscribe(value => this.persons = value)
    this.terms = this.termService.findAll();
    this.getList(undefined);
  }

  getList(id: string | undefined) {
    if (id != undefined) {
      this.accountService.findAllByIdAccount(id).subscribe(value => {
        this.list = value;
      })
    } else {
      this.accountService.findAll().subscribe(value => {
        this.list = value;
      })
    }
  }

  deleteThisItem() {
    this.accountService.deleteById(this.accountDelete.id).subscribe(value => {
      this.accountDelete = {};
      document.getElementById('deleteEmployee').click();
      this.ngOnInit()
    })

  }

  deleteIt(item: Account) {
    this.accountDelete = item;
  }

  searchById() {
    let id = this.id.nativeElement.value;
    this.accountService.findAllByIdAccount(id).subscribe(value => {
      this.list = value;
    })
  }

  refreshPage() {
    this.getList("");
  }

  findAllByNamePerson() {
    this.personService.findByName(this.name.nativeElement.value).subscribe(value => {
      this.list = this.checkResultInList(this.list, value);
    })
  }

  checkResultInList(accounts: Account[], persons: Person[]): Account[] {
    let newArray: Account[] = [];
    for (const account of accounts) {
      for (const person of persons) {
        if (account.codeCustomer == person.id) {
          newArray.push(account);
        }
      }
    }
    return newArray;
  }
}
