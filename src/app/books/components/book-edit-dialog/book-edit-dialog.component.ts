import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-book-edit-dialog',
  standalone: true,
  imports: [],
  templateUrl: './book-edit-dialog.component.html',
  styleUrl: './book-edit-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookEditDialogComponent {

}
