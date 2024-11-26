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

  getPostById(id: number): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(`${this.url}/${id}`);
  }

  addPost(post: Product): Observable<ProductsResponse> {
    return this.http.post<ProductsResponse>(this.url, post);
  }

  updatePost(post: Product): Observable<ProductsResponse> {
    return this.http.put<ProductsResponse>(`${this.url}/${post.id}`, post);
  }

  deletePost(id: number): Observable<ProductsResponse> {
    return this.http.delete<ProductsResponse>(`${this.url}/${id}`);
  }
}
