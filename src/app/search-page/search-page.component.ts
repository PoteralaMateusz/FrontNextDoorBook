import {Component, OnInit} from '@angular/core';
import {Book} from "../_entities/Book";
import {BookService} from "../_services/book.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{

  public books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getUserBook();
  }

  private getUserBook() {
    this.bookService.getBooks().subscribe(
      (response: Book[]) => {
        console.log(response);
        this.books = response;
      }
    ), (error: HttpErrorResponse) => {
      console.error(error.message);
    }
  }
}
