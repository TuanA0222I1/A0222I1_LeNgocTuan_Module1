import {Component, OnInit} from '@angular/core';
import {Todo} from "../../model/Todo";
import {ServiceTodoService} from "../../service/service-todo.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-toto',
  templateUrl: './toto.component.html',
  styleUrls: ['./toto.component.css']
})
export class TotoComponent implements OnInit {
  public url = "http://localhost:3000/todo";
  public url_base = "http://localhost:4200/todo";
  formCreate: FormGroup;
  list: Todo[] = []

  constructor(private todoService: ServiceTodoService, private router: Router, private _formBuilder: FormBuilder) {
    todoService.findAll().subscribe(value => {
      this.list = value;
    });

  }

  ngOnInit(): void {
    this.formCreate = this._formBuilder.group({
      content: ['', [Validators.required]]
    })
  }

  updateById(id: number) {
    this.todoService.updateById(id);
  }

  submitValue() {
    this.todoService.save(this.formCreate.value).subscribe(data => {
      // @ts-ignore
      window.location = this.url_base;
      this.formCreate.reset();

    });

  }
}
