import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
maxTime = 10;
  timeOut: number;
  flag = true;
  constructor() { }

  ngOnInit(): void {
  }
  countTime(value: number): number {
    return  value - 1;
  }
checkTime(value: number): boolean {
    return value === 0;
}
  startTime() {
    this.timeOut = this.maxTime;
    this.flag = false;
    const interval = setInterval(() => {
      console.log(this.timeOut);
      console.log(this.checkTime(this.timeOut));
      console.log(this.flag);
      if (this.checkTime(this.timeOut) || this.flag) {
         clearInterval(interval) ;
      } else {
        this.timeOut =  this.countTime(this.timeOut);
      }
  }, 1000);
  }


  resetTime() {
    this.timeOut = this.maxTime;
    this.flag = true;
  }

  pauseTime() {
    this.flag = true;
  }
}
