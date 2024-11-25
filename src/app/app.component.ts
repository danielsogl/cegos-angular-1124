import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // alternate way to define template and styles

  // template: `<h1>Hello World</h1>`,
  // styles: ['h1 { font-weight: normal; }'],
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';
}
