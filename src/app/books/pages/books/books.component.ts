import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { BookListComponent } from '../../components/book-list/book-list.component';
import { BooksApiService } from '../../services/books-api.service';
import { Book } from '../../models/book.interface';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    BookListComponent,
    AsyncPipe
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export default class BooksComponent {
  books$: Observable<Book[]>;

  constructor (private booksApi: BooksApiService) {
    this.books$ = this.booksApi.getAllBooks()
  }
}
