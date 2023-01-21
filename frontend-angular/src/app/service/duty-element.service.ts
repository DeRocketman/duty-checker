import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DutyElement} from "../shared/duty-element";


const BASIC_URL =  'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class DutyElementService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<DutyElement[]> {
    return this.http.get<DutyElement[]>(`${BASIC_URL}/duty-element`)
  }
  getSingle(id: string): Observable<DutyElement> {
    return this.http.get<DutyElement>(
      `${BASIC_URL}/duty-element/${id}`);
  }
  create(dutyElement: DutyElement): Observable<any> {
    return this.http.post(`${BASIC_URL}/duty-element/create`, dutyElement,
      { responseType: 'json'}
    );
  }
  update(dutyElement: DutyElement): Observable<any> {
    return this.http.put(
      `${BASIC_URL}/duty-element/edit/${dutyElement.id}`,
      dutyElement,
      { responseType: 'text' }
    );
  }
  delete(id: string): Observable<any> {
    return this.http.delete(
      `${BASIC_URL}/duty-element/delete/${id}`,
      { responseType: 'text' }
    );
  }
}
