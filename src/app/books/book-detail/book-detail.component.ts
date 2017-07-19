import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookDataService} from "../book-data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: any;

  constructor(private route: ActivatedRoute,
              private bookData: BookDataService) {
  }

  ngOnInit() {
    let isbn = this.route.snapshot.params['isbn'];
    this.bookData.getBookByIsbn(isbn)
      .subscribe(book => this.book = book)
  }

}
