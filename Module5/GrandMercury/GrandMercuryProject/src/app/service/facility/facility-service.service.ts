import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility/Facility";
import {map} from "rxjs/operators";
import {RentServiceService} from "./rent-service.service";
import {TypeServiceService} from "./type-service.service";
@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  base_url = "http://localhost:3000/facility";

  constructor(private http: HttpClient, private rentService: RentServiceService, private typeFacility: TypeServiceService) {

  }

  findAllByName(name: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.base_url}?name_like=${name}`);
  }

  findById(id: any): Observable<Facility> {
    return this.http.get<Facility>(`${this.base_url}/${id}`).pipe(map((facility: Facility) =>{
       return this.converter(facility);
    }
  ));
  }

  converter(facility: Facility): Facility {
    facility.rent_type_id = this.rentService.findById(facility.rent_type_id);
    facility.service_type_id = this.typeFacility.findById(facility.service_type_id);
     return facility;
  }
}
