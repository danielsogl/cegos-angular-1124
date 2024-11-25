import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BASE_URL } from '../config/config.token';
import { DataService, getBlogPosts } from '../services/data.service';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogEntryComponent } from './blog-list/blog-entry/blog-entry.component';
import { BlogListComponent } from './blog-list/blog-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogListComponent,
    BlogFormComponent,
    BlogEntryComponent,
    FormsModule,
  ],
  // provide own instance of service manually
  // providers: [DataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public dataService = inject(DataService);
  public baseUrl = inject(BASE_URL);

  // runs in injection context!
  public posts = getBlogPosts();

  constructor(public oldDataService: DataService) {
    console.log('Base URL: ' + this.baseUrl);
  }

  foo(): void {
    // runtime error because the dependency injection only works inside the
    // injection context
    const service = inject(DataService);
    console.log('Service: ' + service.blogentries);
  }
}
