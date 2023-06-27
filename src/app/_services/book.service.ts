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

  public getUserBooks(): Observable<Book[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Book[]>(`${this.apiServerUrl}/api/books/user`,{headers});
  }

  public getBooks(): Observable<Book[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Book[]>(`${this.apiServerUrl}/api/books/FANTASY`,{headers});
  }


  public addBook(book: BookAddDTO): Observable<BookAddDTO> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<BookAddDTO>(`${this.apiServerUrl}/api/books`, book, {headers});
  }

  public deleteBook(id: number): Observable<Book> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<Book>(`${this.apiServerUrl}/api/books/${id}`, {headers});
  }
}
