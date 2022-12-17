import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  public number1: number;
  public number2: number;
  public number3: number;
  public error1: string;
  public error2: string;

  ngOnInit(): void {}

  checkEmpty(number1: number, number2: number, cal: string): boolean {
    let flag = false;
    if (number1 === undefined) {
      this.error1 = "input something";
      flag = true;
    }
    if (number2 === undefined) {
      this.error2 = "input something";
      flag = true;
    }
    if (number2 === 0 && cal === '/') {
      this.error2 = "number 2 in division not be 0";
      flag = true;
    }
    return flag;
  }

  resetError() {
    this.error1 = "";
    this.error2 = "";
  }
  calculator(cal: string) {
    this.resetError();
    if (this.checkEmpty(this.number1, this.number2, cal)) { return; }
    switch (cal) {
      case "+":
        this.number3 = this.number1 + this.number2;
        break;
      case "-":
        this.number3 = this.number1 - this.number2;
        break;
      case "*":
        this.number3 = this.number1 * this.number2;
        break;
      case "/":
        this.number3 = this.number1 / this.number2;
        break;
    }
  }
}
