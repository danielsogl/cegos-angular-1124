import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { PersonDetailsComponent } from './routing-demo/person-details/person-details.component';
import { PersonListComponent } from './routing-demo/person-list/person-list.component';
import { RestDemoComponent } from './rest-demo/rest-demo.component';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PersonTemplateFormComponent } from './forms/person-template-form/person-template-form.component';
import { ChangePasswordFormComponent } from './forms/change-password-form/change-password-form.component';
import { PersonReactiveFormComponent } from './forms/person-reactive-form/person-reactive-form.component';
import { SignalsDemoComponent } from './signals/signals-demo/signals-demo.component';

export const routes: Routes = [
  // navigate to home when path is empty
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () =>
      import('./routing-demo/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  { path: 'home', component: HomeComponent },
  { path: 'rest-demo', component: RestDemoComponent },
  { path: 'rest-demo/:id', component: ProductDetailsComponent },
  { path: 'rxjs-demo', component: RxjsDemoComponent },
  { path: 'persons', component: PersonListComponent },
  { path: 'persons/:id', component: PersonDetailsComponent },
  { path: 'forms/template', component: PersonTemplateFormComponent },
  { path: 'forms/template-multi', component: ChangePasswordFormComponent },
  { path: 'forms/reactive', component: PersonReactiveFormComponent },
  { path: 'signals', component: SignalsDemoComponent },
  // fallback route if user enters a invalid url
  { path: '**', redirectTo: '' },
];
