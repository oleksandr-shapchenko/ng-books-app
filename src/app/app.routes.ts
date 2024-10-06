import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadComponent: () => import('./books/pages/books/books.component')
  },
  { path: '**', redirectTo: 'books' }
];
