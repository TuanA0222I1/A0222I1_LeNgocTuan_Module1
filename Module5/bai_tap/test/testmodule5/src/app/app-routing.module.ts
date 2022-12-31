import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainListComponent} from "./component/main-list/main-list.component";
import {EditAccountComponent} from "./component/main-list/edit-account/edit-account.component";


const routes: Routes = [
  {
    path: "", pathMatch: "full", redirectTo: "home"
  },
  {
    path: "home", component: MainListComponent
  },
  {
    path: "edit/:id", component: EditAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
