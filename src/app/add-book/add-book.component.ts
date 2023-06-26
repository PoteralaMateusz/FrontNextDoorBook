import {Component, OnInit} from '@angular/core';
import {BookAddDTO} from "../_entities/BookAddDTO";
import {BookService} from "../_services/book.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: any = {
    title:null,
    isbn: null,
    numPages: null,
    language: null,
    publisher: null,
    publishedYear: null,
    bookGenre: null
  };

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {

  }


  private addBook() {
    this.bookService
      .addBook(this.book)
      .subscribe(
        response =>{
        },
        error => {

        }
      )
  }

  onSubmit() {
    // Wywołanie metody addBook po kliknięciu przycisku Submit w formularzu
    this.addBook();
  }

}
