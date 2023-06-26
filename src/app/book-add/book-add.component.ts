import { Component } from '@angular/core';
import {AuthServiceService} from "../Authorization/auth-service.service";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  isSuccessful: boolean = false;
  form: any = {
    title: null,
    isbn: null,
    pages: null,
    language: null,
    publisher: null,
    bookGenre: null
  };
  constructor(private authService :AuthServiceService) {
  }

  onSubmit() {
    const {title, isbn, pages, language, publisher, bookGenre} = this.form;
    this.authService.addBook(title, isbn, pages, language, publisher, bookGenre).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
      },
      error: err => {

      }
    });
  }
}
