import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {ListFacilityComponent} from './component/list-facility/list-facility.component';
import {BackTopComponent} from './component/back-top/back-top.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {CustomerComponent} from './component/customer/customer.component';
import {CustomerInfoComponent} from './component/customer/customer-info/customer-info.component';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EmployeeComponent} from './component/employee/employee.component';
import {UpdateEmployeeComponent} from './component/employee/update-employee/update-employee.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContractComponent} from './component/contract/contract.component';
import {UpdateContractComponent} from './component/contract/update-contract/update-contract.component';
import {PipeCurrencyCustomPipe} from "./utils/PipeCurrencyCustom";
import { InfoContractsComponent } from './component/contract/info-contracts/info-contracts.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    PipeCurrencyCustomPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListFacilityComponent,
    BackTopComponent,
    HomePageComponent,
    CustomerComponent,
    CustomerInfoComponent,
    CustomerCreateComponent,
    EmployeeComponent,
    UpdateEmployeeComponent,
    ContractComponent,
    UpdateContractComponent,
    InfoContractsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    Ng2SearchPipeModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
