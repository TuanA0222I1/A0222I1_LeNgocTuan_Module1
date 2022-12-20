import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProducesService} from "../../service/produces.service";
import {Produces} from "../../model/Produces";
import {Category} from "../../model/Category";
import {CategoryServiceService} from "../../service/category-service.service";

@Component({
  selector: 'app-produces',
  templateUrl: './produces.component.html',
  styleUrls: ['./produces.component.css']
})
export class ProducesComponent implements OnInit {
  list: Produces[] = [];
  listCategory: Category[] = [];
  produces: Produces = {};

  constructor(private produceService: ProducesService, private categoryService: CategoryServiceService) {
    produceService.getAll().subscribe(value => {
      this.list = value;
     });
    categoryService.findAll().subscribe(value => {
       this.listCategory = value
    })
  }
  ngOnInit(): void {
  }


}
