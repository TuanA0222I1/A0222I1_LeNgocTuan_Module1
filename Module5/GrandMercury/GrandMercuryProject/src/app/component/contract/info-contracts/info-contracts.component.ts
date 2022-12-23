import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../../service/contract/contract.service";
import {ContractDetailServiceService} from "../../../service/contract/contract-detail-service.service";
import {AttachServiceService} from "../../../service/contract/attach-service.service";
import {ContractDetail} from "../../../model/contract/ContractDetail";

@Component({
  selector: 'app-info-contracts',
  templateUrl: './info-contracts.component.html',
  styleUrls: ['./info-contracts.component.css']
})
export class InfoContractsComponent implements OnInit {
  contractDetaisSelect: ContractDetail = {};
  constructor(private contractService: ContractService,
              private contractDetailsService: ContractDetailServiceService,
              private attachService: AttachServiceService) {
  }

  ngOnInit(): void {
  }

}
