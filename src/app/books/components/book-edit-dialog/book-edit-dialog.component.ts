import { Component, inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

import { Book } from '../../models/book.interface';
import { FileUploadComponent } from '../../../shared/components/file-upload/component/file-upload.component';

@Component({
  selector: 'app-book-edit-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatError,
    ReactiveFormsModule,
    FileUploadComponent
  ],
  templateUrl: './book-edit-dialog.component.html',
  styleUrl: './book-edit-dialog.component.scss'
})
export class BookEditDialogComponent {
  readonly book = inject<Book>(MAT_DIALOG_DATA);
  readonly form = inject(FormBuilder).group({
    title: [this.book.title, [Validators.required]],
    author: [this.book.author, [Validators.required]],
    year: [this.book.year, [Validators.required]],
    publisher: [this.book.publisher, [Validators.required]],
    description: [this.book.description, [Validators.required]],
    coverImage: [null]
  });
  readonly errorMessage = signal('This field is required');
}
