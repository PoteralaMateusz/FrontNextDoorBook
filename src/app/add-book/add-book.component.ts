import {Component, OnInit} from '@angular/core';
import {BookService} from "../_services/book.service";
import {map, Observable} from "rxjs";
import {AuthorDTO} from "../_entities/AuthorDTO";
import {AuthorService} from "../_services/author.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  isSuccessful: boolean = false;
  book: any = {
    id: null,
    title: null,
    isbn: null,
    numPages: null,
    language: null,
    publisher: null,
    publishedYear: null,
    bookGenre: null
  };

  author: any = {
    firstName: null,
    lastName: null,
    nationality: null
  };

  public authors: AuthorDTO[] = []; // Zdefiniuj listę autorów

  constructor(private bookService: BookService, private authorService: AuthorService) {
  }

  ngOnInit(): void {
  }


  private addBook(): Observable<number> {
    return this.bookService.addBook(this.book).pipe(
      map(response => {
        this.isSuccessful = true;
        this.reset();
        return response.id;
      })
    );
  }


  private addAuthors(id: number) {
    this.authorService
      .addAuthors(this.author, id)
      .subscribe(
        response => {
          console.log(response)
        },
        error => {

        }
      )
  }

  onSubmit() {
    this.addBook().subscribe(id => {
      this.addAuthors(id);
    }, error => {
      console.error('Błąd:', error);
    });
  }

  reset() {
    this.book = {
      id: null,
      title: null,
      isbn: null,
      numPages: null,
      language: null,
      publisher: null,
      publishedYear: null,
      bookGenre: null
    };
  }


}
