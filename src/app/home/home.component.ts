import { Component } from '@angular/core';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { Entry } from './entry';
import { BlogEntryComponent } from './blog-list/blog-entry/blog-entry.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogListComponent,
    BlogFormComponent,
    BlogEntryComponent,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public message = 'Hello, World!';
  public styleClass = 'title';

  public name = 'Max Mustermann';

  public entry: Entry = {
    image: 'https://placehold.co/600x400',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.',
    title: 'Lorem Ipsum',
  };

  public showAlert(): void {
    alert('Hello, World!' + this.name);
  }

  public getName(): string {
    console.log('getName called');
    return this.name;
  }
}
