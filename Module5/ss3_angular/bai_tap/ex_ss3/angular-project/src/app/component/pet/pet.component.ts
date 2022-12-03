import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pet",
  templateUrl: "./pet.component.html",
  styleUrls: ["./pet.component.css"],
})
export class PetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public petList: Pet[] = [
    { name: "dog", age: 7, gender: 1, status: Status[Status.sick] },
    { name: "fish", age: 2, gender: 0, status: Status[Status.live] },
    { name: "cat", age: 4, gender: 1, status: Status[Status.die] },
    { name: "bird", age: 1, gender: 0, status: Status[Status.sick] },
    { name: "tiger", age: 2, gender: 1, status: Status[Status.live] },
  ];

  changePet(pet: Pet) {}
}
class Pet {
  name: string;
  age: number;
  gender: number;
  status: string;
}

enum Status {
  live,
  sick,
  die,
}
