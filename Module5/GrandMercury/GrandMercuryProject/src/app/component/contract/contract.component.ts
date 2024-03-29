import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Contract} from "../../model/contract/Contract";
import {ContractService} from "../../service/contract/contract.service";
import {AttachService} from "../../model/contract/AttachService";
import {AttachServiceService} from "../../service/contract/attach-service.service";
import {CustomerServiceService} from "../../service/customer/customer-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContractDetailServiceService} from "../../service/contract/contract-detail-service.service";
import {changeDate} from "../../utils/TestDateByMoment";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  @ViewChild("dateFind") dayFind: ElementRef;
  // @ViewChild("customer") customer: ElementRef;
  contracts: Contract[] = [];
  attachServices: AttachService[] = [];
  page = 1;
  searchText: string = "";
  pageSize = 5;

  contractSelect: Contract = {}

  formAttachService: FormGroup;

  constructor(private contractService: ContractService,
              private customerService: CustomerServiceService,
              private attachService: AttachServiceService,
              private contractDetailsService: ContractDetailServiceService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.addAttachServiceIntoContract(undefined)
    this.attachServices = this.attachService.findAll()
    this.getList("");
    changeDate();
  }

  getList(date: string) {
    this.contractService.findAllByDate(date).subscribe(contracts => {
      this.contracts = contracts
    })
  }

  deleteIt(item: Contract) {
    this.contractSelect = item;
  }

  deleteThisItem(contractSelect: Contract) {
    this.contractService.deleteById(contractSelect.id).subscribe(value => {
      this.contractSelect = {};
      document.getElementById('deleteContract').click();
      this.ngOnInit();
    })
  }

  findList() {
    let findDay = this.dayFind.nativeElement.value;
    // let findCustomer = this.customer.nativeElement.value;
    this.getList(findDay);
  }


  addAttachServiceIntoContract(item: Contract | undefined) {
    this.formAttachService = this.formBuilder.group({
      contract: [item == undefined ? 0 : item],
      attach: ["", [Validators.required]],
      quantity: [0, [Validators.required, Validators.min(1)]]
    })
  }

  addAttachIntoContract() {
    this.contractDetailsService.saveContractDetails(this.formAttachService.value).subscribe(value => {
      this.formAttachService.reset();
      document.getElementById("addAttachModal").click();
      this.ngOnInit();
    });
  }

  refreshList() {
    this.getList('');
    this.searchText = "";
    this.contractSelect = {};
  }
}
