import { Component, inject, signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { FileUploadComponent } from '../../../shared/components/file-upload/component/file-upload.component';

@Component({
  selector: 'app-book-create-dialog',
  standalone: true,
  imports: [
    FileUploadComponent,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    MatError,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatDialogClose
  ],
  templateUrl: './book-create-dialog.component.html',
  styleUrl: './book-create-dialog.component.scss'
})
export class BookCreateDialogComponent {
  readonly form = inject(FormBuilder).group({
    title: [null, [Validators.required]],
    author: [null, [Validators.required]],
    year: [null, [Validators.required]],
    publisher: [null, [Validators.required]],
    description: [null, [Validators.required]],
    coverImage: [null]
  });
  readonly errorMessage = signal('This field is required');

  getDialogResult() {
    const id = Math.floor(Math.random() * 9000 + 1000);
    return { ...this.form.value, id };
  }
}
