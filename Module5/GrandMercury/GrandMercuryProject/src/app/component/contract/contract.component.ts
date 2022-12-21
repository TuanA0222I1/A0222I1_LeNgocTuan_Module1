import {Component, OnInit} from '@angular/core';
import {Contract} from "../../model/contract/Contract";
import {ContractService} from "../../service/contract/contract.service";
import {AttachService} from "../../model/contract/AttachService";
import {AttachServiceService} from "../../service/contract/attach-service.service";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];
  attachServices: AttachService[] = [];
  page = 1;

  pageSize = 4;

  contractSelect: Contract = {}
  constructor(private contractService: ContractService, private attachService: AttachServiceService) {
  }

  ngOnInit(): void {
    this.attachServices = this.attachService.findAll()
    this.contractService.findAll().subscribe(value => this.contracts = value);
  }

  deleteIt(item: Contract) {
    this.contractSelect = item;
  }

  deleteThisItem(contractSelect: Contract) {
     this.contractService.deleteById(contractSelect.id).subscribe(value => {
      this.contractSelect = {};
      // @ts-ignore
      window.location = "http://localhost:4200/contract/list";
    })
  }
}
