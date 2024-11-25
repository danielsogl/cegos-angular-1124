import { Component, Input } from '@angular/core';
import { Entry } from '../entry';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogEntryComponent, NgFor, NgIf],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  @Input({ required: true }) blogentries: Entry[] = [];
}
