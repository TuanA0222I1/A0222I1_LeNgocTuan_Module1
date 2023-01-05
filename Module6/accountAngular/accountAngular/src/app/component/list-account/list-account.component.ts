import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AccountServiceService} from "../../service/account-service.service";
import {Account} from "../../model/Account";

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  @ViewChild("nameSearchInInput") nameSearchInput: ElementRef;
  @ViewChild("idInInput") idSearchInput: ElementRef;
  accounts: Account[] = [];

  totalPage: number = 0;
  nameSearch: string = '';
  accountSelect: Account = {customer: {name: ""}};

  constructor(private accountService: AccountServiceService) {
  }

  ngOnInit(): void {
    this.getListInPage('', this.nameSearch, 0);
  }

  getListInPage(id: string, name: string, i: number) {
    this.accountService.findAllByNameCustomer(id, name, i).subscribe(value => {
      this.accounts = value.content;
      this.totalPage = value.totalPages;
    })
  }

  refreshPage() {
    this.nameSearch = '';
    this.nameSearchInput.nativeElement.value = '';
    this.idSearchInput.nativeElement.value = '';
    this.getListInPage('',this.nameSearch, 0);
  }

  deleteItem() {
    this.accountSelect.status = 'off';
    this.accountService.updateStatusOff(this.accountSelect).subscribe(value => {
      document.getElementById("deleteModal").click();
      this.ngOnInit();
      this.accountSelect = {customer: {name: ""}};
    });
  }

  searchByName() {
    this.nameSearch = this.nameSearchInput.nativeElement.value;
    this.getListInPage(this.idSearchInput.nativeElement.value,this.nameSearch, 0);
  }
}
