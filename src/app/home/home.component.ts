import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogEntryService } from './blog-entry.service';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { Entry } from './entry';
import { ProductsModule } from '../products/products.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogListComponent, BlogFormComponent, FormsModule, ProductsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private readonly blogEntryService = inject(BlogEntryService);

  public entries: Entry[] = [];

  ngOnInit(): void {
    this.blogEntryService.loadDummyDate();
    this.entries = this.blogEntryService.getAllEntries();
  }

  handleEntryAddEvent(entry: Entry) {
    this.blogEntryService.addEntry(entry);
  }
}
