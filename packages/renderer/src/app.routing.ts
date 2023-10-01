import type { Route } from '@angular/router';
import { provideRouter } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(c => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about-us.component').then(c => c.AboutUsComponent),
  },
];
export const appRouting = [provideRouter(routes)];
