import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PetComponent} from "./component/pet/pet.component";
import {CalculatorComponent} from "./component/calculator/calculator.component";
 import {ExReactFormComponent} from "./component/ex-react-form/ex-react-form.component";
import {CountdownComponent} from "./component/countdown/countdown.component";
import {HackernewsComponent} from "./component/hackernews/hackernews.component";
import {PickColorComponent} from "./component/pick-color/pick-color.component";
import {RatingConfigComponent} from "./component/rating-config/rating-config.component";
import {DictionaryComponent} from "./component/dictionary/dictionary.component";
import {DetailsComponent} from "./component/dictionary/details/details.component";
import {ProducesComponent} from "./component/produces/produces.component";
import {DeleteProducesComponent} from "./component/produces/delete-produces/delete-produces.component";
import {UpdateProducesComponent} from "./component/produces/update-produces/update-produces.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'hackernews'},
  {
    path: "pet", component: PetComponent
  },
  {
    path: "calculator", component: CalculatorComponent
  },

  {
    path: "reactForm", component: ExReactFormComponent
  },
  {
    path: "app-produces", component: ProducesComponent
  },
  {
    path: "countdown", component: CountdownComponent
  },
  {
    path: "hackernews", component: HackernewsComponent
  },
  {
    path: "pickColor", component: PickColorComponent
  },
  {
    path: "rating", component: RatingConfigComponent
  },
  {
    path: "dictionary", component: DictionaryComponent
  },
  {
    path: "details/:text", component: DetailsComponent
  },
  {
    path: "app-produces/delete/:id", component: DeleteProducesComponent
  },
  {
    path: "app-produces/update/:id", component: UpdateProducesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
