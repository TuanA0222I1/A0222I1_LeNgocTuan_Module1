import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponentComponent} from "./module/employee-module/employee-component.component";


const routes: Routes = [
  {
  path: "", pathMatch: "full", redirectTo: "employee"
},
  {
  path: "employee", component: EmployeeComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
