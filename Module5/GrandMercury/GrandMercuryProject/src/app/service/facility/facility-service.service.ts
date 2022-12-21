import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facility} from "../../model/facility/Facility";
@Injectable({
  providedIn: 'root'
})
export class FacilityServiceService {
  base_url = "http://localhost:3000/facility";

  constructor(private http: HttpClient) {

  }

  findAllByName(name: string): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${this.base_url}?name_like=${name}`);
  }

  findById(id: any): Observable<Facility> {
    return this.http.get<Facility>(`${this.base_url}/${id}`);
  }
}
