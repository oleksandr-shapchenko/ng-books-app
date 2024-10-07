import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';

import { Book } from '../../models/book.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    NgOptimizedImage
  ],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent {
  readonly book = input.required<Book>();
}
