import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './books.component';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    children: [
      {path: '', component: BookListComponent},
      {path: 'detail/:isbn', component: BookDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BooksRoutingModule {
}
