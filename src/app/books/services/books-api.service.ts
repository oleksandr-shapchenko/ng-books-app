import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

import { BOOKS } from '../../core/constants/app.constants';
import { Book } from '../models/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {
  private books: Book[] = [...BOOKS];

  constructor() { }

  loadBooksByQuery(query: string): Observable<Book[]> {
    const lowerCaseQuery = query.toLocaleLowerCase();

    return of(null).pipe(
      delay(500),
      map(() => this.books.filter(book => book.title.toLocaleLowerCase().includes(lowerCaseQuery)))
    );
  }

  deleteBook(bookId: number): Observable<null> {
    return of(null).pipe(
      delay(500),
      tap(() => this.books = this.books.filter(book => book.id !== Number(bookId)))
    );
  }

  updateBook(updatedBook: Book): Observable<Book> {
    return of(null).pipe(
      delay(500),
      tap(() => {
        const bookIndex = this.books.findIndex(b => b.id === updatedBook.id);

        if (bookIndex >= 0) {
          this.books.splice(bookIndex, 1, { ...updatedBook });
        }
      }),
      map(() => updatedBook)
    )
  }

  createBook(book: Book): Observable<Book> {
    return of(book).pipe(
      delay(500),
      tap(() => this.books.push(book)),
      map(() => book)
    );
  }
}
