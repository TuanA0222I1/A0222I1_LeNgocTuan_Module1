import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListAccountComponent} from "./component/list-account/list-account.component";
import {CreateComponent} from "./component/create/create.component";


const routes: Routes = [
  {path: "", component: ListAccountComponent},
  {path: "create", component: CreateComponent},
  {path: "edit/:id", component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
