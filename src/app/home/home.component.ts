import { Component } from '@angular/core';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { Entry } from './entry';
import { BlogEntryComponent } from './blog-list/blog-entry/blog-entry.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BlogListComponent,
    BlogFormComponent,
    BlogEntryComponent,
    FormsModule,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blogentries: Entry[] = [];

  // dummy entries for testing purposes - built with AI support
  dummysingleentry: Entry = {
    image: 'https://logosandtypes.com/wp-content/uploads/2024/01/angular.svg',
    title: 'Angular rocks ✌️',
    text: 'Angular provides everything you need to build robust web applications, from components and templates to routing, forms, and state management.',
  };

  dummyentries: Entry[] = [
    {
      title: "Angular 18: What's New?",
      text: 'Discover the exciting new features and improvements in Angular 18, from performance enhancements to new language features.',
      image:
        'https://miro.medium.com/v2/resize:fit:828/format:webp/1*ksoE0XtzILzsGA7nvXQsVA.png',
    },
    {
      title: 'Building Scalable Angular Applications',
      text: 'Learn best practices for creating large-scale Angular applications that are maintainable and performant.',
      image:
        'https://cdn.bulldogjob.com/system/readables/covers/000/000/315/max_res/130524_Scalable_Angular_Application_Architecture.png',
    },
    {
      title: 'Angular vs. React: A Comparison',
      text: 'Compare and contrast Angular and React, two popular JavaScript frameworks, to determine which one is best suited for your project.',
      image:
        'https://miro.medium.com/v2/resize:fit:828/format:webp/1*ybY4O0j0Lm5KB7VG2lL92w.png',
    },
  ];

  constructor() {
    this.blogentries = this.dummyentries; // initialize with dummy entries
  }
}
