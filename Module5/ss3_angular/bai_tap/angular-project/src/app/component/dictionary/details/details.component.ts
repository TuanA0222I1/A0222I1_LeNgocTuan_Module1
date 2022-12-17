import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../../../service/dictionary-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Word} from "../../../model/Word";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  result: Word = {};
  constructor(private dictionary: DictionaryServiceService, private activeRouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap : ParamMap) => {
      const key = paramMap.get("text");
      this.result = this.dictionary.findByKey(key);
    })
  }

}
