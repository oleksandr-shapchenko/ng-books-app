import { Routes } from '@angular/router';

import BooksRootComponent from './pages/books-root/books-root.component';
import { BooksStore } from './store/books.store';

const children: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/books/books.component')
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/book-details/book-details.component')
  }
];

export const routes: Routes = [
  { path: '', component: BooksRootComponent, children, providers: [BooksStore] },
  { path: '**', redirectTo: '' }
];
