import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  private readonly url = 'https://dummyjson.com/productsss';
  private readonly http = inject(HttpClient);

  getPosts(): Observable<ProductsResponse> {
    return this.http.get<ProductsResponse>(this.url, {
      params: {
        limit: 1,
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
