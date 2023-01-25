import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeekSetOfRules} from "../shared/week-set-of-rules";

const BASIC_URL =  'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class WeekSetOfRulesService {
  constructor(private  http: HttpClient) { }
  getAll(): Observable<WeekSetOfRules[]> {
    return this.http.get<WeekSetOfRules[]>(`${BASIC_URL}/week-set-of-rules/`)
  }
  getSingle(id: string): Observable<WeekSetOfRules> {
    return this.http.get<WeekSetOfRules>(
      `${BASIC_URL}/week-set-of-rules/${id}`);
  }
  create(weekSetOfRules: WeekSetOfRules): Observable<any> {
    return this.http.post(`${BASIC_URL}/week-set-of-rules/create`, weekSetOfRules,
      { responseType: 'json'}
    );
  }
  update(weekSetOfRules: WeekSetOfRules): Observable<any> {
    return this.http.put(
      `${BASIC_URL}/week-set-of-rules/edit/${weekSetOfRules.id}`,
      weekSetOfRules,
      { responseType: 'text' }
    );
  }
}
