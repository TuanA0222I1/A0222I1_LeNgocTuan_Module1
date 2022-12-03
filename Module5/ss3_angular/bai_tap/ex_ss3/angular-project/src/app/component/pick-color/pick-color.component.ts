import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pick-color",
  templateUrl: "./pick-color.component.html",
  styleUrls: ["./pick-color.component.css"],
})
export class PickColorComponent implements OnInit {
  public backgroundNew = "azure";
  public colorNew = "black";
  constructor() {}

  ngOnInit(): void {}

  changeColor(color: string) {
    console.log(color);

    switch (color) {
      case "red":
        this.backgroundNew = color;
        this.colorNew = "white";
        break;
      case "yellow":
        this.backgroundNew = color;
        this.colorNew = "red";
        break;
      case "black":
        this.backgroundNew = color;
        this.colorNew = "azure";
        break;
      case "blue":
        this.backgroundNew = color;
        this.colorNew = "yellow";
        break;
      default:
        this.backgroundNew = "azure";
        this.colorNew = "black";
        break;
    }
  }
}
