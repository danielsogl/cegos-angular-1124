import { Component, inject, OnInit } from '@angular/core';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-rest-demo',
  imports: [],
  templateUrl: './rest-demo.component.html',
  styleUrl: './rest-demo.component.css',
})
export class RestDemoComponent implements OnInit {
  private readonly productsData = inject(ProductsDataService);
  public products: Product[] = [];

  ngOnInit(): void {
    this.productsData.getPosts().subscribe(({ products }) => {
      this.products = products;
    });
  }
}
