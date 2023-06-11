import {Component, OnInit} from '@angular/core';
import {Book} from "../Book/Book";
import {BookService} from "../Book/book.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit{

  public books: Book[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBook();
  }

  private getBook() {
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

export class bookInfo {
}
