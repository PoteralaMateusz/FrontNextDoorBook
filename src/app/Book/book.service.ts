import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./Book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}/api/books`);
  }
}
