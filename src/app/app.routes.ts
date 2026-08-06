import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Empty path means this is the default home route (http://localhost:4200/)
    loadComponent: () =>
      import('./features/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent,
      ),
    title: 'Welcome to My App', // Sets the browser tab title automatically
  },
  {
    path: '**', // Catch-all wildcard route for 404 errors
    redirectTo: '', // Redirects broken links back to the landing page
    pathMatch: 'full',
  },
];
