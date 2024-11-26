import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from '../products-data.service';
import { Product } from '../product';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  catchError,
  combineLatest,
  filter,
  interval,
  map,
  of,
  switchMap,
  tap,
  shareReplay,
} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productsData = inject(ProductsDataService);
  private readonly destroyRef = inject(DestroyRef);

  public product: Product | undefined = undefined;

  private readonly productId$ = this.activatedRoute.paramMap.pipe(
    filter((map) => map.has('id')),
    map((map) => +map.get('id')!)
  );

  public product$ = this.productId$.pipe(
    switchMap((id) =>
      this.productsData.getProductById(id).pipe(
        // handle backend errors
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return of(undefined);
        })
      )
    )
  );

  public readonly log$ = combineLatest({
    productId: this.productId$,
    product: this.product$,
  }).pipe(
    tap(({ product, productId }) => {
      console.log('Product:', product);
      console.log('Product ID:', productId);
    })
  );

  public interval$ = interval(1000).pipe(
    tap((interval) => console.log('Interval:', interval)),
    // automatically complete observable when the component gets destroyed
    takeUntilDestroyed(this.destroyRef)
  );

  public online$ = interval(1000).pipe(
    map(() => Math.random() > 0.5),
    shareReplay(1) // so called multicasting
  );

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.productsData.getProductById(id).subscribe((product) => {
    //     this.product = product;
    //   });
    // });
    // this.product$.subscribe((product) => {
    //   this.product = product;
    // });
    this.interval$.subscribe();
  }
}
