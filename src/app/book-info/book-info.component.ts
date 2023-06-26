import {Component, OnInit} from '@angular/core';
import {Book} from "../_entities/Book";
import {BookService} from "../_services/book.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  public books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getUserBook();
  }

  private getUserBook() {
    this.bookService.getUserBooks().subscribe(
      (response: Book[]) => {
        console.log(response);
        this.books = response;
      }
    ), (error: HttpErrorResponse) => {
      console.error(error.message);
    }
  }
}
