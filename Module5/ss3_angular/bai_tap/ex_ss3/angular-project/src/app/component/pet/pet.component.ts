import { Component, OnInit } from "@angular/core";
import { Pet } from "src/app/model/Pet";
import { Status } from "src/app/utils/Status";
@Component({
  selector: "app-pet",
  templateUrl: "./pet.component.html",
  styleUrls: ["./pet.component.css"],
})
export class PetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public petList: Pet[] = [
    { name: "dog", age: 7, gender: 1, status: Status[Status.Sick] },
    { name: "fish", age: 2, gender: 0, status: Status[Status.Live] },
    { name: "cat", age: 4, gender: 1, status: Status[Status.Die] },
    { name: "bird", age: 1, gender: 0, status: Status[Status.Sick] },
    { name: "tiger", age: 2, gender: 1, status: Status[Status.Live] },
  ];

  changePet(pet: Pet) {}
}
