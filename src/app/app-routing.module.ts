import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
        import('./components/home/home.module').then((m) => m.HomeModule)
  },
  {
    path : 'addBooks',
    loadChildren: () =>
        import('./components/add-new-books/add-new-books.module').then((m) => m.AddNewBooksModule)
  },
  {
    path : 'viewBooks',
    loadChildren: () =>
        import('./components/view-books/view-books.module').then((m) => m.ViewBooksModule)
  },
  // Default route
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingMoudle{}