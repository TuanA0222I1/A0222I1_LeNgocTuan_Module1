import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/Todo";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServiceTodoService {
  public url = "http://localhost:3000/todo";
  public url_base = "http://localhost:4200/todo";
  public todo: Todo = {};

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  findAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }


  findById(id: number) {
    return this.httpClient.get<Todo>(`${this.url}/${id}`);
  }

  updateById(id: number) {
    this.findById(id).subscribe(data => {
      data.status = 0;
      return this.httpClient.patch(`${this.url}/${id}`, data)
        .subscribe(value => {
          this.router.navigateByUrl('todo').then(r => {
            // @ts-ignore
            window.location = this.url_base;
          });
        });
    });
  }

  save(value: Todo) {
    value.status = 1;
    return this.httpClient.post(`${this.url}`, value);
  }
}
