import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProducesService} from "../../service/produces.service";
import {Produces} from "../../model/Produces";

@Component({
  selector: 'app-produces',
  templateUrl: './produces.component.html',
  styleUrls: ['./produces.component.css']
})
export class ProducesComponent implements OnInit{
  list: Produces[] = [];
  produces: Produces = {};
  constructor(private produceService: ProducesService) {
    this.list = produceService.getAll();
  }
  ngOnInit(): void {
  }


}
