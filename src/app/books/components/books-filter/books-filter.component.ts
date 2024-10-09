import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-filter',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    MatButtonToggle,
    MatButtonToggleGroup,
    FormsModule
  ],
  templateUrl: './books-filter.component.html',
  styleUrl: './books-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksFilterComponent {
  query = input.required();
  order = input.required();
  queryChange = output<string>();
  orderChange = output<'asc' | 'desc'>();
}
