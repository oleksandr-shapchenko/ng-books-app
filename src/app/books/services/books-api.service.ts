import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';

import { BOOKS } from '../../core/constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BooksApiService {

  constructor() { }

  getAllBooks() {
    // TODO: implement loading logic
    return of(null).pipe(
      delay(1000),
      map(() => BOOKS)
    );
  }

  getBookById(id: number) {
    return of(null).pipe(
      delay(1000),
      map(() => BOOKS.find(book => book.id === id)!)
    )
  }
}
