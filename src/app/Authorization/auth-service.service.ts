import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = "http://localhost:8080/api/auth/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'signin',{
      username: username,
      password: password
    }, httpOptions)
  }

  register(username: string, email: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'signup',{
      username: username,
      email: email,
      password: password
    },httpOptions)
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
