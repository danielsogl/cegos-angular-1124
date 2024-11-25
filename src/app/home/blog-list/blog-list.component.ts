import { Component, Input } from '@angular/core';
import { Entry } from '../entry';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  @Input() blogentries: Entry[] = [];
}
