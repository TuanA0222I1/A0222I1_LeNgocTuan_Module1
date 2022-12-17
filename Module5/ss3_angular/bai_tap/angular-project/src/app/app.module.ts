import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
 import { CountdownComponent } from './component/countdown/countdown.component';
import { ExReactFormComponent } from './component/ex-react-form/ex-react-form.component';
import { FooterComponent } from './component/footer/footer.component';
import { HackernewsComponent } from './component/hackernews/hackernews.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PetComponent } from './component/pet/pet.component';
import { PickColorComponent } from './component/pick-color/pick-color.component';
import { RatingConfigComponent } from './component/rating-config/rating-config.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DictionaryComponent } from './component/dictionary/dictionary.component';
import { DetailsComponent } from './component/dictionary/details/details.component';
import { ProducesComponent } from './component/produces/produces.component';
import { UpdateProducesComponent } from './component/produces/update-produces/update-produces.component';
import { DeleteProducesComponent } from './component/produces/delete-produces/delete-produces.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
     CountdownComponent,
    ExReactFormComponent,
    FooterComponent,
    HackernewsComponent,
    NavbarComponent,
    PetComponent,
    PickColorComponent,
    RatingConfigComponent,
    DictionaryComponent,
    DetailsComponent,
    ProducesComponent,
    UpdateProducesComponent,
    DeleteProducesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
