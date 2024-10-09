import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () => import('./books/pages/books/books.component')
  },
  {
    path: 'books/:id',
    loadComponent: () => import('./books/pages/book-details/book-details.component')
  },
  { path: '**', redirectTo: 'books' }
];
