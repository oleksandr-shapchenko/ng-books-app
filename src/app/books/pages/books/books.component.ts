import { Component, OnInit } from '@angular/core';

import { BookListComponent } from '../../components/book-list/book-list.component';
import { BooksApiService } from '../../services/books-api.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    BookListComponent
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export default class BooksComponent implements OnInit {

  constructor (private booksApi: BooksApiService) {}

  ngOnInit() {
      this.booksApi.getAllBooks().subscribe(books => {
        console.log(books);
      });
    }
}
