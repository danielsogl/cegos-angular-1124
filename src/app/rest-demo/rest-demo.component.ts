import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';
import { ProductsDataService } from '../products-data.service';

@Component({
  selector: 'app-rest-demo',
  imports: [FormsModule, RouterLink, ReactiveFormsModule, AsyncPipe],
  templateUrl: './rest-demo.component.html',
  styleUrl: './rest-demo.component.css',
})
export class RestDemoComponent {
  private readonly productsData = inject(ProductsDataService);

  public searchControl = new FormControl('');
  public limitControl = new FormControl(10);

  public products$ = combineLatest({
    searchValue: this.searchControl.valueChanges,
    limitValue: this.limitControl.valueChanges,
  }).pipe(
    switchMap(({ limitValue, searchValue }) => {
      return this.productsData
        .searchProducts({
          searchString: searchValue || '',
          limit: limitValue || 0,
        })
        .pipe(map(({ products }) => products));
    })
  );
}
