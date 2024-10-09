import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { Observable } from 'rxjs';

import { Book } from '../../models/book.interface';
import { BooksApiService } from '../../services/books-api.service';
import { BookEditDialogComponent } from '../../components/book-edit-dialog/book-edit-dialog.component';


@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class BookDetailsComponent {
  booksApi = inject(BooksApiService);
  dialog = inject(MatDialog);
  router = inject(Router);

  @Input() set id(bookId: string) {
    this.book$ = this.booksApi.getBookById(Number(bookId));
  }

  book$!: Observable<Book>;

  delete(): void {
    // TODO: implement delete logic
    // this.booksApi.deleteBook(this.book$.id).subscribe(() => {
    //   // Handle successful deletion
    // });

    this.router.navigate(['books']);
  }

  openEditDialog(book: Book): void {
    const dialogRef = this.dialog.open(BookEditDialogComponent, { data: book, autoFocus: false });

    dialogRef.afterClosed().subscribe((result?: Book) => {
      if (result) {
        // TODO: implement update logic

      }
    });
  }
}
