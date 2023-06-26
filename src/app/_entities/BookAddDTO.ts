import {Author} from "./Author";

export interface BookAddDTO {
  title: string;
  isbn: number;
  numPages: number;
  language: string;
  publisher: string;
  publishedYear: Date;
  bookGenre: string;
}
