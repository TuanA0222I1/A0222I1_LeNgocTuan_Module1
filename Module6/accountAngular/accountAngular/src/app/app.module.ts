import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAccountComponent } from './component/list-account/list-account.component';
import {HttpClientModule} from "@angular/common/http";
import { CreateComponent } from './component/create/create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireStorageModule} from "@angular/fire/storage";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    ListAccountComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
