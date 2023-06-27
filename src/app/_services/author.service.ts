import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BookAddDTO} from "../_entities/BookAddDTO";
import {Observable} from "rxjs";
import {AuthorDTO} from "../_entities/AuthorDTO";

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiServerUrl = "http://localhost:8080/api/authors";
  constructor(private http: HttpClient) {
  }

  public addAuthors(authors: AuthorDTO, id: number): Observable<AuthorDTO> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<AuthorDTO>(`${this.apiServerUrl}/books/${id}/authors`, authors, {headers});
  }
}
