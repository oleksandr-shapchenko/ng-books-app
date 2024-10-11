import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BooksStore } from '../../store/books.store';

@Component({
  standalone: true,
  template: '<router-outlet></router-outlet>',
  imports: [RouterOutlet]
})
export default class BooksRootComponent implements OnInit {
  private readonly store = inject(BooksStore);

  ngOnInit(): void {
    this.store.initialize();
  }
}
