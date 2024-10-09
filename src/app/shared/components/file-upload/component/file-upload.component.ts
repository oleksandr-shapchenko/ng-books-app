import { Component, forwardRef, input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { FileEventTarget } from '../models/file-event-target.type';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatButton],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FileUploadComponent), multi: true }],
})
/**
 * @desc This component is raw
 *
 * It lacks much important logic such as:
 * disabled state, accepted formats, errors handling and display, etc...
 */
export class FileUploadComponent implements ControlValueAccessor {
  static count = 0;

  label = input.required();

  id = FileUploadComponent.count++;
  selectedFile: File | null = null;

  onChange(value?: File) {}
  onTouched() {}
  registerOnChange = (fn: any) => (this.onChange = fn);
  registerOnTouched = (fn: any) => (this.onTouched = fn);
  writeValue = (value: File) => (this.selectedFile = value);

  onFileChange(eventTarget: FileEventTarget) {
    const files = eventTarget.files!;
    if (files.length) {
      const file = files[0];

      this.selectedFile = file;
      this.onTouched();
      this.onChange(file);

      /** This allows 'change' event to be emitted after selection of the same file **/
      eventTarget.value = null;
    }
  }
}
