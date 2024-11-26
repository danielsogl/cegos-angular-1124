import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  private readonly url = 'https://dummyjson.com/products';
  private readonly http = inject(HttpClient);

  getProducts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.url);
  }

  searchProducts(
    props: {
      searchString: string;
      limit: number;
    } = { searchString: '', limit: 10 }
  ): Observable<ProductsResponse> {
    const { limit, searchString: q } = props;

    return this.http.get<ProductsResponse>(`${this.url}/search`, {
      params: {
        q,
        limit,
      },
    });
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addProduct(post: Product): Observable<ProductsResponse> {
    return this.http.post<ProductsResponse>(this.url, post);
  }

  updateProduct(post: Product): Observable<ProductsResponse> {
    return this.http.put<ProductsResponse>(`${this.url}/${post.id}`, post);
  }

  deleteProduct(id: number): Observable<ProductsResponse> {
    return this.http.delete<ProductsResponse>(`${this.url}/${id}`);
  }
}
