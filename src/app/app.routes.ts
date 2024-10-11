import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then(r => r.routes)
  },
  { path: '**', redirectTo: 'books' }
];
