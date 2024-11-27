import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Entry } from '../entry';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { FormErrorComponent } from '../../form-error/form-error.component';

@Component({
  selector: 'app-blog-form',
  imports: [FormsModule, JsonPipe, FormErrorComponent],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent {
  @Output() entryaddevent = new EventEmitter<Entry>();

  @ViewChild('form', { static: true }) form!: NgForm;

  newentry: Entry;

  constructor() {
    this.newentry = {
      image: 'https://logosandtypes.com/wp-content/uploads/2024/01/angular.svg',
      title: 'Dummy Title',
      text: 'Dummy Text',
    };
  }

  emitNewEntry() {
    const { image, text, title } = this.form.value as Entry;
    if (image != '' && title != '' && text != '') {
      this.newentry = { image: image, title: title, text: text };
      this.entryaddevent.emit(this.newentry);
    }
  }
}
