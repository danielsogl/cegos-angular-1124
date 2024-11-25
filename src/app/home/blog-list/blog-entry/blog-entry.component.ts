import {
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
} from '@angular/core';
import { Entry } from '../../entry';

@Component({
  selector: 'app-blog-entry',
  standalone: true,
  imports: [],
  templateUrl: './blog-entry.component.html',
  styleUrl: './blog-entry.component.css',
})
export class BlogEntryComponent {
  @Input({
    required: true,
  })
  entry!: Entry;
  @Output() entryChange = new EventEmitter<Entry>();

  // transform input values using the transform function
  @Input({ transform: numberAttribute }) value!: number;

  changeTitle(): void {
    // change the title by accessing the object property
    // this.entry.title = 'New Title';
    // this.entryChange.emit(this.entry);

    // emit a new instance of entry using the spread operator
    this.entryChange.emit({ ...this.entry, title: 'New Title' });
  }
}
