import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SignIn} from "./SignIn";
import {LoginUser} from "./LoginUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public signIn(signIn:SignIn) : Observable<LoginUser>{
    return this.http.post<LoginUser>(`${this.apiServerUrl}/api/auth/signin`,signIn);
  }
}
