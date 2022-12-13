import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFacilityComponent} from "./component/list-facility/list-facility.component";
import {HomePageComponent} from "./component/home-page/home-page.component";
import {CustomerComponent} from "./component/customer/customer.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomePageComponent},
  {
    path: 'facility/list',
    component: ListFacilityComponent
  },
  {
    path: 'customer/list',
    component: CustomerComponent
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
