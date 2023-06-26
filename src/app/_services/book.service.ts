import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../_entities/Book";
import {BookAddDTO} from "../_entities/BookAddDTO";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiServerUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiServerUrl}/api/books/FANTASY`);
  }

  public addBook(book: BookAddDTO): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiServerUrl}/api/books`, book, {headers});
  }
}
