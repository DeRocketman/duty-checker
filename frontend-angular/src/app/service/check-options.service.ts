import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CheckOptions} from "../shared/check-options";

const BASIC_URL =  'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class CheckOptionsService {

  constructor(private  http: HttpClient) { }

  update(checkOptions: CheckOptions): Observable<any> {
    return this.http.put(
      `${BASIC_URL}/check-options/edit/${checkOptions.id}`,
      checkOptions,
      { responseType: 'text' }
    );
  }
}
