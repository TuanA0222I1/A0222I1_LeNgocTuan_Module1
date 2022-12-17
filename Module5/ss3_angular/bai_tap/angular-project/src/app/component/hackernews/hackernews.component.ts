import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/model/Article";
@Component({
  selector: "app-hackernews",
  templateUrl: "./hackernews.component.html",
  styleUrls: ["./hackernews.component.css"],
})
export class HackernewsComponent implements OnInit {
  public articles: Article[] = [];
  constructor() {
    this.articles.push({
      id: 1,
      name: "LEATHERFACE",
      dateUpdate: new Date("2022/12/15"),
      url: "https://www.youtube.com/watch?v=dXaRoe3Zj0o",
    });
    this.articles.push({
      id: 2,
      name: "THỨ 6 NGÀY 13",
      dateUpdate: new Date("2012/12/22"),
      url: "https://www.youtube.com/watch?v=y7aMMnfT2hg",
    });
    this.articles.push({
      id: 3,
      name: "TRANSFORMERS",
      dateUpdate: new Date("2021/11/12"),
      url: "https://www.youtube.com/watch?v=fLHejDNA_CM",
    });
    this.articles.push({
      id: 4,
      name: "HANNIBAL LECTER",
      dateUpdate: new Date("2019/12/31"),
      url: "https://www.youtube.com/watch?v=AJv8iOXlfaw",
    });
    this.articles.push({
      id: 5,
      name: "TRIANGLE",
      dateUpdate: new Date("2019/12/31"),
      url: "https://www.youtube.com/watch?v=ErSsDWXbEvI",
    });
  }

  ngOnInit(): void {}
}
