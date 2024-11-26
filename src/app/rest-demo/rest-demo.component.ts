import { Component, inject, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rest-demo',
  imports: [FormsModule],
  templateUrl: './rest-demo.component.html',
  styleUrl: './rest-demo.component.css',
})
export class RestDemoComponent implements OnInit {
  private readonly productsData = inject(ProductsDataService);
  public products: Product[] = [];

  public searchString = '';
  public resultLimit = 10;

  ngOnInit(): void {
    this.productsData.getProducts().subscribe(({ products }) => {
      this.products = products;
    });
  }

  search(): void {
    this.productsData
      .searchProducts({
        searchString: this.searchString,
        limit: this.resultLimit,
      })
      .subscribe(({ products }) => {
        this.products = products;
      });
  }
}
