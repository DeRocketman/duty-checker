import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../shared/user";
import {Observable, retry} from "rxjs";

const BASIC_URL =  'http://localhost:8080/api'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${BASIC_URL}/user`)
  }

  getByEMail(email: string): Observable<any> {
    return this.http.post(`${BASIC_URL}/user/email`, email,
      { responseType: 'json'}
    );
  }

  getSingle(id: string): Observable<User> {
    return this.http.get<User>(
      `${BASIC_URL}/user/${id}`);
  }
  create(user: User): Observable<any> {
    return this.http.post(`${BASIC_URL}/user/create`, user,
      { responseType: 'json'}
    );
  }
  update(user: User): Observable<any> {
    return this.http.put(
      `${BASIC_URL}/user/edit/${user.id}`,
      user,
      { responseType: 'text' }
    );
  }
  delete(id: string): Observable<any> {
    return this.http.delete(
      `${BASIC_URL}/user/${id}`,
      { responseType: 'text' }
    );
  }
}
