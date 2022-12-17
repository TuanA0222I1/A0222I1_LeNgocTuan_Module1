import { Component, OnInit } from '@angular/core';
import {DictionaryServiceService} from "../../service/dictionary-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  textTranslate: string;

  constructor(private dictionary: DictionaryServiceService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
