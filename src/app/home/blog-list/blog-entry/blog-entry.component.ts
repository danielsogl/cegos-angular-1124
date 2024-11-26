import { DatePipe, UpperCasePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  numberAttribute,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CustomTitlePipe } from '../../custom-title.pipe';
import { Entry } from '../../entry';

@Component({
  selector: 'app-blog-entry',
  standalone: true,
  imports: [CustomTitlePipe, UpperCasePipe],
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

  public readonly today = new Date().toISOString();

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['entry']);
  }

  ngOnInit(): void {
    console.log('BlogEntryComponent initialized');
    console.log(this.entry);
  }

  ngOnDestroy(): void {
    console.log('BlogEntryComponent destroyed');
  }

  changeTitle(): void {
    // change the title by accessing the object property
    // this.entry.title = 'New Title';
    // this.entryChange.emit(this.entry);

    // emit a new instance of entry using the spread operator
    this.entryChange.emit({ ...this.entry, title: 'New Title' });
  }
}
