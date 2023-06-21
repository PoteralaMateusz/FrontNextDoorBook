import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Address} from "./address";

const AUTH_API = "http://localhost:8080/api/auth/";
const BOOK_API = "http://localhost:8080/api/books/";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: username,
      password: password
    }, httpOptions)
  }

  register(username: string, email: string, password: string, address: Address): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: username,
      email: email,
      password: password,
      roles: ['user'],
      address: address
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  addBook(title: string, isbn: number, pages: number, language: string, publisher: string, bookGenre: string): Observable<any> {
    return this.http.post(BOOK_API, {
      title: title,
      isbn: isbn,
      pages: pages,
      language: language,
      publisher: publisher,
      bookGenre: bookGenre
    }, httpOptions).pipe(
      tap(response => {
        console.log(response);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', {}, httpOptions);
  }
}
