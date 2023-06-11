import {Component, OnInit} from '@angular/core';
import {Book} from "./Book/Book";
import {BookService} from "./Book/book.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontNextDoorBook';

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
