import { computed, inject, Signal } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

import { Book } from '../models/book.interface';
import { BooksApiService } from '../services/books-api.service';

type BooksState = {
  books: Book[];
  isLoading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
  isInitialized: boolean;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
  isInitialized: false,
}

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ books, filter }) => ({
    booksCount: computed(() => books().length),
    sortedBooks: computed(() => {
      const direction = filter.order() === 'asc' ? 1 : -1;

      return books().slice().sort((a, b) =>
        direction * a.title.localeCompare(b.title)
      );
    })
  })),
  withMethods((store, booksApi = inject(BooksApiService)) => ({
    getBookById(id: number): Signal<Book> {
      return computed(() => store.books().find(book => book.id === id)!);
    },
    updateQuery(query: string): void {
      patchState(store, (state) => ({ filter: { ...state.filter, query } }));
    },
    updateOrder(order: 'asc' | 'desc'): void {
      patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    },
    initialize() {
      if (!store.isInitialized()) this.loadByQuery('');
    },
    createBook: rxMethod<Book>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((book) => {
          return booksApi.createBook(book).pipe(
            tapResponse({
              next: () => patchState(store, (state) => ({ books: [...state.books, book] })),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false })
            })
          )
        })
      )
    ),
    deleteBook: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((bookId) => {
          return booksApi.deleteBook(bookId).pipe(
            tapResponse({
              next: () => patchState(store, (state) =>
                ({ books: [...state.books.filter(book => book.id !== bookId)] })
              ),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false })
            })
          )
        })
      )
    ),
    updateBook: rxMethod<Book>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((book) => {
          return booksApi.updateBook(book).pipe(
            tapResponse({
              next: (updatedBook) => patchState(store, (state) =>
                ({ books: state.books.map(book => book.id === updatedBook.id ? updatedBook : book) })
              ),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false })
            })
          )
        })
      )
    ),
    loadByQuery: rxMethod<string>(
      pipe(
        debounceTime(100),
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((query) => {
          return booksApi.loadBooksByQuery(query).pipe(
            tapResponse({
              next: (books) => patchState(store, { books }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false, isInitialized: true })
            })
          )
        })
      )
    )
  }))
);
