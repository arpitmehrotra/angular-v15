import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { UsersListComponent } from './app/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: UsersListComponent },
  {
    path: 'details/:index',
    loadComponent: () =>
      import('./app/users/users-view/users-view.component').then(
        (c) => c.UsersViewComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
