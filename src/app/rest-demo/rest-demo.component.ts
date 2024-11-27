import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RestDemoStore } from './rest-demo.store';

@Component({
  selector: 'app-rest-demo',
  imports: [FormsModule, RouterLink],
  templateUrl: './rest-demo.component.html',
  styleUrl: './rest-demo.component.css',
})
export class RestDemoComponent implements OnInit {
  protected readonly store = inject(RestDemoStore);

  public searchControl = signal('');
  public limitControl = signal(0);

  ngOnInit(): void {
    const params = computed(() => ({
      searchValue: this.searchControl(),
      limitValue: this.limitControl(),
    }));
    this.store.searchProducts(params);
  }
}
