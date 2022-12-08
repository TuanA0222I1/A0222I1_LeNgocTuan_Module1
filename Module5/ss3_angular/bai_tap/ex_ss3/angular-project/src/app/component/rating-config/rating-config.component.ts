import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating-config',
  templateUrl: './rating-config.component.html',
  styleUrls: ['./rating-config.component.css']
})
export class RatingConfigComponent implements OnInit {
@Output()
changeValueInInput: EventEmitter<number> = new EventEmitter<number>();
@Input()
  value: number;
  constructor() { }

  ngOnInit(): void {
  }

  changeValue(value: number) {
     this.value = value;
     this.changeValueInInput.emit(value);
  }
}
