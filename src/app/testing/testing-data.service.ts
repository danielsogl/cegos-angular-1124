import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestingDataService {
  private http = inject(HttpClient);

  public getPosts(): Observable<unknown[]> {
    return this.http.get<unknown[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
