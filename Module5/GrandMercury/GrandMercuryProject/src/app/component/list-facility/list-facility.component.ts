import {Component, OnInit, Output} from '@angular/core';
import {Facility} from "../../model/Facility";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  listFacility: Facility[] = [];
  constructor() {
    this.listFacility.push({id: 1, name: "Deluxe King", image: "/assets/facility/deluxe-king-4-cr-800x450.png", area: 50.2 })
    this.listFacility.push({id: 2, name: "Deluxe Thor", image: "/assets/facility/img-1.jpg", area: 30.1 })
    this.listFacility.push({id: 3, name: "North King", image: "/assets/facility/north-hotel-room.jpg", area: 100.5 })
    this.listFacility.push({id: 5, name: "Deluxe ", image: "/assets/facility/VIP-ROOM-815x655.jpg", area: 200 })
    this.listFacility.push({id: 4, name: "Spa", image: "/assets/facility/VIP-Room-Couple-The-Nang-Spa-at-Pullman-Danang-Beach-Resort-10.jpg", area: 100 })
    this.listFacility.push({id: 6, name: "King Size", image: "/assets/facility/vip-king-size-bed-room.jpg", area: 150 })
  }

  ngOnInit(): void {
    console.log(this.listFacility);
  }

}
