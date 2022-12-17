import {Component, OnInit} from '@angular/core';
import {Produces} from "../../../model/Produces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProducesService} from "../../../service/produces.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-produces',
  templateUrl: './update-produces.component.html',
  styleUrls: ['./update-produces.component.css']
})
export class UpdateProducesComponent implements OnInit {
  produce: Produces = {};

  produceForm: FormGroup;

  constructor(private producesService: ProducesService,
              private router: Router,
              private activeRouter: ActivatedRoute,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe(x => {
      let id = parseInt(x.get("id"));
      this.produce = this.producesService.findById(id);
      console.log(this.produce)
      this.produceForm = this._formBuilder.group({
        id: [this.produce.id],
        name: [this.produce.name,[ Validators.required, Validators.max(50)]],
        rating: [this.produce.rating,[ Validators.required, Validators.min(0), Validators.max(5)]],
        status: [this.produce.status,Validators.required]
      }  )
    })
  }

  save() {
    console.log(this.produceForm.value);
    this.producesService.save(this.produceForm.value);
    console.log(this.produceForm)
    this.router.navigateByUrl("app-produces").then(r => {
      console.log(r);
    });
    this.produce = {};
    this.produceForm.reset();
  }

  resetForm() {
    this.produceForm = this._formBuilder.group({
      id: this.produce.id,
      name: this.produce.name,
      rating: this.produce.rating,
      status: this.produce.status
    },{
      validator: Validators.required
    })
  }
}
