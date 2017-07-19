import {Injectable} from '@angular/core';
import {Http} from "@angular/http";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {

  baseUrl: string = 'http://localhost:4730/books/';

  constructor(private http: Http) {
  }

  getBooks(): Observable<any[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json());
  }

  getBookByIsbn(isbn: string): Observable<any> {
    return this.http.get(this.baseUrl + isbn)
      .map(response => response.json())
  }

}
