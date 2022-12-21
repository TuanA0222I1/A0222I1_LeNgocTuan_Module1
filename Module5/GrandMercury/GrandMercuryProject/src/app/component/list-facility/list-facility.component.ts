import {Component, OnInit, Output} from '@angular/core';
import {Facility} from "../../model/facility/Facility";
import {TypeService} from "../../model/facility/TypeService";
import {RentType} from "../../model/facility/RentType";
import {TypeServiceService} from "../../service/facility/type-service.service";
import {RentServiceService} from "../../service/facility/rent-service.service";
import {FacilityServiceService} from "../../service/facility/facility-service.service";

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilities: Facility[] = [];

  types: TypeService[] = [];

  rents: RentType[] = []

  page = 1;
  pageSize = 6;

  facilitySelect: Facility = {}
  constructor(private typeService: TypeServiceService,
              private rentService: RentServiceService,
              private facilityService: FacilityServiceService) {
  }

  ngOnInit(): void {
    this.types = this.typeService.findAll();
    this.rents = this.rentService.findAll();
    this.facilityService.findAllByName("").subscribe(value => this.facilities = value)
  }

}
