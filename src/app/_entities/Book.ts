import {Author} from "./Author";

export interface Book {
  id: number;
  tittle: string;
  isbn: number;
  numPages: number;
  language: string;
  publisher: string;
  publishedYear: Date;
  bookGenre: string;
  authors: Author[];
}
