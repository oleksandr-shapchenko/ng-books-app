import { FormControl } from '@angular/forms';

export interface BookForm {
  title: FormControl<string | null>;
  author: FormControl<string | null>;
  year: FormControl<number | null>;
  description: FormControl<string | null>;
  publisher: FormControl<string | null>;
  coverImage: FormControl<File | null>;
}
