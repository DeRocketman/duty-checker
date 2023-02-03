import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Duty} from "../shared/duty";

const BASIC_URL =  'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class DutyService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Duty[]> {
    return this.http.get<Duty[]>(`${BASIC_URL}/duty`)
  }
  getSingle(id: string): Observable<Duty> {
    return this.http.get<Duty>(
      `${BASIC_URL}/duty/${id}`);
  }
  create(duty: Duty): Observable<any> {
    return this.http.post(`${BASIC_URL}/duty/create`, duty,
      { responseType: 'json'}
    );
  }
  update(duty: Duty): Observable<any> {
    return this.http.put(
      `${BASIC_URL}/duty/edit/${duty.id}`,
      duty,
      { responseType: 'text' }
    );
  }
  delete(id: string): Observable<any> {
    return this.http.delete(
      `${BASIC_URL}/duty/${id}`,
      { responseType: 'text' }
    );
  }
}
