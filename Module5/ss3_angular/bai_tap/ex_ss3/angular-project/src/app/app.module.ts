import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./component/calculator/calculator.component";
import { PickColorComponent } from "./component/pick-color/pick-color.component";
import { PetComponent } from './component/pet/pet.component';
import { HackernewsComponent } from './component/hackernews/hackernews.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';
import { RatingConfigComponent } from './component/rating-config/rating-config.component';
import { CountdownComponent } from './component/countdown/countdown.component';
import { ExReactFormComponent } from './component/ex-react-form/ex-react-form.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, PickColorComponent, PetComponent, HackernewsComponent, NavbarComponent, FooterComponent, CardComponent, RatingConfigComponent, CountdownComponent,   ExReactFormComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
