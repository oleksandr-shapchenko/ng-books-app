import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RouterLink } from '@angular/router';

import { Book } from '../../models/book.interface';
import { BookItemComponent } from '../book-item/book-item.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [ScrollingModule, BookItemComponent, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  readonly books = input.required<Book[]>();
  readonly bookItemClicked = output<Book>();
}
