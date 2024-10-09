import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

import { BooksStore } from '../../store/books.store';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { BooksFilterComponent } from '../../components/books-filter/books-filter.component';
import { Book } from '../../models/book.interface';
import { BookCreateDialogComponent } from '../../components/book-create-dialog/book-create-dialog.component';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    BookListComponent,
    AsyncPipe,
    BooksFilterComponent,
    MatButton
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export default class BooksComponent implements OnInit {
  readonly store = inject(BooksStore);
  private readonly  dialog = inject(MatDialog);

  ngOnInit() {
    const query = this.store.filter.query;

    this.store.loadByQuery(query);
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(BookCreateDialogComponent, { autoFocus: false });

    dialogRef.afterClosed().subscribe((result?: Book) => {
      if (result) {
        this.store.createBook(result);
      }
    });
  }
}
