import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TravelTime} from "../shared/travel-time";


const BASIC_URL =  'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class TravelTimeService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<TravelTime[]> {
    return this.http.get<TravelTime[]>(`${BASIC_URL}/travel-time`)
  }
  getSingle(id: string): Observable<TravelTime> {
    return this.http.get<TravelTime>(
      `${BASIC_URL}/travel-time/${id}`);
  }
  create(travelTime: TravelTime): Observable<any> {
    return this.http.post(`${BASIC_URL}/travel-time/create`, travelTime,
      { responseType: 'json'}
    );
  }
  update(travelTime: TravelTime): Observable<any> {
    return this.http.put(
      `${BASIC_URL}/travel-time/edit/${travelTime.id}`,
      travelTime,
      { responseType: 'text' }
    );
  }
  delete(id: string): Observable<any> {
    return this.http.delete(
      `${BASIC_URL}/travel-time/${id}`,
      { responseType: 'text' }
    );
  }
}
