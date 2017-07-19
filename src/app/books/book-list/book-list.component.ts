import { Component, OnInit } from '@angular/core';
import {BookDataService} from "../book-data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: any[];

  constructor(public bookData: BookDataService) { }

  ngOnInit() {
    this.bookData.getBooks()
      .subscribe(books => this.books = books);
  }

}
