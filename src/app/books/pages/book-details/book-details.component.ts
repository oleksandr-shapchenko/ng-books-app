import { ChangeDetectionStrategy, Component, inject, Input, Signal } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { BooksStore } from '../../store/books.store';
import { Book } from '../../models/book.interface';
import { BookEditDialogComponent } from '../../components/book-edit-dialog/book-edit-dialog.component';


@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButton,
    NgOptimizedImage,
    MatProgressSpinner
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BookDetailsComponent {
  readonly store = inject(BooksStore);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);

  @Input() set id(bookId: string) {
    this.book = this.store.getBookById(Number(bookId));
  }

  book!: Signal<Book>;

  deleteBook(): void {
    this.store.deleteBook(this.book().id);

    this.router.navigate(['books']);
  }

  openEditDialog(book: Book): void {
    const dialogRef = this.dialog.open(BookEditDialogComponent, { data: book, autoFocus: false });

    dialogRef.afterClosed().subscribe((result?: Book) => {
      if (result) {
        this.store.updateBook(result);
      }
    });
  }
}
