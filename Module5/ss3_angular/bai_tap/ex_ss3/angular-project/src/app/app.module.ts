import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./component/calculator/calculator.component";
import { PickColorComponent } from "./component/pick-color/pick-color.component";
import { PetComponent } from './component/pet/pet.component';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, PickColorComponent, PetComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
