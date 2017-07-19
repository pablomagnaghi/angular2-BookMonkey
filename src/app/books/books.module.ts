import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BookDataService} from './book-data.service';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BooksComponent} from './books.component';
import {BookListComponent} from './book-list/book-list.component';
import {BooksRoutingModule} from './books-routing.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BooksRoutingModule
  ],
  providers: [BookDataService]
})
export class BooksModule {
}
