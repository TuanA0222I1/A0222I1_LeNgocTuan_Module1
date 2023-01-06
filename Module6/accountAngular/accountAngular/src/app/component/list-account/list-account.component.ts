import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AccountServiceService} from "../../service/account-service.service";
import {Account} from "../../model/Account";
import {TermAccount} from "../../model/TermAccount";
import {TermServiceService} from "../../service/term-service.service";

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {
  @ViewChild("nameSearchInInput") nameSearchInput: ElementRef;
  @ViewChild("idInInput") idSearchInput: ElementRef;
  accounts: Account[] = [];

  terms: TermAccount[] = [];

  totalPage: number = 0;
  nameSearch: string = '';
  idSearch: string = '';
  accountSelect: Account = {customer: {name: ""}, term: {name: ""}};
  flag: boolean = false;

  constructor(private accountService: AccountServiceService, private termService: TermServiceService) {
  }

  ngOnInit(): void {
    this.termService.findAll().subscribe(value => this.terms = value);
    this.getListInPage(this.idSearch, this.nameSearch, 0);
    setTimeout(() => this.flag = false, 3000);
  }

  getListInPage(id: string, name: string, i: number) {
    this.accountService.findAllByNameCustomer(id, name, i).subscribe(value => {
      this.accounts = value.content;
      this.totalPage = value.totalPages;
    })
  }

  refreshPage() {
    this.nameSearch = '';
    this.idSearch = '';
    this.nameSearchInput.nativeElement.value = '';
    this.idSearchInput.nativeElement.value = '';
    this.getListInPage(this.idSearch, this.nameSearch, 0);
  }

  deleteItem() {
    this.accountSelect.status = 'off';
    this.accountService.updateStatusOff(this.accountSelect).subscribe(value => {
      this.flag = true;
      document.getElementById("deleteModal").click();
      this.ngOnInit();
      this.accountSelect = {customer: {name: ""}, term: {name: ""}};
    });
  }

  searchByName() {
    this.nameSearch = this.nameSearchInput.nativeElement.value;
    this.idSearch = this.idSearchInput.nativeElement.value;
    this.getListInPage(this.idSearch, this.nameSearch, 0);
  }

  searchByIdTerm(id: number) {
    this.accountService.findAllByIdTerm(id).subscribe(value => {
      console.log(value)
       document.getElementById("body").innerHTML = this.getListById(value);
    })
  }

  // getPageLink(id: number, page: number) {
  //   let content: string = '<ul class="pagination justify-content-center">';
  //   for (let i = 0; i < page; i++) {
  //     content += `<li class="page-item">
  //                   <button class="page-link" onclick="this.searchByIdTerm(${id},${page})">${i + 1}</button>
  //                 </li>`
  //   }
  //   return content + '</ul>';
  // }

  getListById(value: Account[]): string {
    console.log(value)
    let content: string = '';
    let index = 0;
    for (const item of value) {
      content += `<tr>
                    <td>${++index}</td>
                    <td>${item.id}</td>
                    <td>${item.customer.id}</td>
                    <td>${item.customer.name}</td>
                    <td>${item.dayCreate}</td>
                    <td>${item.dayTransfer}</td>
                    <td>${item.term.name}</td>
                    <td>${item.money}</td>
                    <td>${item.rate}</td>
                    <td>${item.discount}</td>
                  </tr>`
    }
    return content;
  }
}
