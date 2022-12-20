import {Component, OnInit} from '@angular/core';
import {Produces} from "../../../model/Produces";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProducesService} from "../../../service/produces.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../../model/Category";
import {CategoryServiceService} from "../../../service/category-service.service";

@Component({
  selector: 'app-update-produces',
  templateUrl: './update-produces.component.html',
  styleUrls: ['./update-produces.component.css']
})
export class UpdateProducesComponent implements OnInit {
  produceEdit: Produces = {};

  categoryList: Category[] = []
  produceForm: FormGroup;


  constructor(private producesService: ProducesService,
              private categoryService: CategoryServiceService,
              private router: Router,
              private activeRouter: ActivatedRoute,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(data => this.categoryList = data)

    if (this.router.url.includes("create")) {
      this.buildForm();
      return;
    }
    this.buildForm();
    this.activeRouter.paramMap.subscribe(x => {
      this.producesService.findById(+x.get("id")).subscribe(value => {
        this.produceEdit = value;
        this.buildForm();
      });
    })
  }

  buildForm() {
    this.produceForm = this._formBuilder.group({
      id: [this.produceEdit.id],
      name: [this.produceEdit.name, [Validators.required, Validators.maxLength(50)]],
      rating: [this.produceEdit.rating, [Validators.required, Validators.min(0), Validators.max(5)]],
      status: [this.produceEdit.status, Validators.required],
      category: [this.produceEdit.category == undefined ? "" : this.produceEdit.category, [Validators.required]]
    })

  }

  save() {
     this.producesService.save(this.produceForm.value).subscribe(data => {
       this.router.navigateByUrl("app-produces").then(r => {
        this.produceEdit = {};
        this.produceForm.reset();
      });

    })
  }

  resetForm() {
    this.buildForm();
  }
}
