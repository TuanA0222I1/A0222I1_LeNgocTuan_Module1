import {Component, Input, OnInit} from '@angular/core';
import {Produces} from "../../../model/Produces";
import {ActivatedRoute, Router} from "@angular/router";
import {ProducesService} from "../../../service/produces.service";

@Component({
  selector: 'app-delete-produces',
  templateUrl: './delete-produces.component.html',
  styleUrls: ['./delete-produces.component.css']
})
export class DeleteProducesComponent implements OnInit {
  @Input()
  produce: Produces = {};

  constructor(private activeRouter: ActivatedRoute, private producesService: ProducesService, private router: Router) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(x => {
      let id = x.get("id");
      this.producesService.findById(parseInt(id)).subscribe(value => this.produce = value);
    })
  }

  deleteThis(id: number) {
    this.producesService.removeById(id).subscribe(value => {
      this.router.navigateByUrl("/app-produces").then(r => {
        this.produce = {};
      });
    });
  }
}
