import { Component, EventEmitter, Output } from '@angular/core';
import { Entry } from '../entry';

@Component({
  selector: 'app-blog-form',
  imports: [],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent {
  @Output() entryaddevent = new EventEmitter();

  newentry: Entry;

  constructor() {
    this.newentry = {
      image: 'https://logosandtypes.com/wp-content/uploads/2024/01/angular.svg',
      title: 'Dummy Title',
      text: 'Dummy Text',
    };
  }

  emitNewEntry(image: string, title: string, text: string) {
    if (image != '' && title != '' && text != '') {
      this.newentry = { image: image, title: title, text: text };
      this.entryaddevent.emit(this.newentry);
    }
  }
}
