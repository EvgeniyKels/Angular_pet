import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
private url = 'http://localhost:3000/books';
  constructor(private http: HttpClient ) {}
  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.url, book);
  }
  getBooks(criteria?: string): Observable<Book[]> {
    const additional = criteria ? criteria : '';
    return this.http.get<Book[]>(this.url + additional);
  }
  getBook(id: number): Observable<Book> {
    return this.http.get<Book> (`${this.url}/${id}`);
  }
  removeBook(id: number): Observable<object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
