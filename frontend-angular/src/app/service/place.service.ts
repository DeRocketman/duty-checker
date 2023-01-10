import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Place} from "../shared/place";

const BASIC_URL =  'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Place[]> {
    return this.http.get<Place[]>(`${BASIC_URL}/place`)
  }
  getSingle(id: string): Observable<Place> {
    return this.http.get<Place>(
      `${BASIC_URL}/place/${id}`);
  }
  create(place: Place): Observable<any> {
    return this.http.post(`${BASIC_URL}/place/create`, place,
      { responseType: 'json'}
    );
  }
  update(place: Place): Observable<any> {
    return this.http.put(
      `${BASIC_URL}/place/edit/${place.id}`,
      place,
      { responseType: 'text' }
    );
  }
  delete(id: string): Observable<any> {
    return this.http.delete(
      `${BASIC_URL}/place/${id}`,
      { responseType: 'text' }
    );
  }
}
