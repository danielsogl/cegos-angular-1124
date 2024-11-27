import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from '../../routing-demo/about/about.component';
import { TestingDataService } from '../testing-data.service';

@Component({
  selector: 'app-testing-demo',
  imports: [FormsModule, AboutComponent],
  templateUrl: './testing-demo.component.html',
  styleUrl: './testing-demo.component.css',
})
export class TestingDemoComponent {
  private readonly data = inject(TestingDataService);
  public posts: unknown[] = [];

  private counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounter() {
    return this.counter;
  }

  loadData() {
    this.data.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
