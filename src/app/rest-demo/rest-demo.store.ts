import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  type,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { switchMap } from 'rxjs';
import { Product } from '../product';
import { ProductsDataService } from '../products-data.service';
import {
  entityConfig,
  setEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';

interface RestDemoState {
  loading: boolean;
  // products: Product[];
  errorMessage: string;
}

const initialState: RestDemoState = {
  loading: false,
  // products: [],
  errorMessage: '',
};

const productEntity = entityConfig({
  entity: type<Product>(),
  selectId: (product: Product) => product.id,
  collection: 'products',
});

export const RestDemoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withEntities(productEntity),
  withComputed(({ productsEntities, loading }) => ({
    emptyResult: computed(() => productsEntities.length === 0 && !loading),
  })),
  withMethods((state, productsData = inject(ProductsDataService)) => ({
    setProducts(products: Product[]) {
      patchState(state, setEntities(products, productEntity));
    },
    setLoading(loading: boolean) {
      patchState(state, { loading });
    },
    setError(errorMessage: string) {
      patchState(state, { errorMessage });
    },

    updateProduct(product: Product) {
      patchState(
        state,
        updateEntity(
          {
            id: product.id,
            changes: {
              title: product.title,
            },
          },
          productEntity
        )
      );
    },

    searchProducts: rxMethod<{ searchValue: string; limitValue: number }>(
      switchMap(({ limitValue, searchValue }) => {
        patchState(state, { loading: true });

        return productsData
          .searchProducts({
            searchString: searchValue || '',
            limit: limitValue || 0,
          })
          .pipe(
            tapResponse(
              ({ products }) => {
                patchState(state, setEntities(products, productEntity));
              },
              (error: HttpErrorResponse) => {
                patchState(state, {
                  errorMessage: error.message,
                });
              },
              () => patchState(state, { loading: false })
            )
          );
      })
    ),
  }))
);
