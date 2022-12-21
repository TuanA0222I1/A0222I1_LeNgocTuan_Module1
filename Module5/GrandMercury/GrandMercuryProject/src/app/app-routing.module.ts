import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListFacilityComponent} from "./component/list-facility/list-facility.component";
import {HomePageComponent} from "./component/home-page/home-page.component";
import {CustomerComponent} from "./component/customer/customer.component";
import {EmployeeComponent} from "./component/employee/employee.component";
import {UpdateEmployeeComponent} from "./component/employee/update-employee/update-employee.component";
import {ContractComponent} from "./component/contract/contract.component";
import {UpdateContractComponent} from "./component/contract/update-contract/update-contract.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {
    path: 'facility/list',
    component: ListFacilityComponent
  },
  {
    path: 'customer/list',
    component: CustomerComponent
  },
  {
    path: 'contract/list',
    component: ContractComponent
  },
  {
    path: 'employee/list',
    component: EmployeeComponent

  },
  {
    path: 'employee/edit/:id',
    component: UpdateEmployeeComponent

  },
  {
    path: 'employee/create',
    component: UpdateEmployeeComponent
  },
  {
    path: 'contract/create',
    component: UpdateContractComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
