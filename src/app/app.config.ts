import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  RouterModule,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { BASE_URL } from './config/config.token';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { errorInterceptor } from './error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // bind router url params to inputs
      withComponentInputBinding(),
      // preload all lazy routes when browser is idles
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    // old way of providing routes using modules
    importProvidersFrom(),
    // RouterModule.forRoot(routes, {
    //   bindToComponentInputs: true,
    //   preloadingStrategy: PreloadAllModules,
    // })
    // HttpClientModule
    {
      provide: BASE_URL,
      useValue: 'https://myapi.com',
    },
  ],
};
