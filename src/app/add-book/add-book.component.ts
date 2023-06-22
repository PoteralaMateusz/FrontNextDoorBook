import {Component, OnInit} from '@angular/core';
import {BookService} from "../_services/book.service";
import {Router} from "@angular/router";
import {Book} from "../Entities/Book";
import {HttpErrorResponse} from "@angular/common/http";
import {BookAddDTO} from "../Entities/BookAddDTO";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: BookAddDTO = {
    title: '',
    isbn: null!,
    numPages: null!,
    language: '',
    publisher: '',
    publishedYear: null!,
    bookGenre: ''
  };

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.addBook();
  }


  private addBook() {
    this.bookService.addBook(this.book).subscribe(
      (response) => {
        this.resetForm();
        console.log('Książka została dodana:', response);
      },
      (error: HttpErrorResponse) => {
        // Obsłuż błąd dodawania książki
        console.error('Wystąpił błąd podczas dodawania książki:', error);
        // Tutaj można dodać obsługę błędu, np. wyświetlić komunikat dla użytkownika
      }
    );
  }

  onSubmit() {
    // Wywołanie metody addBook po kliknięciu przycisku Submit w formularzu
    this.addBook();
  }

  private resetForm() {
    this.book = {
      title: '',
      isbn: null!,
      numPages: null!,
      language: '',
      publisher: '',
      publishedYear: null!,
      bookGenre: ''
    };
  }
}
